

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
            minY: -280,
            maxY: 30
        },
        passingDirection: Direction.RIGHT
    },
    name: "Autodromo Internacional de Codegua By Nanoseb",
    boxLine: {
        minX: -1285,
        maxX: -85,
        minY: -350,
        maxY: -280
    },
    pitlaneStart: {
        minX: -1300,
        maxX: -1260,
        minY: -280,
        maxY: -207
    },
    pitlaneEnd: {
        minX: -100,
        maxX: -70,
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
    MainColor: [0x047a3d, 0xffffff, 0x047a3d],
    AvatarColor: 0xf30505,
    Angle: 90,
    Limit: 5,
    Votes: 0,
    physicsType: CircuitPhysics.GIGA_SPEED,
}

export const CHILE: Circuit = {
    map: chile_raw,
    info: CHILE_INFO
}