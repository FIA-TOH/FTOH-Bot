

import { readFileSync } from "fs";
import { join } from "path";

import { bestTimes } from "../bestTimes";
import { Circuit, CircuitInfo, Direction } from "../Circuit";

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
      minX: -1546,
      maxX: -1516,
      minY: 1300,
      maxY: 1673,
    },
    passingDirection: Direction.LEFT,
  },
  sectorThree: {
    bounds: {
      minX: -1379,
      maxX: -1349,
      minY: -837,
      maxY: -627,
    },
    passingDirection: Direction.LEFT,
  },
  name: "BMW Ring By Nanoseb",
  boxLine: {
    minX: -100,
    maxX: 700,
    minY: -425,
    maxY: -370,
  },
  pitlaneStart: {
    minX: -150,
    maxX: -120,
    minY: -245,
    maxY: -195,
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
  MainColor: [0xF7FF00, 0x002033, 0xFF1212],
  AvatarColor: 0xffc300,
  Angle: 90,
  Limit: 5, 
  Votes: 0,
CutDetectSegments: 
[
  {
    "v0": [
      459.84526848000013,
      99.31569408000003
    ],
    "v1": [
      512.9043379200002,
      89.79227136000003
    ],
    "index": 200,
    "penalty": 5
  },
  {
    "v0": [
      96.59471616000003,
      35.372712960000015
    ],
    "v1": [
      95.23422720000003,
      5.441955840000002
    ],
    "index": 201,
    "penalty": 5
  },
  {
    "v0": [
      -1185.9663939954287,
      -692.3850045869266
    ],
    "v1": [
      -1059.1433981057442,
      -457.5910797641322
    ],
    "index": 202,
    "penalty": 5
  },
  {
    "v0": [
      -1717.2519173170801,
      -625.5458581045252
    ],
    "v1": [
      -1545.8694904391282,
      -445.59430988267553
    ],
    "index": 203,
    "penalty": 5
  },
  {
    "v0": [
      -380.4689876690537,
      -327.34043533688856
    ],
    "v1": [
      -438.73901280755746,
      -580.9864271162577
    ],
    "index": 204,
    "penalty": 5
  },
  {
    "v0": [
      -1410.477373205546,
      -262.21511312326675
    ],
    "v1": [
      -1283.6543773158614,
      -387.3242847441718
    ],
    "index": 205,
    "penalty": 5
  },
  {
    "v0": [
      -82.70064125240286,
      -1160.6877930056132
    ],
    "v1": [
      314.65813574792014,
      -1201.2537064729422
    ],
    index: 206,
    penalty: 5
  },
  {
    v0: [
      -1498.5126731166392,
      -1106.8868565489513
    ],
    v1: [
      -1376.1296054392367,
      -908.3543245389428
    ],
    index: 207,
    penalty: 5
  },
  {
    v0: [
      -769.6535145045534,
      -1302.6997648327954
    ],
    v1: [
      -690.1888771538021,
      -1146.7878885034477
    ],
    index: 208,
    penalty: 5
  },
  {
    v0: [
      -383.89663620661275,
      -1405.3359003992075
    ],
    v1: [
      -325.62661106810907,
      -1280.2267287783025
    ],
    index: 209,
    penalty: 5
  },
  {
    v0: [
      -2520.744834778691,
      -819.5918971128178
    ],
    v1: [
      -2448.7806682029313,
      -643.6794899276276
    ],
    index: 210,
    penalty: 5
  },
  {
    v0: [
      -2289.6692230894405,
      289.6363014237391
    ],
    v1: [
      -2493.614311074203,
      167.9547783403931
    ],
    index: 211,
    penalty: 5
  },
  {
    v0: [
      -1093.4555310261253,
      1085.4595125177075
    ],
    v1: [
      -1407.2992574815214,
      489.75613364058626
    ],
    index: 212,
    penalty: 5
  },
  {
    v0: [
      -1749.1290487163794,
      767.6177768081026
    ],
    v1: [
      -1407.2992574815214,
      489.75613364058626
    ],
    index: 213,
    penalty: 5
  },
  {
    v0: [
      231.16801672398245,
      440.5790436386489
    ],
    v1: [
      538.4854977805709,
      329.07447086590446
    ],
    index: 214,
    penalty: 5
  },
  {
    v0: [
      731.5787823382503,
      296.43898615193046
    ],
    v1: [
      962.7467990622329,
      182.21478965302146
    ],
    index: 215,
    penalty: 5
  },
  {
    v0: [
      1012.3889022010438,
      404.3156853590634
    ],
    v1: [
      1091.2579902598143,
      295.53073631248344
    ],
    index: 216,
    penalty: 5
  },
  {
    v0: [
      716.3785443498399,
      779.7900422946822
    ],
    v1: [
      778.0762180259027,
      935.7480507536186
    ],
    index: 217,
    penalty: 5
  }
]
};

export const BMW_RING: Circuit = {
  map: bmw_ring_raw,
  info: BMW_RING_INFO,
};
