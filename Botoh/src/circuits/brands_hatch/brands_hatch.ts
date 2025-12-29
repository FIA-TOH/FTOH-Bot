

import { readFileSync } from "fs";
import { join } from "path";

import { bestTimes } from "../bestTimes";
import { Circuit, CircuitInfo, CircuitPhysics, Direction } from "../Circuit";

const brands_hatch_raw = readFileSync(join(__dirname, "brands_hatch.hbs"), "utf-8");
const brands_hatch_json = JSON.parse(brands_hatch_raw);




const BRANDS_HATCH_INFO: CircuitInfo = {
  finishLine: {
    bounds: {
      minX: -100,
      maxX: 235,
      minY: -15,
      maxY: 15,
    },
    passingDirection: Direction.UP,
  },
  sectorOne: {
    bounds: {
      minX: -100,
      maxX: 235,
      minY: -15,
      maxY: 15,
    },
    passingDirection: Direction.UP,
  },
  sectorTwo: {
    bounds: {
      minX: 290,
      maxX: 560,
      minY: 415,
      maxY: 445,
    },
    passingDirection: Direction.DOWN,
  },
  sectorThree: {
    bounds: {
      minX: 2915,
      maxX: 2945,
      minY: 427,
      maxY: 740,
    },
    passingDirection: Direction.LEFT,
  },
  name: "Brands Hatch By Nanoseb",
  boxLine: {
    minX: 235,
    maxX: 290,
    minY: -30,
    maxY: 650,
  },
  pitlaneStart: {
    minX: 177,
    maxX: 235,
    minY: 620,
    maxY: 650,
  },
  pitlaneEnd: {
    minX: 177,
    maxX: 235,
    minY: -30,
    maxY: 0,
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
    x: brands_hatch_json.redSpawnPoints[
      brands_hatch_json.redSpawnPoints.length - 1
    ][0],
    y: brands_hatch_json.redSpawnPoints[
      brands_hatch_json.redSpawnPoints.length - 1
    ][1],
  },
  BestTime: bestTimes.brands_hatch,
  MainColor: [0x10a100, 0xffff00, 0x10a100],
  AvatarColor: 0x00008c,
  Angle: 90,
  Limit: 5,
  Votes: 0,
  physicsType: CircuitPhysics.FH_NEWGEN,
};

export const BRANDS_HATCH: Circuit = {
  map: brands_hatch_raw,
  info: BRANDS_HATCH_INFO,
};
