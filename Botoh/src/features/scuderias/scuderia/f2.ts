import { Batery } from "../batery";
import { Chassis } from "../chassis";
import { Engine } from "../engine";
import { PitCrew } from "../pitstop";
import { ScuderiaColors } from "../scuderiaColours";
import { leagueScuderia } from "../scuderias";
import { Suspension } from "../tyres";

export const Formula2Engine: Engine = {
  name: "Formula2 Engine",
  initialAccelerationNerf: 120,
  medialAccelerationNerf: 40,
  finalAccelerationNerf: 80,
  topSpeedBoostNerf: 4,
  confiability: 100,
};

export const Formula2Chassis: Chassis = {
  name: "Formula2 Chassis",
  accelerationNerf: 0,
  slipstreamNerf: 40,
  dirtyAirBoost: 0,
  confiability: 100,
};

export const Formula2Batery: Batery = {
  name: "Formula2 Batery",
  ERSConsputionReduction: 0,
  ERSSpeedBoost: 0,
  ERSChargeBoost: 0,
  confiability: 100,
};

export const Formula2Suspension: Suspension = {
  name: "Formula2 Suspension",
  tyreDurabilityBoost: 0,
  tyreSpeedDegradatedBoost: 0,
  peakTimeBoost: 0,
  warmUpTimeBoost: 0,
  tyreBlowoutChanceReduction: 0,
  confiability: 100,
};

export const Formula2Crew: PitCrew = {
  name: "Formula2 Pit Crew",
  errorChanceReduction: 0,
  fastPitChanceBoost: 0,
  normalPitSpeedTimeBoost: 0,
};

export const Formula2 : leagueScuderia = {
  name: "Formula2",
  tag: "F2",
  color: ScuderiaColors.FORMULA2,
  engine: Formula2Engine,
  chassis: Formula2Chassis,
  batery: Formula2Batery,
  suspension: Formula2Suspension,
  pitCrew: Formula2Crew,
};
