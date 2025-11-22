import { readFileSync } from "fs";
import { join } from "path";

import { bestTimes } from "../bestTimes";
import { Circuit, CircuitInfo, Direction } from "../Circuit";

const grecia_raw = readFileSync(join(__dirname, "grecia.hbs"), "utf-8");
const grecia_json = JSON.parse(grecia_raw);

const GRECIA_INFO: CircuitInfo = {
  finishLine: {
    bounds: {
      minX: -115,
      maxX: -85,
      minY: 725,
      maxY: 1073,
    },
    passingDirection: Direction.LEFT,
  },
  sectorOne: {
    bounds: {
      minX: -115,
      maxX: -85,
      minY: 725,
      maxY: 1073,
    },
    passingDirection: Direction.LEFT,
  },
  sectorTwo: {
    bounds: {
      minX: -427,
      maxX: -397,
      minY: 583,
      maxY: 702,
    },
    passingDirection: Direction.RIGHT,
  },
  sectorThree: {
    bounds: {
      minX: 74,
      maxX: 183,
      minY: -163,
      maxY: -133,
    },
    passingDirection: Direction.DOWN,
  },
  name: "Autodromo Grecia By Nanoseb",
  boxLine: {
    minX: -420,
    maxX: 480,
    minY: 725,
    maxY: 800,
  },
  pitlaneStart: {
    minX: 480,
    maxX: 730,
    minY: 725,
    maxY: 880,
  },
  pitlaneEnd: {
    minX: -450,
    maxX: -420,
    minY: 800,
    maxY: 880,
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
    x: grecia_json.redSpawnPoints[grecia_json.redSpawnPoints.length - 1][0],
    y: grecia_json.redSpawnPoints[grecia_json.redSpawnPoints.length - 1][1],
  },
  BestTime: bestTimes.grecia,
  MainColor: [0x16204F, 0xF0F0F0, 0x16204F],
  AvatarColor: 0x000000,
  Angle: 60,
  Limit: 5,
  Votes: 0,
};

export const GRECIA: Circuit = {
  map: grecia_raw,
  info: GRECIA_INFO,
};
