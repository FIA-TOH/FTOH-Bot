import { Batery } from "../batery";
import { Chassis } from "../chassis";
import { Engine } from "../engine";
import { PitCrew } from "../pitstop";
import { ScuderiaColors } from "../scuderiaColours";
import { leagueScuderia } from "../scuderias";
import { Suspension } from "../tyres";

export const MeiseEngine: Engine = {
  name: "Meise Engine",
  initialAccelerationNerf: 40,
  medialAccelerationNerf: 40,
  finalAccelerationNerf: 40,
  topSpeedBoostNerf: 0,
  confiability: 100,
};

export const MeiseChassis: Chassis = {
  name: "Meise Chassis",
  accelerationNerf: 120,
  slipstreamNerf: 10,
  dirtyAirBoost: 0,
  confiability: 100,
};

export const MeiseBatery: Batery = {
  name: "Meise Batery",
  ERSConsputionReduction: 0,
  ERSSpeedBoost: 0,
  ERSChargeBoost: 0,
  confiability: 100,
};

export const MeiseSuspension: Suspension = {
  name: "Meise Suspension",
  tyreDurabilityBoost: 0,
  tyreSpeedDegradatedBoost: 0,
  peakTimeBoost: 0,
  warmUpTimeBoost: 0,
  tyreBlowoutChanceReduction: 0,
  confiability: 100,
};

export const MeisePitCrew: PitCrew = {
  name: "Meise Pit Crew",
  errorChanceReduction: 0,
  fastPitChanceBoost: 0,
  normalPitSpeedTimeBoost: 0,
};

export const Meise : leagueScuderia = {
  name: "Meise",
  tag: "MEI",
  color: ScuderiaColors.MEISE,
  engine: MeiseEngine,
  chassis: MeiseChassis,
  batery: MeiseBatery,
  suspension: MeiseSuspension,
  pitCrew: MeisePitCrew,
};
