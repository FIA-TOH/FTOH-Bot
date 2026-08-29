import { bestTimes } from "../bestTimes";
import { Circuit, CircuitInfo, CircuitPhysics, Direction, SpecificDirection } from "../Circuit";

import { readFileSync } from "fs";
import { join } from "path";

const bakuSeasonTres_raw = readFileSync(join(__dirname, "bakuSeasonTres.hbs"), "utf-8");
const bakuSeasonTres_json = JSON.parse(bakuSeasonTres_raw);

const BAKUSEASONTRES_INFO: CircuitInfo = {
  finishLine: {
    bounds: {
      minX: 2424,
      maxX: 2456,
      minY: -115,
      maxY: 227,
    },
    passingDirection: Direction.RIGHT,
  },
  name: "Baku City Circuit - By Ximb - NewGenV3",
  sectorOne: {
    bounds: {
      minX: 2424,
      maxX: 2456,
      minY: -115,
      maxY: 227,
    },
    passingDirection: Direction.RIGHT,
  },
  sectorTwo: {
    bounds: {
      minX: 420,
      maxX: 452,
      minY: -579,
      maxY: -427,
    },
    passingDirection: Direction.LEFT,
  },
  sectorThree: {
    bounds: {
      minX: -3857,
      maxX: -3825,
      minY: 800,
      maxY: 1064,
    },
    passingDirection: Direction.RIGHT,
  },
  boxLine: {
    minX: 1338,
    maxX: 2422,
    minY: -115,
    maxY: -32,
  },
  pitlaneStart: {
    minX: 818,
    maxX: 850,
    minY: -137,
    maxY: 52,
  },
  pitlaneEnd: {
    minX: 3633,
    maxX: 3665,
    minY: -39,
    maxY: 58,
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
    x: 1286,
    y: -64,
  },
  BestTime: bestTimes.bakuSeasonTres,
  MainColor: [0x00b5e2, 0xef3340, 0x509e2f],
  AvatarColor: 0xffffff,
  Angle: 90,
  Limit: 5,
  Votes: 0,
  pitSpeed: 0.97,
  pitGap: 19,
  new_safetycar: true,
  physicsType: CircuitPhysics.WEC_NEWGEN,
  TireDegradationPercentage: -10,

CutDetectSegments: [
  { v0: [4110, -202], v1: [4166, -202], index: 250, penalty: 5 },
  { v0: [3497, -1529], v1: [3495, -1584], index: 252, penalty: 5 },
  { v0: [1478, -1081], v1: [1417, -1081], index: 254, penalty: 5 },
  { v0: [-1623, -144], v1: [-1572, -139], index: 256, penalty: 5 },
  { v0: [-1539, -1156], v1: [-1494, -1200], index: 258, penalty: 5 },
  { v0: [-4303, 161], v1: [-4267, 166], index: 260, penalty: 5 },
  { v0: [-3435, 1250], v1: [-3432, 1162], index: 262, penalty: 5 },
    { v0: [-1416, 39], v1: [-1390, 2], index: 264, penalty: 5 },
],
CrashWallDetector: [
  {
    index: "250-251",
    v0: [592, 54],
    v1: [3861, 54],
    curvatura: 0,
  },
  {
    index: "252-253",
    v0: [4103, -123],
    v1: [4087, -1224],
    curvatura: 0,
  },
  {
    index: "254-255",
    v0: [3691, -1527],
    v1: [3041, -1527],
    curvatura: 0,
  },
  {
    index: "255-256",
    v0: [3041, -1527],
    v1: [1700, -1504],
    curvatura: 0,
  },
  {
    index: "257-258",
    v0: [1478, -1238],
    v1: [1494, -690],
    curvatura: 0,
  },
  {
    index: "259-260",
    v0: [453, -442],
    v1: [1360, -461],
    curvatura: 0,
  },
  {
    index: "261-262",
    v0: [436, -578],
    v1: [365, -561],
    curvatura: 0,
  },
  {
    index: "262-263",
    v0: [365, -561],
    v1: [-64, -499],
    curvatura: 0,
  },
  {
    index: "264-265",
    v0: [-157, -386],
    v1: [-131, -153],
    curvatura: 0,
  },
  {
    index: "266-267",
    v0: [-93, 65],
    v1: [-858, 157],
    curvatura: 0,
  },
  {
    index: "268-269",
    v0: [-1368, 203],
    v1: [-881, 144],
    curvatura: 0,
  },
  {
    index: "270-271",
    v0: [-1548, -412],
    v1: [-1573, -50],
    curvatura: 0,
  },
  {
    index: "272-273",
    v0: [-1439, -104],
    v1: [-1376, -1019],
    curvatura: 0,
  },
  {
    index: "274-275",
    v0: [-2002, -1309],
    v1: [-1944, -1475],
    curvatura: 0,
  },
  {
    index: "276-277",
    v0: [-3418, -1518],
    v1: [-2236, -1617],
    curvatura: 10,
  },
  {
    index: "278-276",
    v0: [-3674, -1477],
    v1: [-3418, -1518],
    curvatura: 0,
  },
  {
    index: "279-280",
    v0: [-3744, -1424],
    v1: [-4116, -898],
    curvatura: 0,
  },
  {
    index: "281-282",
    v0: [-4166, -785],
    v1: [-4288, -109],
    curvatura: 0,
  },
  {
    index: "283-284",
    v0: [-4466, 259],
    v1: [-3243, 1823],
    curvatura: 0,
  },
  {
    index: "285-286",
    v0: [-3092, 1046],
    v1: [-2764, 765],
    curvatura: 0,
  },
  {
    index: "287-288",
    v0: [-2905, 1119],
    v1: [-2647, 898],
    curvatura: 0,
  },
  {
    index: "289-290",
    v0: [-2667, 717],
    v1: [-1689, 598],
    curvatura: 0,
  },
  {
    index: "291-292",
    v0: [-1241, 211],
    v1: [-99, 71],
    curvatura: 0,
  },
  {
    index: "293-294",
    v0: [-1203, 337],
    v1: [-59, 204],
    curvatura: 0,
  },
],




};

export const BAKUSEASONTRES: Circuit = {
  map: bakuSeasonTres_raw,
  info: BAKUSEASONTRES_INFO,
};
