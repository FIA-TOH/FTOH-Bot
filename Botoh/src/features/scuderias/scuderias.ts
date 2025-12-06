import { Batery } from "./batery";
import { Chassis } from "./chassis";
import { Engine } from "./engine";
import { PitCrew } from "./pitstop";
import { AstonMaia } from "./scuderia/astonMaia";
import { Bracchiari } from "./scuderia/bracchiari";
import { McLarper } from "./scuderia/mclarper";
import { Penshiryu } from "./scuderia/penshiryu";
import { ScuderiaColors } from "./scuderiaColours";
import { Suspension } from "./tyres";

export interface leagueScuderia {
  name: string;
  tag: string;
  color: number;
}

export const leagueScuderia: { [key: string]: leagueScuderia } = {
  /*  Penshiryu: {
    name: "Penshiryu",
    tag: "PE",
    color: ScuderiaColours.PENSHIRYU,
  },
  AstonMaia: {
    name: "Aston Maia",
    tag: "AM",
    color: ScuderiaColours.ASTONMAIA,
  },
  RubyBison: {
    name: "Ruby Bison",
    tag: "RB",
    color: ScuderiaColours.RUBYBISON,
  },
  McLarper: {
    name: "McLarper",
    tag: "MC",
    color: ScuderiaColours.MCLARPER,
  },

  Haax: {
    name: "Haax",
    tag: "HX",
    color: ScuderiaColours.HAAX,
  },
  MotorForce: {
    name: "BMW MotorForce",
    tag: "MF",
    color: ScuderiaColours.MOTORFORCE,
  },
  SART: {
    name: "SART",
    tag: "SA",
    color: ScuderiaColours.SART,
  },
  Konardi: {
    name: "Konardi",
    tag: "KO",
    color: ScuderiaColours.KONARDI,
  },
  LenaultMoreo: {
    name: "Lenaut Moreo",
    tag: "LM",
    color: ScuderiaColours.LENAULTMOREO,
  },
  Questi: {
    name: "Questi",
    tag: "QE",
    color: ScuderiaColours.QUESTI,
  },
  Sixdent: {
    name: "Sixdent",
    tag: "SX",
    color: ScuderiaColours.SIXDENT,
  },
  JeanBorghini: {
    name: "JeanBorghini",
    tag: "JB",
    color: ScuderiaColours.JEANBORGHINI,
  },
  Pejo: {
    name: "Pejo",
    tag: "PJ",
    color: ScuderiaColours.PEJO,
  },
  Brawndesco: {
    name: "Brawndesco",
    tag: "BW",
    color: ScuderiaColours.BRAWNDESCO,
  },
  Interforce: {
    name: "BMW Interforce",
    tag: "IF",
    color: ScuderiaColours.INTERFORCE,
  },
  Alpino: {
    name: "Alpino",
    tag: "AP",
    color: ScuderiaColours.ALPINO,
  },
  Toyossi: {
    name: "BMW Toyossi",
    tag: "TY",
    color: ScuderiaColours.TOYOSSI,
  },
  BMW: {
    name: "Swiss BMW",
    tag: "BM",
    color: ScuderiaColours.BMW,
  },
  Bracchiari: {
    name: "Bracchiari",
    tag: "SB",
    color: ScuderiaColours.BRACCHIARI,
  },

  PHM: {
    name: "PHM FAX",
    tag: "PH",
    color: ScuderiaColours.PHM,
  },*/
  Gorsche: {
    name: "Gorsche",
    tag: "GOR",
    color: ScuderiaColors.GORSCHE,
  },
  Ferrari: {
    name: "Ferrari",
    tag: "FER",
    color: ScuderiaColors.FERRARI,
  },
  HRT: {
    name: "HRT",
    tag: "HRT",
    color: ScuderiaColors.HRT,
  },
  RedBull: {
    name: "Red Bull",
    tag: "RBR",
    color: ScuderiaColors.REDBULL,
  },
  Alpine: {
    name: "Alpine",
    tag: "ALP",
    color: ScuderiaColors.ALPINE,
  },
  RB: {
    name: "RB",
    tag: "RB",
    color: ScuderiaColors.RB,
  },
  Prema: {
    name: "Prema",
    tag: "PRE",
    color: ScuderiaColors.PREMA,
  },
  Williams: {
    name: "Williams",
    tag: "WIL",
    color: ScuderiaColors.WILLIAMS,
  },
  Hispalis: {
    name: "Hispalis",
    tag: "HIS",
    color: ScuderiaColors.HISPALIS,
  },
  Meise: {
    name: "Meise",
    tag: "MEI",
    color: ScuderiaColors.MEISE,
  },
  Bugatti: {
    name: "Bugatti",
    tag: "BUG",
    color: ScuderiaColors.BUGATTI,
  },
  Pagani: {
    name: "Pagani",
    tag: "PAG",
    color: ScuderiaColors.PAGANI,
  },
};
