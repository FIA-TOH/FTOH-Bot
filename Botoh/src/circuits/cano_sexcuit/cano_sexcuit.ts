import { bestTimes } from "../bestTimes";
import { Circuit, CircuitInfo, CircuitPhysics, Direction } from "../Circuit";
import { readFileSync } from "fs";
import { join } from "path";

const cano_sexcuit_raw = readFileSync(join(__dirname, "cano_sexcuit.hbs"), "utf-8");
const cano_sexcuit_json = JSON.parse(cano_sexcuit_raw);

const CANO_SEXCUIT_INFO: CircuitInfo = {
  finishLine: {
    bounds: {
      minX: -40,
      maxX: -10,
      minY: -183,
      maxY: 188,
    },
    passingDirection: Direction.LEFT,
  },
  sectorOne: {
    bounds: {
      minX: -40,
      maxX: -10,
      minY: -183,
      maxY: 188,
    },
    passingDirection: Direction.LEFT,
  },
  sectorTwo: {
    bounds: {
      minX: 170,
      maxX: 200,
      minY: 153,
      maxY: 327,
    },
    passingDirection: Direction.RIGHT,
  },
  sectorThree: {
    bounds: {
      minX: 637,
      maxX: 667,
      minY: -608,
      maxY: -421,
    },
    passingDirection: Direction.LEFT,
  },
  name: "Cano Sexcuit by Rodri",
  boxLine: {
    minX: 120,
    maxX: 520,
    minY: -11,
    maxY: 53,
  },
  pitlaneStart: {
    minX: 553,
    maxX: 676,
    minY: 113,
    maxY: 143,
  },
  pitlaneEnd: {
    minX: -40,
    maxX: -10,
    minY: 92,
    maxY: 188,
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
    x: cano_sexcuit_json.redSpawnPoints[cano_sexcuit_json.redSpawnPoints.length - 1][0],
    y: cano_sexcuit_json.redSpawnPoints[cano_sexcuit_json.redSpawnPoints.length - 1][1],
  },
  BestTime: bestTimes.cano,
  MainColor: [0x4415b0, 0x4e18c9, 0x571be0],
  AvatarColor: 0xffffff,
  Angle: 60,
  Limit: 5,
  Votes: 0,
  pitSpeed: 0.97,
  physicsType: CircuitPhysics.CLASSIC,
};

export const CANO_SEXCUIT: Circuit = {
  map: cano_sexcuit_raw,
  info: CANO_SEXCUIT_INFO,
};
