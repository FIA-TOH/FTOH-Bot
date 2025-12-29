

import { readFileSync } from "fs";
import { join } from "path";


import {Circuit, CircuitInfo, CircuitPhysics, Direction} from "../Circuit";
import { bestTimes } from "../bestTimes";

const hungary_nano_raw = readFileSync(join(__dirname, "hungary_nano.hbs"), "utf-8");
const hungary_nano_json = JSON.parse(hungary_nano_raw);



const HUNGARY_NANO_INFO: CircuitInfo = {
    finishLine: {
        bounds: {
            minX: -115,
            maxX: -85,
            minY: 790,
            maxY: 1073
        },
        passingDirection: Direction.LEFT
    },
    sectorOne: {
    bounds: {
      minX: -115,
      maxX: -85,
      minY: 790,
      maxY: 1073,
    },
    passingDirection: Direction.LEFT,
  },
  sectorTwo: {
    bounds: {
      minX: -914,
      maxX: -737,
      minY: -579,
      maxY: -549,
    },
    passingDirection: Direction.UP,
  },
  sectorThree: {
    bounds: {
      minX: 1281,
      maxX: 1475,
      minY: -216,
      maxY: -186,
    },
    passingDirection: Direction.DOWN,
  },
    name: "Hungaroring By Nanoseb",
    boxLine: {
        minX: -300,
        maxX: 300,
        minY: 790,
        maxY: 850
    },
    pitlaneStart: {
        minX: 473,
        maxX: 503,
        minY: 850,
        maxY: 910
    },
    pitlaneEnd: {
        minX: -330,
        maxX: -300,
        minY: 790,
        maxY: 1073
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
        x: hungary_nano_json.redSpawnPoints[hungary_nano_json.redSpawnPoints.length - 1][0],
        y: hungary_nano_json.redSpawnPoints[hungary_nano_json.redSpawnPoints.length - 1][1],
    },
    BestTime: bestTimes.hungary_nano,
    MainColor: [0x047a3d, 0xffffff, 0x047a3d],
    AvatarColor: 0xf30505,
    Angle: 90,
    Limit: 5,
    Votes: 0,
    physicsType: CircuitPhysics.CLASSIC,
}

export const HUNGARY_NANO: Circuit = {
    map: hungary_nano_raw,
    info: HUNGARY_NANO_INFO
}