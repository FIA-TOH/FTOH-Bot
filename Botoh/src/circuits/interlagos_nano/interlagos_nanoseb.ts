import { readFileSync } from "fs";
import { join } from "path";

import { bestTimes } from "../bestTimes";
import { Circuit, CircuitInfo, Direction } from "../Circuit";

const interlagos_nanoseb_raw = readFileSync(
  join(__dirname, "interlagos_nanoseb.hbs"),
  "utf-8"
);
const interlagos_nanoseb_json = JSON.parse(interlagos_nanoseb_raw);

//fixedfixed

const INTERLAGOS_NANOSEB_INFO: CircuitInfo = {
  finishLine: {
    bounds: {
      minX: -15,
      maxX: 15,
      minY: -325,
      maxY: -21,
    },
    passingDirection: Direction.RIGHT,
  },
  sectorOne: {
    bounds: {
      minX: -15,
      maxX: 15,
      minY: -325,
      maxY: -21,
    },
    passingDirection: Direction.RIGHT,
  },
  sectorTwo: {
    bounds: {
      minX: -165,
      maxX: -135,
      minY: -2000,
      maxY: -1848,
    },
    passingDirection: Direction.LEFT,
  },
  sectorThree: {
    bounds: {
      minX: -1652,
      maxX: -1622,
      minY: -1751,
      maxY: -1623,
    },
    passingDirection: Direction.LEFT,
  },
  name: "Interlagos By Nanoseb",
  boxLine: {
    minX: -1200,
    maxX: 600,
    minY: -325,
    maxY: -270,
  },
  pitlaneStart: {
    minX: -1280,
    maxX: -1200,
    minY: -270,
    maxY: -210,
  },
  pitlaneEnd: {
    minX: 1075,
    maxX: 1165,
    minY: -843,
    maxY: -813,
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
    x: interlagos_nanoseb_json.redSpawnPoints[
      interlagos_nanoseb_json.redSpawnPoints.length - 1
    ][0],
    y: interlagos_nanoseb_json.redSpawnPoints[
      interlagos_nanoseb_json.redSpawnPoints.length - 1
    ][1],
  },
  BestTime: bestTimes.interlagos_nanoseb,
  MainColor: [0x10a100, 0xffff00, 0x10a100],
  AvatarColor: 0x00008c,
  Angle: 90,
  Limit: 5,
  Votes: 0,
};

export const INTERLAGOS_NANOSEB: Circuit = {
  map: interlagos_nanoseb_raw,
  info: INTERLAGOS_NANOSEB_INFO,
};
