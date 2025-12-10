import * as fs from "fs";
import * as path from "path";
import { playerList } from "../../changePlayerState/playerList";
import { positionList } from "./positionList";
import { getBestLap } from "../../zones/laps/trackBestLap";
import { getBestPit } from "../../tires&pits/trackBestPit";

export interface StandingsRow {
  position: number;
  name: string;
  pits: number;
  bestLap: number;
  laps: number;
  gap: string;
}

/**
 * Generate HTML standings table from positionList and playerList.
 * Returns HTML string ready to write to file.
 */
export function generateStandingsHtml(): string {
  const bestLap = getBestLap();
  const bestPit = getBestPit();

  const rows: StandingsRow[] = positionList.map((p, idx) => ({
    position: idx + 1,
    name: p.name,
    pits: p.pits,
    bestLap: p.time,
    laps: playerList[p.id]?.currentLap ?? 0,
    gap: idx === 0 ? "—" : `+${(p.time - positionList[0].time).toFixed(3)}s`,
  }));

  const timestamp = new Date().toLocaleString();

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Race Standings</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: "Monaco", "Courier New", monospace;
      background: #1a1a1a;
      color: #fff;
      padding: 20px;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    h1 {
      text-align: center;
      margin-bottom: 10px;
      font-size: 32px;
    }
    .timestamp {
      text-align: center;
      font-size: 12px;
      color: #888;
      margin-bottom: 20px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      background: #2a2a2a;
      border: 1px solid #444;
    }
    th {
      background: #333;
      padding: 12px;
      text-align: left;
      border-bottom: 2px solid #555;
      font-weight: bold;
      font-size: 14px;
      color: #aaa;
      text-transform: uppercase;
    }
    td {
      padding: 10px 12px;
      border-bottom: 1px solid #444;
      font-size: 14px;
    }
    tr:hover {
      background: #353535;
    }
    .pos {
      font-weight: bold;
      color: #ffaa00;
      width: 40px;
    }
    .name {
      min-width: 150px;
      font-weight: 500;
    }
    .points {
      font-weight: bold;
      color: #0f0;
      text-align: center;
      width: 70px;
    }
    .wins {
      text-align: center;
      width: 60px;
      color: #ff6b6b;
    }
    .pits {
      text-align: center;
      width: 60px;
      color: #6b9eff;
    }
    .bestlap {
      text-align: center;
      width: 100px;
      font-family: "Courier New", monospace;
    }
    .laps {
      text-align: center;
      width: 60px;
      color: #ffff00;
    }
    .gap {
      text-align: center;
      width: 80px;
      color: #888;
    }
    .info-box {
      margin-top: 30px;
      padding: 15px;
      background: #2a2a2a;
      border: 1px solid #444;
      border-radius: 4px;
    }
    .info-row {
      margin-bottom: 8px;
      font-size: 13px;
    }
    .info-label {
      color: #aaa;
      font-weight: bold;
      display: inline-block;
      width: 120px;
    }
    .info-value {
      color: #fff;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>⚡ Race Standings ⚡</h1>
    <div class="timestamp">Last updated: ${timestamp}</div>

    <table>
      <thead>
        <tr>
          <th class="pos">P</th>
          <th class="name">Driver</th>
          <th class="pits">Pits</th>
          <th class="bestlap">Best Lap</th>
          <th class="laps">Laps</th>
          <th class="gap">Gap</th>
        </tr>
      </thead>
      <tbody>
        ${rows
          .map(
            (r) => `
        <tr>
          <td class="pos">${r.position}</td>
          <td class="name">${escapeHtml(r.name)}</td>
          <td class="pits">${r.pits}</td>
          <td class="bestlap">${r.bestLap < 999.999 ? r.bestLap.toFixed(3) : "N/A"}</td>
          <td class="laps">${r.laps}</td>
          <td class="gap">${r.gap}</td>
        </tr>
        `
          )
          .join("")}
      </tbody>
    </table>

    <div class="info-box">
      ${
        bestLap
          ? `<div class="info-row"><span class="info-label">⚡ Fastest Lap:</span> <span class="info-value">${escapeHtml(
              bestLap.playerName
            )} - ${bestLap.lapTime.toFixed(3)}s (Lap ${bestLap.lapNumber})</span></div>`
          : ""
      }
      ${
        bestPit
          ? `<div class="info-row"><span class="info-label">🔧 Fastest Pit:</span> <span class="info-value">${escapeHtml(
              bestPit.playerName
            )} - ${bestPit.pitTime.toFixed(3)}s (Stop ${bestPit.pitNumber})</span></div>`
          : ""
      }
    </div>
  </div>

  <script>
    // Optional: auto-refresh every 3 seconds (comment out if you prefer manual refresh)
    // setTimeout(() => location.reload(), 3000);
  </script>
</body>
</html>
`;

  return html;
}

/**
 * Save standings HTML to a file. Default: project root standings.html
 */
export function saveStandingsHtml(destFile?: string): string {
  const out = destFile
    ? path.resolve(destFile)
    : path.resolve(__dirname, "..", "..", "..", "standings.html");

  const html = generateStandingsHtml();

  try {
    fs.writeFileSync(out, html, { encoding: "utf8" });
    console.log(`Standings saved to: ${out}`);
    return out;
  } catch (err) {
    console.error("Failed to save standings HTML:", err);
    throw err;
  }
}

/**
 * Escape HTML special characters to prevent injection.
 */
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}