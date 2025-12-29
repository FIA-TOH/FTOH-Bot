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
      maxX: 294,
      minY: -15,
      maxY: 15,
    },
    passingDirection: Direction.UP,
  },
  sectorOne: {
    bounds: {
      minX: 17,
      maxX: 294,
      minY: -15,
      maxY: 15,
    },
    passingDirection: Direction.UP,
  },
  sectorTwo: {
    bounds: {
      minX: 2995,
      maxX: 3025,
      minY: -1969,
      maxY: -1814,
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
      1771.3566259200009,
      -663.9186124800003
    ],
    v1: [
      1733.262935040001,
      -530.5906944000003
    ],
    index: 206,
    penalty: 5
  },
  {
    v0: [
      1771.3566259200009,
      -663.9186124800003
    ],
    v1: [
      1842.102051840001,
      -533.3116723200003
    ],
    index: 207,
    penalty: 5
  },
  {
    v0: [
      627.2596823733047,
      668.3914648240133
    ],
    v1: [
      664.9638162864542,
      829.4909460892883
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
