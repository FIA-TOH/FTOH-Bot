import { playerList } from "../../changePlayerState/playerList";
// import { isRaining, rainEnabled } from "../../rain/rain";

const isRaining = false;
const rainEnabled = false;

export function updateGripCounter(
  playersAndDiscs: { p: PlayerObject; disc: DiscPropertiesObject }[]
) {
  playersAndDiscs.forEach((player) => {
    const playerInfo = playerList[player.p.id];

    if (isRaining && rainEnabled) {
      playerInfo.gripCounter++;
    }

    playerList[player.p.id] = playerInfo;
  });
}

export function calculateGripMultiplier(
  wear: number, // 0 = novo, 100 = destruído
  norm: Number,
  maxGrip: number,
  minGrip: number
) {
  const vida = 100 - wear; // converte para o mesmo sistema do amigo
  let grip;

  if (vida >= 90) {
    // 100–90% (pneus frios)
    grip = maxGrip * 0.9995;
  } else if (vida >= 75) {
    // 90–75% (ótimo)
    grip = maxGrip;
  } else if (vida >= 65) {
    // 75–65% (ligeiro desgaste)
    const factor = (vida - 65) / 10; // 0 → 1
    grip = minGrip + (maxGrip - minGrip) * (0.85 + 0.15 * factor);
  } else if (vida >= 55) {
    // 65–55%
    const factor = (vida - 55) / 10;
    grip = minGrip + (maxGrip - minGrip) * (0.7 + 0.15 * factor);
  } else if (vida >= 45) {
    // 55–45%
    const factor = (vida - 45) / 10;
    grip = minGrip + (maxGrip - minGrip) * (0.5 + 0.2 * factor);
  } else if (vida >= 30) {
    // 45–30%
    const factor = (vida - 30) / 15;
    grip = minGrip + (maxGrip - minGrip) * (0.35 + 0.15 * factor);
  } else if (vida >= 20) {
    // 30–20%
    const factor = (vida - 20) / 10;
    grip = minGrip + (maxGrip - minGrip) * (0.2 + 0.15 * factor);
  } else {
    // < 20%
    const factor = vida / 20; // 0–1
    grip = minGrip + (maxGrip - minGrip) * (0.1 + 0.1 * factor);
  }

  return grip;
}
