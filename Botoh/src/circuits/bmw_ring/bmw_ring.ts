

import { readFileSync } from "fs";
import { join } from "path";

import { bestTimes } from "../bestTimes";
import { Circuit, CircuitInfo, CircuitPhysics, Direction } from "../Circuit";

const bmw_ring_raw = readFileSync(join(__dirname, "bmw_ring.hbs"), "utf-8");
const bmw_ring_json = JSON.parse(bmw_ring_raw);




const BMW_RING_INFO: CircuitInfo = {
  finishLine: {
    bounds: {
      minX: -15,
      maxX: 15,
      minY: -425,
      maxY: 50,
    },
    passingDirection: Direction.RIGHT,
  },
  sectorOne: {
    bounds: {
      minX: -15,
      maxX: 15,
      minY: -425,
      maxY: 50,
    },
    passingDirection: Direction.RIGHT,
  },
  sectorTwo: {
    bounds: {
      minX: -910,
      maxX: -880,
      minY: 960,
      maxY: 1810,
    },
    passingDirection: Direction.LEFT,
  },
  sectorThree: {
    bounds: {
      minX: -82,
      maxX: -52,
      minY: -1499,
      maxY: -1160,
    },
    passingDirection: Direction.RIGHT,
  },
  name: "BMW Ring By Nanoseb",
  boxLine: {
    minX: 0,
    maxX: 700,
    minY: -425,
    maxY: -370,
  },
  pitlaneStart: {
    minX: -100,
    maxX: -70,
    minY: -370,
    maxY: -300,
  },
  pitlaneEnd: {
    minX: 770,
    maxX: 800,
    minY: -370,
    maxY: -300,
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
    x: bmw_ring_json.redSpawnPoints[
      bmw_ring_json.redSpawnPoints.length - 1
    ][0],
    y: bmw_ring_json.redSpawnPoints[
      bmw_ring_json.redSpawnPoints.length - 1
    ][1],
  },
  BestTime: bestTimes.bmw_ring,
  MainColor: [0x000001, 0xdd0000, 0xffce00],
  AvatarColor: 0xffc300,
  Angle: 90,
  Limit: 5, 
  Votes: 0,
  physicsType: CircuitPhysics.FH_NEWGEN,
CutDetectSegments: 
[
  {
    v0: [
      -1137.979314469602,
      -714.6647200810603
    ],
    v1: [
      -1089.9922349437754,
      -522.716401977754
    ],
    index: 203,
    penalty: 5
  },
  {
    v0: [
      -598.0165272576003,
      -290.92695920640017
    ],
    v1: [
      -668.5442749440003,
      -543.6513884160003
    ],
    index: 204,
    penalty: 5
  },
  {
    v0: [
      -1323.3410631431352,
      -1235.38485955054
    ],
    v1: [
      -1391.307220464686,
      -909.5471053325174
    ],
    index: 205,
    penalty: 5
  },
  {
    v0: [
      -1553.2265952601451,
      -1205.3997901439736
    ],
    v1: [
      -1397.3042343459992,
      -923.5401377222483
    ],
    index: 206,
    penalty: 5
  },
  {
    v0: [
      -395.94112812257805,
      44.328120872966615
    ],
    v1: [
      -409.0555764722962,
      16.658371892536948
    ],
    index: 207,
    penalty: 5
  },
  {
    v0: [
      479.00095303680024,
      415.8198457344002
    ],
    v1: [
      217.46055536640011,
      697.9308364800004
    ],
    index: 208,
    penalty: 5
  },
  {
    v0: [
      217.46055536640011,
      697.9308364800004
    ],
    v1: [
      406.7317794816002,
      61.98387701760005
    ],
    index: 209,
    penalty: 5
  },
  {
    v0: [
      -1420.4031121433093,
      927.5688261002706
    ],
    v1: [
      -1558.3443950922583,
      1251.0269140356697
    ],
    index: 210,
    penalty: 5
  },
  {
    v0: [
      -2766.1123698101474,
      73.6944435575194
    ],
    v1: [
      -2282.813926014322,
      289.6363014237391
    ],
    index: 211,
    penalty: 5
  },
  {
    v0: [
      -82,
      -1160.6877930056132
    ],
    v1: [
      292.00000000000006,
      -1196.0000000000002
    ],
    index: 214,
    penalty: 5
  },
  {
    v0: [
      -1159.2998525952007,
      1012.3670449152005
    ],
    v1: [
      -1563.3650737152009,
      1251.8675214336006
    ],
    index: 215,
    penalty: 5
  }
]
};

export const BMW_RING: Circuit = {
  map: bmw_ring_raw,
  info: BMW_RING_INFO,
};
