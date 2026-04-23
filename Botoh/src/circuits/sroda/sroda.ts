import { bestTimes } from "../bestTimes";
import { Circuit, CircuitInfo, CircuitPhysics, Direction } from "../Circuit";
import { readFileSync } from "fs";
import { join } from "path";

const sroda_raw = readFileSync(join(__dirname, "sroda.hbs"), "utf-8");
const sroda_json = JSON.parse(sroda_raw);

const SRODA_INFO: CircuitInfo = {
  finishLine: {
    bounds: {
      minX: 308,
      maxX: 338,
      minY: 10,
      maxY: 314,
    },
    passingDirection: Direction.RIGHT,
  },
  sectorOne: {
    bounds: {
      minX: 308,
      maxX: 338,
      minY: 10,
      maxY: 314,
    },
    passingDirection: Direction.RIGHT,
  },
  sectorTwo: {
    bounds: {
      minX: -327,
      maxX: -297,
      minY: 579,
      maxY: 721,
    },
    passingDirection: Direction.LEFT,
  },
  sectorThree: {
    bounds: {
      minX: -700,
      maxX: -554,
      minY: -348,
      maxY: -318,
    },
    passingDirection: Direction.UP,
  },
  name: "Sroda Track",
  boxLine: {
    minX: 73,
    maxX: 470,
    minY: 250,
    maxY: 314,
  },
  pitlaneStart: {
    minX: -200,
    maxX: -170,
    minY: 160,
    maxY: 250,
  },
  pitlaneEnd: {
    minX: 470,
    maxX: 500,
    minY: 160,
    maxY: 250,
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
    x: sroda_json.redSpawnPoints[sroda_json.redSpawnPoints.length - 1][0],
    y: sroda_json.redSpawnPoints[sroda_json.redSpawnPoints.length - 1][1],
  },
  BestTime: bestTimes.sroda,
  MainColor: [0xc6f57e],
  AvatarColor: 0x3c4a26,
  Angle: 90,
  Limit: 5,
  Votes: 0,
  pitSpeed: 0.97,
  physicsType: CircuitPhysics.CLASSIC
};

export const SRODA: Circuit = {
  map: sroda_raw,
  info: SRODA_INFO,
};
