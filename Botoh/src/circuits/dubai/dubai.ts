

import { readFileSync } from "fs";
import { join } from "path";

import { bestTimes } from "../bestTimes";
import { Circuit, CircuitInfo, Direction } from "../Circuit";

const dubai_raw = readFileSync(join(__dirname, "dubai.hbs"), "utf-8");
const dubai_json = JSON.parse(dubai_raw);




const DUBAI_INFO: CircuitInfo = {
  finishLine: {
    bounds: {
      minX: 285,
      maxX: 315,
      minY: -130,
      maxY: 250,
    },
    passingDirection: Direction.LEFT,
  },
  sectorOne: {
    bounds: {
      minX: 285,
      maxX: 315,
      minY: -130,
      maxY: 250,
    },
    passingDirection: Direction.LEFT,
  },
  sectorTwo: {
    bounds: {
      minX: -1400,
      maxX: -1370,
      minY: -1780,
      maxY: -1300,
    },
    passingDirection: Direction.LEFT,
  },
  sectorThree: {
    bounds: {
      minX: 2285,
      maxX: 2315,
      minY: -1470,
      maxY: -1110,
    },
    passingDirection: Direction.RIGHT,
  },
  name: "Dubai Autodrome By Nanoseb",
  boxLine: {
    minX: -500,
    maxX: 400,
    minY: -130,
    maxY: -75,
  },
  pitlaneStart: {
    minX: 725,
    maxX: 755,
    minY: -75,
    maxY: -10,
  },
  pitlaneEnd: {
    minX: -500,
    maxX: -470,
    minY: -75,
    maxY: -10,
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
    x: dubai_json.redSpawnPoints[
      dubai_json.redSpawnPoints.length - 1
    ][0],
    y: dubai_json.redSpawnPoints[
      dubai_json.redSpawnPoints.length - 1
    ][1],
  },
  BestTime: bestTimes.dubai,
  MainColor: [0x10a100, 0xffff00, 0x10a100],
  AvatarColor: 0x00008c,
  Angle: 90,
  Limit: 5,
  Votes: 0,
  CutDetectSegments: 
[
  {
    v0: [2785.2059222702073,-990.9397695320312],
    v1: [2172.0274344538184,-1088.7721049088007],
    index: 163,
    penalty: 5
  },
  {
    v0: [-2116.890346807297,-1350.4300488253448],
    v1: [-2321.5971344670734,-1494.8356122132489],
    index: 164,
    penalty: 5
  },
  {
    v0: [-2372.8184923729627,-567.7173140976591],
    v1: [-2544.7328903039443,-585.7083557415991],
    index: 165,
    penalty: 5
  },
  {
    v0: [-2288.2727736852494,-138.05806609612807],
    v1: [-2461.2420748861455,-36.49810942771202],
    index: 167,
    penalty: 5
  },
  {
    v0: [-1625.1907618359046,-2001.0036317315382],
    v1: [-1805.1011782753037,-2166.9210157812063],
    index: 168,
    penalty: 5
  },
  {
    v0: [-1106.0514030919687,-1924.8785537310732],
    v1: [-1664.5104472173464,-1672.0649575678035],
    index: 169,
    penalty: 5
  },
  {
    v0: [-1654.4634144768008,-1198.9717106688006],
    v1: [-1758.785707929601,-1112.2813541376006],
    index: 170,
    penalty: 5
  },
  {
    v0: [1362.2816732791296,-2005.6413224664207],
    v1: [1629.1887710901135,-2170.919025035415],
    index: 171,
    penalty: 5
  },
  {
    v0: [612.7098080256003,-630.3417449472004],
    v1: [489.28624957440024,-730.2560541696004],
    index: 172,
    penalty: 5
  },
  {
    v0: [1336.7829296480265,-106.25710466433031],
    v1: [1504.7377079884195,-11.996769881456649],
    index: 173,
    penalty: 5
  }
]
};

export const DUBAI: Circuit = {
  map: dubai_raw,
  info: DUBAI_INFO,
};
