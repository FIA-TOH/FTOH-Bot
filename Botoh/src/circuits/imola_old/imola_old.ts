import { bestTimes } from "../bestTimes";
import { Circuit, CircuitInfo, Direction } from "../Circuit";

import { readFileSync } from "fs";
import { join } from "path";

const imola_old_raw = readFileSync(join(__dirname, "imola_old.hbs"), "utf-8");
const imola_old_json = JSON.parse(imola_old_raw);

const IMOLA_OLD_INFO: CircuitInfo = {
  finishLine: {
    bounds: {
      minX: -50,
      maxX: -20,
      minY: -130,
      maxY: 235,
    },
    passingDirection: Direction.LEFT,
  },
  sectorOne: {
    bounds: {
      minX: -50,
      maxX: -20,
      minY: -130,
      maxY: 235,
    },
    passingDirection: Direction.LEFT,
  },
  sectorTwo: {
    bounds: {
      minX: -2360,
      maxX: -2390,
      minY: 1940,
      maxY: 2242,
    },
    passingDirection: Direction.LEFT,
  },
  sectorThree: {
    bounds: {
      minX: 165,
      maxX: 195,
      minY: 800,
      maxY: 1150,
    },
    passingDirection: Direction.LEFT,
  },
  name: "Enzo and Dino Ferrari International Circuit 1994 (Imola 1994) By Nanoseb",
  boxLine: {
    minX: -495,
    maxX: 505,
    minY: -130,
    maxY: -75,
  },
  pitlaneStart: {
    minX: 680,
    maxX: 710,
    minY: -230,
    maxY: -125,
  },
  pitlaneEnd: {
    minX: -525,
    maxX: -495,
    minY: -75,
    maxY: 2,
  },
  drsStart: [
    {
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0,
    },
  ],
  drsEnd: [
    {
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0,
    },
  ],
  checkpoints: [],
  lastPlace: {
    x: imola_old_json.redSpawnPoints[imola_old_json.redSpawnPoints.length - 1][0],
    y: imola_old_json.redSpawnPoints[imola_old_json.redSpawnPoints.length - 1][1],
  },
  BestTime: bestTimes.imola_old,
  MainColor: [0x009246, 0xfffff1, 0xce2b37],
  AvatarColor: 0x000001,
  Angle: 0,
  Limit: 5,
  Votes: 0,
};

export const IMOLA_OLD: Circuit = {
  map: imola_old_raw,
  info: IMOLA_OLD_INFO,
};
