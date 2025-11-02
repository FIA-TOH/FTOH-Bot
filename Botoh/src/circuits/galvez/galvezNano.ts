import { readFileSync } from "fs";
import { join } from "path";

import { bestTimes } from "../bestTimes";
import { Circuit, CircuitInfo, Direction } from "../Circuit";

const galvezNano_raw = readFileSync(join(__dirname, "galvezNano.hbs"), "utf-8");
const galvezNano_json = JSON.parse(galvezNano_raw);

const GALVEZNANO_INFO: CircuitInfo = {
  finishLine: {
    bounds: {
      minX: -82,
      maxX: 295,
      minY: 3,
      maxY: 18,
    },
    passingDirection: Direction.UP,
  },
  sectorOne: {
    bounds: {
      minX: -82,
      maxX: 295,
      minY: 3,
      maxY: 18,
    },
    passingDirection: Direction.UP,
  },
  sectorTwo: {
    bounds: {
      minX: 821,
      maxX: 1235,
      minY: -1420,
      maxY: -1388,
    },
    passingDirection: Direction.UP,
  },
  sectorThree: {
    bounds: {
      minX: 916,
      maxX: 1166,
      minY: 291,
      maxY: 323,
    },
    passingDirection: Direction.LEFT,
  },
  name: "Autodromo Oscar Alfredo Galvez By Nanoseb",
  boxLine: {
    minX: 225,
    maxX: 295,
    minY: 100,
    maxY: 800,
  },
  pitlaneStart: {
    minX: 165,
    maxX: 225,
    minY: 909,
    maxY: 941,
  },
  pitlaneEnd: {
    minX: 167,
    maxX: 225,
    minY: -32,
    maxY: 1,
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
    x: galvezNano_json.redSpawnPoints[
      galvezNano_json.redSpawnPoints.length - 1
    ][0],
    y: galvezNano_json.redSpawnPoints[
      galvezNano_json.redSpawnPoints.length - 1
    ][1],
  },
  BestTime: bestTimes.galvezNano,
  MainColor: [0xff0000, 0xae1616],
  AvatarColor: 0xffffff,
  Angle: 45,
  Limit: 5,
  Votes: 0,
  //   pitSpeed: 1,
};

export const GALVEZNANO: Circuit = {
  map: galvezNano_raw,
  info: GALVEZNANO_INFO,
};
