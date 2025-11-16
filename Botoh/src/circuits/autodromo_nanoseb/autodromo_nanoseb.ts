

import { readFileSync } from "fs";
import { join } from "path";

import { bestTimes } from "../bestTimes";
import { Circuit, CircuitInfo, Direction } from "../Circuit";

const autodromo_nanoseb_raw = readFileSync(join(__dirname, "autodromo_nanoseb.hbs"), "utf-8");
const autodromo_nanoseb_json = JSON.parse(autodromo_nanoseb_raw);




const AUTODROMO_NANOSEB_INFO: CircuitInfo = {
  finishLine: {
    bounds: {
      minX: -15,
      maxX: 15,
      minY: -280,
      maxY: 50,
    },
    passingDirection: Direction.RIGHT,
  },
  sectorOne: {
    bounds: {
      minX: -15,
      maxX: 15,
      minY: -280,
      maxY: 50,
    },
    passingDirection: Direction.RIGHT,
  },
  sectorTwo: {
    bounds: {
      minX: 2188,
      maxX: 3220,
      minY: -135,
      maxY: -105,
    },
    passingDirection: Direction.DOWN,
  },
  sectorThree: {
    bounds: {
      minX: -1860,
      maxX: -1830,
      minY: 1324,
      maxY: 1949,
    },
    passingDirection: Direction.LEFT,
  },
  name: "Autodromo Nanoseb By Nanoseb",
  boxLine: {
    minX: -1485,
    maxX: -85,
    minY: -350,
    maxY: -280,
  },
  pitlaneStart: {
    minX: -1500,
    maxX: -1485,
    minY: -280,
    maxY: -207,
  },
  pitlaneEnd: {
    minX: -85,
    maxX: -70,
    minY: -280,
    maxY: -207,
  },
  drsStart: [
    {
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0,
    },
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
    {
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0,
    },
  ],
  checkpoints: [],
  lastPlace: {
    x: autodromo_nanoseb_json.redSpawnPoints[
      autodromo_nanoseb_json.redSpawnPoints.length - 1
    ][0],
    y: autodromo_nanoseb_json.redSpawnPoints[
      autodromo_nanoseb_json.redSpawnPoints.length - 1
    ][1],
  },
  BestTime: bestTimes.autodromo_nanoseb,
  MainColor: [0xF7FF00, 0x002033, 0xFF1212],
  AvatarColor: 0xffc300,
  Angle: 90,
  Limit: 5, 
  Votes: 0,
  CutDetectSegments: 
[
  {
    v0: [1323.453185335297,-1982.0060293570573],
    v1: [1403.9785523951612,-1865.1179514036137],
    index: 164,
    penalty: 5
  },
  {
    v0: [-1390.4197171200008,968.6681395200005],
    v1: [355.0876185600002,348.2851737600002],
    index: 165,
    penalty: 5
  },
  {
    v0: [445.7161106769596,778.1145660970651],
    v1: [95.64480000000003,682.3440000000002],
    index: 166,
    penalty: 5
  },
  {
    v0: [-453.0428236800002,633.9878553600004],
    v1: [-242.16703488000013,1361.8494489600007],
    index: 167,
    penalty: 5
  },
  {
    v0: [2314.137600000001,-407.0736000000001],
    v1: [2790.028800000001,-277.6032000000001],
    index: 169,
    penalty: 5
  },
  {
    v0: [2321.649216000001,-1010.2890240000004],
    v1: [2180.5142472455163,-895.9538738682073],
    index: 170,
    penalty: 5
  },
  {
    v0: [2209.0000000000005,-57.000000000000014],
    v1: [2033.0000000000005,452.0000000000001],
    index: 171,
    penalty: 5
  },
  {
    v0: [2129.0000000000005,173.00000000000003],
    v1: [2524.0000000000005,285.00000000000006
    ],
    index: 172,
    penalty: 5
  },
  {
    v0: [-1972.0000000000005,67.00000000000001
    ],
    v1: [-2188.0000000000005,-164.00000000000003
    ],
    index: 173,
    penalty: 5
  }
],
};

export const AUTODROMO_NANOSEB: Circuit = {
  map: autodromo_nanoseb_raw,
  info: AUTODROMO_NANOSEB_INFO,
};
