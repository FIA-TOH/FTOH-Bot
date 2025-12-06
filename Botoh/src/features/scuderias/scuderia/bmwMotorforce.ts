import { Batery } from "../batery";
import { Chassis } from "../chassis";
import { Engine } from "../engine";
import { PitCrew } from "../pitstop";
import { ScuderiaColors } from "../scuderiaColours";
import { leagueScuderia } from "../scuderias";
import { Suspension } from "../tyres";

export const BmwMotorforceEngine: Engine = {
  name: "Bmw Motorforce Engine",
  initialAccelerationNerf: 40,
  medialAccelerationNerf: 40,
  finalAccelerationNerf: 40,
  topSpeedBoostNerf: 0,
  confiability: 100,
};

export const BmwMotorforceChassis: Chassis = {
  name: "Bmw Motorforce Chassis",
  accelerationNerf: 120,
  slipstreamNerf: 10,
  dirtyAirBoost: 0,
  confiability: 100,
};

export const BmwMotorforceBatery: Batery = {
  name: "Bmw Motorforce Batery",
  ERSConsputionReduction: 0,
  ERSSpeedBoost: 0,
  ERSChargeBoost: 0,
  confiability: 100,
};

export const BmwMotorforceSuspension: Suspension = {
  name: "Bmw Motorforce Suspension",
  tyreDurabilityBoost: 0,
  tyreSpeedDegradatedBoost: 0,
  peakTimeBoost: 0,
  warmUpTimeBoost: 0,
  tyreBlowoutChanceReduction: 0,
  confiability: 100,
};

export const BmwMotorforcePitCrew: PitCrew = {
  name: "Bmw Motorforce Pit Crew",
  errorChanceReduction: 0,
  fastPitChanceBoost: 0,
  normalPitSpeedTimeBoost: 0,
};

export const BmwMotorforce : leagueScuderia = {
  name: "Bmw Motorforce",
  tag: "BMWM",
  color: ScuderiaColors.BMWMOTORFORCE,
  engine: BmwMotorforceEngine,
  chassis: BmwMotorforceChassis,
  batery: BmwMotorforceBatery,
  suspension: BmwMotorforceSuspension,
  pitCrew: BmwMotorforcePitCrew,
};
