import { readFileSync } from "fs";
import { join } from "path";

import { bestTimes } from "../bestTimes";
import { Circuit, CircuitInfo, Direction } from "../Circuit";

const canada_nano_raw = readFileSync(join(__dirname, "canada_nano.hbs"), "utf-8");
const canada_nano_json = JSON.parse(canada_nano_raw);

const CANADA_NANO_INFO: CircuitInfo = {
  finishLine: {
    bounds: {
      minX: -26,
      maxX: 4,
      minY: 23,
      maxY: 245,
    },
    passingDirection: Direction.LEFT,
  },
  sectorOne: {
    bounds: {
      minX: -26,
      maxX: 4,
      minY: 23,
      maxY: 245,
    },
    passingDirection: Direction.LEFT,
  },
  sectorTwo: {
    bounds: {
      minX: -165,
      maxX: -135,
      minY: -1232,
      maxY: -964,
    },
    passingDirection: Direction.RIGHT,
  },
  sectorThree: {
    bounds: {
      minX: 5700,
      maxX: 5730,
      minY: -200,
      maxY: 100,
    },
    passingDirection: Direction.RIGHT,
  },
  name: "Circuit Gilles Villeneuve By Nanoseb",
  boxLine: {
    minX: 0,
    maxX: 700,
    minY: 245,
    maxY: 310,
  },
  pitlaneStart: {
    minX: 1030,
    maxX: 1060,
    minY: 183,
    maxY: 470,
  },
  pitlaneEnd: {
    minX: -1564,
    maxX: -1534,
    minY: 183,
    maxY: 244,
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
    x: canada_nano_json.redSpawnPoints[canada_nano_json.redSpawnPoints.length - 1][0],
    y: canada_nano_json.redSpawnPoints[canada_nano_json.redSpawnPoints.length - 1][1],
  },
  BestTime: bestTimes.canada_nano,
  MainColor: [0xd6001d, 0xffffff, 0xd6001d],
  AvatarColor: 0x000001,
  Angle: 90,
  Limit: 5,
  Votes: 0,
  pitSpeed: 0.97,
  CutDetectSegments: [
  ],
};

export const CANADA_NANO: Circuit = {
  map: canada_nano_raw,
  info: CANADA_NANO_INFO,
};
