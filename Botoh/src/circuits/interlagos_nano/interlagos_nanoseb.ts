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
      maxY: -24,
    },
    passingDirection: Direction.RIGHT,
  },
  sectorOne: {
    bounds: {
      minX: -15,
      maxX: 15,
      minY: -325,
      maxY: -24,
    },
    passingDirection: Direction.RIGHT,
  },
  sectorTwo: {
    bounds: {
      minX: 125,
      maxX: 155,
      minY: -1780,
      maxY: -1595,
    },
    passingDirection: Direction.LEFT,
  },
  sectorThree: {
    bounds: {
      minX: -1180,
      maxX: -1064,
      minY: -1440,
      maxY: -1410,
    },
    passingDirection: Direction.UP,
  },
  name: "Autodromo Jose Carlos Pace By Nanoseb",
  boxLine: {
    minX: -800,
    maxX: 200,
    minY: -330,
    maxY: -257,
  },
  pitlaneStart: {
    minX: -900,
    maxX: -870,
    minY: -257,
    maxY: -200,
  },
  pitlaneEnd: {
    minX: 669,
    maxX: 774,
    minY: -1161,
    maxY: -1191,
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
