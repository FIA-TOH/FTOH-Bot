

import { readFileSync } from "fs";
import { join } from "path";


import {Circuit, CircuitInfo, CircuitPhysics, Direction} from "../Circuit";
import { bestTimes } from "../bestTimes";

const chile_raw = readFileSync(join(__dirname, "chile.hbs"), "utf-8");
const chile_json = JSON.parse(chile_raw);



const CHILE_INFO: CircuitInfo = {
    finishLine: {
        bounds: {
            minX: -15,
            maxX: 15,
            minY: -276,
            maxY: 31
        },
        passingDirection: Direction.RIGHT
    },
      sectorOne: {
    bounds: {
      minX: -15,
      maxX: 15,
      minY: -276,
      maxY: 31,
    },
    passingDirection: Direction.RIGHT,
  },
  sectorTwo: {
    bounds: {
      minX: -80,
      maxX: -50,
      minY: 1366,
      maxY: 2088,
    },
    passingDirection: Direction.RIGHT,
  },
  sectorThree: {
    bounds: {
      minX: 950,
      maxX: 980,
      minY: -1533,
      maxY: -377,
    },
    passingDirection: Direction.LEFT,
  },
    name: "Autodromo Internacional de Codegua By Nanoseb",
    boxLine: {
        minX: -1285,
        maxX: -85,
        minY: -350,
        maxY: -280
    },
    pitlaneStart: {
        minX: -1315,
        maxX: -1285,
        minY: -280,
        maxY: -207
    },
    pitlaneEnd: {
        minX: -85,
        maxX: -55,
        minY: -280,
        maxY: -207
    },
    drsStart: [{
        minX: 0,
        maxX: 0,
        minY: 0,
        maxY: 0,
    }],
    drsEnd: [{
        minX: 0,
        maxX: 0,
        minY: 0,
        maxY: 0,
    }],
    checkpoints: [],
    lastPlace: {
        x: chile_json.redSpawnPoints[chile_json.redSpawnPoints.length - 1][0],
        y: chile_json.redSpawnPoints[chile_json.redSpawnPoints.length - 1][1],
    },
    BestTime: bestTimes.chile,
    MainColor: [0xffffff, 0xD10000, 0x2100C2],
    AvatarColor: 0xf30505,
    Angle: 90,
    Limit: 5,
    Votes: 0,
    physicsType: CircuitPhysics.F1_NEWGEN,
}

export const CHILE: Circuit = {
    map: chile_raw,
    info: CHILE_INFO
}