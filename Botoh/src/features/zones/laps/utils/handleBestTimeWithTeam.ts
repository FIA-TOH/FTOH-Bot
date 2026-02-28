import { PlayerInfo } from "../../../changePlayerState/playerList";

export function updateBestTimeWithTeam(
  playerData: PlayerInfo,
  lapTime: number,
) {
  const team = playerData.leagueScuderia;

  if (!team) return;

  if (!playerData.bestTimeWithTeam) {
    playerData.bestTimeWithTeam = [];
  }

  const teamIndex = playerData.bestTimeWithTeam.findIndex(
    (t) => t.team === team,
  );

  if (teamIndex === -1) {
    playerData.bestTimeWithTeam.push({
      team,
      bestTimeSeconds: lapTime,
    });
    return;
  }

  if (lapTime < playerData.bestTimeWithTeam[teamIndex].bestTimeSeconds) {
    playerData.bestTimeWithTeam[teamIndex].bestTimeSeconds = lapTime;
  }
}
