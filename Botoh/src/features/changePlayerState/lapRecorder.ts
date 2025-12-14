import fs from "fs";
import path from "path";
import { playerList } from "./playerList";

// fallback in-memory store for lap times to ensure we always have the data
const lapStore: { [key: string]: { name: string; laps: number[] } } = {};

export function addLapToStore(playerId: number, playerName: string, lapTime: number) {
  const key = String(playerId);
  if (!lapStore[key]) lapStore[key] = { name: playerName, laps: [] };
  lapStore[key].name = playerName;
  lapStore[key].laps.push(lapTime);
}

function getTimestamp() {
  const d = new Date();
  return (
    d.getFullYear().toString() +
    (d.getMonth() + 1).toString().padStart(2, "0") +
    d.getDate().toString().padStart(2, "0") +
    "_" +
    d.getHours().toString().padStart(2, "0") +
    d.getMinutes().toString().padStart(2, "0") +
    d.getSeconds().toString().padStart(2, "0")
  );
}

export function exportAllLapTimesCsv(room: RoomObject) {
  try {
    const players = room.getPlayerList();
    if (!players || players.length === 0) return null;

    // build header with max laps across players
    let maxLaps = 0;
    const rows: string[] = [];

    players.forEach((p) => {
      const data = playerList[p.id];
      const lapsFromList = data && data.lapTimes ? data.lapTimes : [];
      const lapsFromStore = lapStore[String(p.id)]
        ? lapStore[String(p.id)].laps
        : [];
      const laps = lapsFromList.length > 0 ? lapsFromList : lapsFromStore;
      if (laps.length > maxLaps) maxLaps = laps.length;
    });

    const header = ["PlayerName", "PlayerId"]
      .concat(Array.from({ length: maxLaps }, (_, i) => `Lap${i + 1}`))
      .join(",");
    rows.push(header);

    players.forEach((p) => {
      const data = playerList[p.id];
      const lapsFromList = data && data.lapTimes ? data.lapTimes : [];
      const storeEntry = lapStore[String(p.id)];
      const lapsFromStore = storeEntry ? storeEntry.laps : [];
      const laps = lapsFromList.length > 0 ? lapsFromList : lapsFromStore;
      const displayName = (storeEntry?.name || p.name).replace(/,/g, "");
      const line = [displayName, p.id.toString()].concat(
        Array.from({ length: maxLaps }, (_, i) =>
          typeof laps[i] === "number" ? laps[i].toString() : ""
        )
      );
      rows.push(line.join(","));
    });

    const csv = rows.join("\n");
    const fileName = `lap_times_${getTimestamp()}.csv`;
    const dest = path.join(process.cwd(), fileName);
    fs.writeFileSync(dest, csv, "utf8");
    return dest;
  } catch (err) {
    // best-effort: don't crash the bot
    try {
      console.error("Failed to export lap times CSV:", err);
    } catch {}
    return null;
  }
}

export default exportAllLapTimesCsv;
