import {
  generalGameMode,
  GeneralGameMode,
} from "../../../changeGameState/changeGameModes";
import { playerList } from "../../../changePlayerState/playerList";
import { centerText } from "../../../chat/centerText";
import {
  sendErrorMessage,
  sendChatMessage,
  MAX_PLAYER_NAME,
  sendNonLocalizedSmallChatMessage,
} from "../../../chat/chat";
import { MESSAGES } from "../../../chat/messages";
import { leagueScuderia } from "../../../scuderias/scuderias";
import { getPlayersOrderedByQualiTime } from "./playerTime";

const HAXBALL_MSG_LIMIT = 124;
const TEAM_COL_WIDTH = 12;

export function printAllTimes(room: RoomObject, toPlayerID?: number) {
  if (generalGameMode === GeneralGameMode.GENERAL_RACE) {
    sendErrorMessage(room, MESSAGES.TIMES_IN_RACE(), toPlayerID);
    return;
  }

  const orderedList = getPlayersOrderedByQualiTime();

  if (orderedList.length === 0) {
    sendChatMessage(room, MESSAGES.NO_TIMES(), toPlayerID);
    return;
  }

  let messageBuffer = ` P - ${centerText("Name", MAX_PLAYER_NAME)} | ${centerText(
    "Team",
    TEAM_COL_WIDTH,
  )} | Best Lap\n`;

  orderedList.forEach((p, index: number) => {
    const position = String(index + 1).padStart(2, "0");
    const nameCentered = centerText(p.name, MAX_PLAYER_NAME);

    const teamKey =
      p.team ??
      (typeof p.id === "number" ? playerList[p.id]?.leagueScuderia : null) ??
      null;

    let teamTag = "---";

    if (teamKey && typeof p.id === "number") {
      const playerData = playerList[p.id];

      if (playerData?.bestTimeWithTeam?.length) {
        const teamEntry = playerData.bestTimeWithTeam.find(
          (t) => t.team === teamKey,
        );

        if (teamEntry) {
        }

        if (teamEntry && teamEntry.bestTimeSeconds === p.time) {
          const key = teamKey as keyof typeof leagueScuderia;
          teamTag = leagueScuderia[key]?.tag ?? String(teamKey);
        } else {
        }
      } else {
      }
    } else {
    }

    const teamCentered = centerText(teamTag, TEAM_COL_WIDTH);
    const displayedTime =
      p.time === Number.MAX_VALUE ? "N/A" : p.time.toFixed(3);

    const line = `${position} - ${nameCentered} | ${teamCentered} | ${displayedTime}\n`;

    if (messageBuffer.length + line.length > HAXBALL_MSG_LIMIT) {
      sendNonLocalizedSmallChatMessage(room, messageBuffer, toPlayerID);
      messageBuffer = "";
    }

    messageBuffer += line;
  });

  if (messageBuffer.length > 0) {
    sendNonLocalizedSmallChatMessage(room, messageBuffer, toPlayerID);
  }

  const teamLaps: {
    name: string;
    team: string;
    time: number;
  }[] = [];

  orderedList.forEach((p) => {
    if (typeof p.id !== "number") {
      return;
    }

    const playerData = playerList[p.id];

    if (!playerData?.bestTimeWithTeam?.length) return;

    playerData.bestTimeWithTeam.forEach((entry) => {
      teamLaps.push({
        name: p.name,
        team: entry.team,
        time: entry.bestTimeSeconds,
      });
    });
  });

  if (teamLaps.length === 0) {
    return;
  }

  teamLaps.sort((a, b) => a.time - b.time);

  let teamMessageBuffer =
    "\n--- SCUDERIAS ---\n" +
    ` P - ${centerText("Name", MAX_PLAYER_NAME)} | ${centerText(
      "Team",
      TEAM_COL_WIDTH,
    )} | Best Lap\n`;

  teamLaps.forEach((entry, index) => {
    const position = String(index + 1).padStart(2, "0");
    const nameCentered = centerText(entry.name, MAX_PLAYER_NAME);

    const key = entry.team as keyof typeof leagueScuderia;
    const teamTag = leagueScuderia[key]?.tag ?? entry.team;
    const teamCentered = centerText(teamTag, TEAM_COL_WIDTH);

    const displayedTime = entry.time.toFixed(3);

    const line = `${position} - ${nameCentered} | ${teamCentered} | ${displayedTime}\n`;

    if (teamMessageBuffer.length + line.length > HAXBALL_MSG_LIMIT) {
      sendNonLocalizedSmallChatMessage(room, teamMessageBuffer, toPlayerID);
      teamMessageBuffer = "";
    }

    teamMessageBuffer += line;
  });

  if (teamMessageBuffer.length > 0) {
    sendNonLocalizedSmallChatMessage(room, teamMessageBuffer, toPlayerID);
  }
}
