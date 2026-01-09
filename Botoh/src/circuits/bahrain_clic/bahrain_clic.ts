import { readFileSync } from "fs";
import { join } from "path";

import { Circuit, CircuitInfo, CircuitPhysics, Direction } from "../Circuit";
import { bestTimes } from "../bestTimes";

const bahrain_clic_raw = readFileSync(join(__dirname, "bahrain_clic.hbs"), "utf-8");
const bahrain_clic_json = JSON.parse(bahrain_clic_raw);

const BAHRAIN_CLIC_INFO: CircuitInfo = {
  finishLine: {
    bounds: {
      minX: -15,
      maxX: 15,
      minY: 778,
      maxY: 1090
    },
    passingDirection: Direction.LEFT,
  },
  sectorOne: {
    bounds: {
      minX: -15,
      maxX: 15,
      minY: 778,
      maxY: 1090,
    },
    passingDirection: Direction.LEFT,
  },
  sectorTwo: {
    bounds: {
      minX: -501,
      maxX: -381,
      minY: -1135,
      maxY: -1105,
    },
    passingDirection: Direction.DOWN,
  },
  sectorThree: {
    bounds: {
      minX: 1150,
      maxX: 1301,
      minY: -782,
      maxY: -752,
    },
    passingDirection: Direction.UP,
  },
  name: "FH Bahrain by Cliquot",
  boxLine: {
    minX: 11,
    maxX: 1140,
    minY: 778,
    maxY: 832,
  },
  pitlaneStart: {
    minX: 1477,
    maxX: 1507,
    minY: 832,
    maxY: 906,
  },
  pitlaneEnd: {
    minX: -30,
    maxX: 0,
    minY: 832,
    maxY: 896,
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
    x: bahrain_clic_json.redSpawnPoints[bahrain_clic_json.redSpawnPoints.length - 1][0],
    y: bahrain_clic_json.redSpawnPoints[bahrain_clic_json.redSpawnPoints.length - 1][1],
  },
  BestTime: bestTimes.bahrein_clic,
  MainColor: [0xffffff, 0xe90018, 0xe90018],
  AvatarColor: 0xf4d008,
  Angle: 0,
  Limit: 5,
  Votes: 0,
  physicsType: CircuitPhysics.SEMINEWGEN,
};
export const BAHRAIN_CLIC: Circuit = {
  map: bahrain_clic_raw,
  info: BAHRAIN_CLIC_INFO,
};
