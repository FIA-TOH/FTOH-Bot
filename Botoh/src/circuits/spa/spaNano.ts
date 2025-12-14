import { bestTimes } from "../bestTimes";
import { Circuit, CircuitInfo, Direction } from "../Circuit";

import { readFileSync } from "fs";
import { join } from "path";

const spaNano_raw = readFileSync(join(__dirname, "spaNano.hbs"), "utf-8");
const spaNano_json = JSON.parse(spaNano_raw);

const SPANANO_INFO: CircuitInfo = {
  finishLine: {
    bounds: {
      minX: -1025,
      maxX: -995,
      minY: -475,
      maxY: -186,
    },
    passingDirection: Direction.LEFT,
  },
  name: "Circuit de Spa-Francorchamps By Nanoseb",
  sectorOne: {
    bounds: {
      minX: -1025,
      maxX: -995,
      minY: -475,
      maxY: -186,
    },
    passingDirection: Direction.LEFT,
  },
  sectorTwo: {
    bounds: {
      minX: 1728,
      maxX: 1758,
      minY: -579,
      maxY: -426,
    },
    passingDirection: Direction.RIGHT,
  },
  sectorThree: {
    bounds: {
      minX: 880,
      maxX: 910,
      minY: 1480,
      maxY: 1603,
    },
    passingDirection: Direction.LEFT,
  },
  boxLine: {
    minX: -1300,
    maxX: -500,
    minY: -475,
    maxY: -410,
  },
  pitlaneStart: {
    minX: -127,
    maxX: -1,
    minY: -464,
    maxY: -434,
  },
  pitlaneEnd: {
    minX: -1500,
    maxX: -1470,
    minY: -410,
    maxY: -349,
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
    x: spaNano_json.redSpawnPoints[spaNano_json.redSpawnPoints.length - 1][0],
    y: spaNano_json.redSpawnPoints[spaNano_json.redSpawnPoints.length - 1][1],
  },
  BestTime: bestTimes.spaNano,
  MainColor: [0x000001, 0xfae042, 0xed2939],
  AvatarColor: 0xffffff,
  Angle: 0,
  Limit: 5,
  Votes: 0,
  pitSpeed: 0.97,
};

export const SPANANO: Circuit = {
  map: spaNano_raw,
  info: SPANANO_INFO,
};
