import { readFileSync } from "fs";
import { join } from "path";

import { bestTimes } from "../bestTimes";
import { Circuit, CircuitInfo, CircuitPhysics, Direction } from "../Circuit";

const monaco_nano_raw = readFileSync(join(__dirname, "monaco_nano.hbs"), "utf-8");
const monaco_nano_json = JSON.parse(monaco_nano_raw);

const MONACO_NANO_INFO: CircuitInfo = {
  finishLine: {
    bounds: {
      minX: 17,
      maxX: 299,
      minY: -15,
      maxY: 15,
    },
    passingDirection: Direction.UP,
  },
  sectorOne: {
    bounds: {
      minX: 17,
      maxX: 299,
      minY: -15,
      maxY: 15,
    },
    passingDirection: Direction.UP,
  },
  sectorTwo: {
    bounds: {
      minX: 2980,
      maxX: 3010,
      minY: -1998,
      maxY: -1830,
    },
    passingDirection: Direction.RIGHT,
  },
  sectorThree: {
    bounds: {
      minX: 688,
      maxX: 819,
      minY: -400,
      maxY: -370,
    },
    passingDirection: Direction.DOWN,
  },
  name: "Circuit de Monaco By Nanoseb",
  boxLine: {
    minX: 179,
    maxX: 303,
    minY: 34,
    maxY: 630,
  },
  pitlaneStart: {
    minX: 453,
    maxX: 519,
    minY: 906,
    maxY: 936,
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
  physicsType: CircuitPhysics.SEMINEWGEN,
  CutDetectSegments: 
[
  {
    v0: [
      1778.7600000000007,
      -667.1808000000002
    ],
    v1: [
      1840.5792000000006,
      -538.8768000000001
    ],
    index: 206,
    penalty: 5
  },
  {
    v0: [
      1778.7600000000007,
      -667.1808000000002
    ],
    v1: [
      1734.4368000000006,
      -529.5456000000001
    ],
    index: 207,
    penalty: 5
  },
  {
    v0: [
      734.7228115230724,
      818.8271506391045
    ],
    v1: [
      625.2284832399364,
      671.2478386053124
    ],
    index: 208,
    penalty: 5
  }
]
};

export const MONACO_NANO: Circuit = {
  map: monaco_nano_raw,
  info: MONACO_NANO_INFO,
};
