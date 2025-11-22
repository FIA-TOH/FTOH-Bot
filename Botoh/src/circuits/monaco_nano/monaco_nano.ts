import { readFileSync } from "fs";
import { join } from "path";

import { bestTimes } from "../bestTimes";
import { Circuit, CircuitInfo, Direction } from "../Circuit";

const monaco_nano_raw = readFileSync(join(__dirname, "monaco_nano.hbs"), "utf-8");
const monaco_nano_json = JSON.parse(monaco_nano_raw);

const MONACO_NANO_INFO: CircuitInfo = {
  finishLine: {
    bounds: {
      minX: 17,
      maxX: 294,
      minY: -15,
      maxY: 15,
    },
    passingDirection: Direction.UP,
  },
  sectorOne: {
    bounds: {
      minX: 17,
      maxX: 167,
      minY: -15,
      maxY: 15,
    },
    passingDirection: Direction.UP,
  },
  sectorTwo: {
    bounds: {
      minX: 2995,
      maxX: 3025,
      minY: -2026,
      maxY: -1865,
    },
    passingDirection: Direction.RIGHT,
  },
  sectorThree: {
    bounds: {
      minX: 676,
      maxX: 826,
      minY: -452,
      maxY: -422,
    },
    passingDirection: Direction.DOWN,
  },
  name: "Monaco Circuit By Nanoseb",
  boxLine: {
    minX: 179,
    maxX: 303,
    minY: 34,
    maxY: 630,
  },
  pitlaneStart: {
    minX: 257,
    maxX: 324,
    minY: 729,
    maxY: 759,
  },
  pitlaneEnd: {
    minX: 167,
    maxX: 294,
    minY: -70,
    maxY: -40,
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
    x: monaco_nano_json.redSpawnPoints[monaco_nano_json.redSpawnPoints.length - 1][0],
    y: monaco_nano_json.redSpawnPoints[monaco_nano_json.redSpawnPoints.length - 1][1],
  },
  BestTime: bestTimes.monaco_nano,
  MainColor: [0xd6001d, 0xd6001d, 0xffffff],
  AvatarColor: 0xffffff,
  Angle: 60,
  Limit: 5,
  Votes: 0,
};

export const MONACO_NANO: Circuit = {
  map: monaco_nano_raw,
  info: MONACO_NANO_INFO,
};
