export interface leagueScuderia {
  name: string;
  tag: string;
  color: number;
}
export enum ScuderiaColors {
  /*  PENSHIRYU = 0xb45568,
  ASTONMAIA = 0x059988,
  RUBYBISON = 0x4458a2,
  MCLARPER = 0xff8700,
  HAAX = 0xe6002b,
  MOTORFORCE = 0x06529d,
  SART = 0x40c3ff,
  KONARDI = 0x1d618c,
  LENAULTMOREO = 0xba3232,
  QUESTI = 0x4b56cc,
  SIXDENT = 0x9c7efc,
  JEANBORGHINI = 0xffd500,
  PEJO = 0xbdbdbd,
  BRAWNDESCO = 0xddff09,
  INTERFORCE = 0x83abc9,
  ALPINO = 0xddbc5f,
  TOYOSSI = 0x858585,
  BMW = 0x0066b1,
  BRACCHIARI = 0xec1c24,
  PHM = 0x5ef102,*/
  GORSCHE = 0xf0f0f0,
  FERRARI = 0xec1c24,
  HRT = 0xc6c987,
  REDBULL = 0x1e41ff,
  ALPINE = 0x2293d1,
  RB = 0x8295ff,
  PREMA = 0xff4545,
  WILLIAMS = 0x37bedd,
  HISPALIS = 0xff5733,
  MEISE = 0x8533ff,
  BUGATTI = 0x010647,
  PAGANI = 0xd1ffff,
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
    color: ScuderiaColours.GORSCHE,
  },
  Ferrari: {
    name: "Ferrari",
    tag: "FER",
    color: ScuderiaColours.FERRARI,
  },
  HRT: {
    name: "HRT",
    tag: "HRT",
    color: ScuderiaColours.HRT,
  },
  RedBull: {
    name: "Red Bull",
    tag: "RBR",
    color: ScuderiaColours.REDBULL,
  },
  Alpine: {
    name: "Alpine",
    tag: "ALP",
    color: ScuderiaColours.ALPINE,
  },
  RB: {
    name: "RB",
    tag: "RB",
    color: ScuderiaColours.RB,
  },
  Prema: {
    name: "Prema",
    tag: "PRE",
    color: ScuderiaColours.PREMA,
  },
  Williams: {
    name: "Williams",
    tag: "WIL",
    color: ScuderiaColours.WILLIAMS,
  },
  Hispalis: {
    name: "Hispalis",
    tag: "HIS",
    color: ScuderiaColours.HISPALIS,
  },
  Meise: {
    name: "Meise",
    tag: "MEI",
    color: ScuderiaColours.MEISE,
  },
  Bugatti: {
    name: "Bugatti",
    tag: "BUG",
    color: ScuderiaColours.BUGATTI,
  },
  Pagani: {
    name: "Pagani",
    tag: "PAG",
    color: ScuderiaColours.PAGANI,
  },
};
