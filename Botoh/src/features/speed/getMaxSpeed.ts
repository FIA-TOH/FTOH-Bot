import { CircuitPhysics } from "../../circuits/Circuit";
import { ACTUAL_CIRCUIT } from "../roomFeatures/stadiumChange";

export const BASE_MAX_SPEED = 94;

export function maxSpeedFromGrip(grip: number) {
  const Physics = ACTUAL_CIRCUIT.info.physicsType;

  let coef = 0;
  let intercept = 0;

  if (Physics === CircuitPhysics.F1_NEWGEN) {
    coef = 2451.5588;
    intercept = -2356.99881;
  } else if (Physics === CircuitPhysics.INDY) {
    coef = 18898.58;
    intercept = -18699.3803;
  } else if (Physics === CircuitPhysics.FH_NEWGEN) {
    coef = 2383.4791438007874;
    intercept = -2291.5471062688757;
  } else if (Physics === CircuitPhysics.GIGA_SPEED) {
    coef = 3064.473384681081;
    intercept = -2946.275050386532;
  } else if (Physics === CircuitPhysics.SEMINEWGEN) {
    coef = 1864.2212962728855;
    intercept = -1792.3173097583517;
  } else if (Physics === CircuitPhysics.CLASSIC) {
    coef = 1532.2366923405404;
    intercept = -1473.137525193266;
  } else {
    coef = 2451.5588;
    intercept = -2356.99881;
  }

  return coef * grip + intercept;
}
