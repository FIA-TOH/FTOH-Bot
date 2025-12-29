

import { readFileSync } from "fs";
import { join } from "path";

import { bestTimes } from "../bestTimes";
import {Circuit, CircuitInfo, CircuitPhysics, Direction} from "../Circuit";

const indianapolis_road_raw = readFileSync(join(__dirname, "indianapolis_road.hbs"), "utf-8");
const indianapolis_road_json = JSON.parse(indianapolis_road_raw);




const INDIANAPOLIS_ROAD_INFO: CircuitInfo = {
    finishLine: {
        bounds: {
            minX: -15,
            maxX: 15,
            minY: -180,
            maxY: 154
        },
        passingDirection: Direction.RIGHT
    },
    name: "Indianapolis Motor Speedway By Nanoseb",
    sectorOne:{
        bounds: {
            minX: -15,
            maxX: 15,
            minY: -180,
            maxY: 154
        },
        passingDirection: Direction.RIGHT
    },
    sectorTwo:{
        bounds: {
            minX: 935,
            maxX: 1200,
            minY: 570,
            maxY: 600
        },
        passingDirection: Direction.UP
    },
    sectorThree:{
        bounds: {
            minX: -888,
            maxX: -535,
            minY: 1656,
            maxY: 1686
        },
        passingDirection: Direction.DOWN
    },
    boxLine: {
        minX: -800,
        maxX: 800,
        minY: 74,
        maxY: 154
    },
    pitlaneStart: {
        minX: -830,
        maxX: -800,
        minY: -24,
        maxY: 74
    },
    pitlaneEnd: {
        minX: 800,
        maxX: 830,
        minY: -24,
        maxY: 74
    },
    drsStart: [
        {
            minX: 0,
            maxX: 0,
            minY: 0,
            maxY: 0,
        }
    ],
    drsEnd: [
        {
            minX: 0,
            maxX: 0,
            minY: 0,
            maxY: 0,
        }
    ],
    checkpoints: [],
    lastPlace: {
        x: indianapolis_road_json.redSpawnPoints[indianapolis_road_json.redSpawnPoints.length - 1][0],
        y: indianapolis_road_json.redSpawnPoints[indianapolis_road_json.redSpawnPoints.length - 1][1],
    },
    BestTime: bestTimes.indianapolis,
    MainColor: [0xffffff],
    AvatarColor: 0xbc002d,
    Angle: 90,
    Votes: 0,
    physicsType: CircuitPhysics.FH_NEWGEN,
CutDetectSegments: 
[
  {
    v0: [
      -1458.4644527313726,
      615.2629124918482
    ],
    v1: [
      -1629.8468796093248,
      35.990309644369944
    ],
    index: 143,
    penalty: 5
  },
  {
    v0: [
      -1307.6479170787748,
      413.0316487758646
    ],
    v1: [
      -1455.0368041938136,
      -56.5562008697242
    ],
    index: 144,
    penalty: 5
  },
  {
    v0: [
      -1153.4037328886177,
      248.50451897303057
    ],
    v1: [
      -1083.1369378686575,
      269.0704101983848
    ],
    index: 145,
    penalty: 5
  },
  {
    v0: [
      -913.5451145867262,
      125.93729150757933
    ],
    v1: [
      -625.6884482836878,
      717.6426611304917
    ],
    index: 146,
    penalty: 5
  },
  {
    v0: [
      -1557.8662603205848,
      891.1886197653511
    ],
    v1: [
      -1734.3901600048755,
      594.6970212664938
    ],
    index: 147,
    penalty: 5
  },
  {
    v0: [
      -1654.4634144768008,
      1664.748711014401
    ],
    v1: [
      -1700.0125848576008,
      1694.135272550401
    ],
    index: 148,
    penalty: 5
  },
  {
    v0: [
      -888.9434864640004,
      1732.337802547201
    ],
    v1: [
      -825.7623791616004,
      1772.009660620801
    ],
    index: 149,
    penalty: 5
  },
  {
    v0: [
      -539.2434041856003,
      1628.0155090944008
    ],
    v1: [
      -684.7068837888004,
      1550.1411210240008
    ],
    index: 150,
    penalty: 5
  },
  {
    v0: [
      -1003.5510764544006,
      1262.1528179712006
    ],
    v1: [
      -631.8110730240003,
      1331.2112375808008
    ],
    index: 151,
    penalty: 5
  },
  {
    v0: [
      -461.20575744000024,
      1131.9268147200005
    ],
    v1: [
      -564.6029184000002,
      1050.2974771200006
    ],
    index: 152,
    penalty: 5
  },
  {
    v0: [
      69.05841960960004,
      791.9678333952004
    ],
    v1: [
      69.05841960960004,
      856.6182687744005
    ],
    index: 153,
    penalty: 5
  },
  {
    v0: [
      95.50632499200005,
      1038.8149502976005
    ],
    v1: [
      95.50632499200005,
      1099.0574014464005
    ],
    index: 154,
    penalty: 5
  },
  {
    v0: [
      885.6783129600004,
      459.84526848000024
    ],
    v1: [
      874.7944012800004,
      414.9491328000002
    ],
    index: 155,
    penalty: 5
  },
  {
    v0: [
      693.8493696000004,
      802.6884864000004
    ],
    v1: [
      638.0693222400004,
      759.1528396800004
    ],
    index: 156,
    penalty: 5
  },
  {
    v0: [
      1155.0551270400006,
      768.6762624000004
    ],
    v1: [
      1415.4711696153586,
      115.13727949691298
    ],
    index: 157,
    penalty: 5
  },
  {
    v0: [
      1513.3068293323172,
      964.8830633228705
    ],
    v1: [
      1520.1621264074354,
      1095.1337077501141
    ],
    index: 158,
    penalty: 5
  },
  {
    v0: [
      1783.601026560001,
      540.1141171200003
    ],
    v1: [
      1840.7415628800009,
      476.1711360000002
    ],
    index: 159,
    penalty: 5
  },
  {
    v0: [
      1971.3485030400009,
      658.4766566400003
    ],
    v1: [
      2040.733440000001,
      643.5112780800004
    ],
    index: 160,
    penalty: 5
  },
  {
    v0: [
      1926.452367360001,
      723.7801267200003
    ],
    v1: [
      1935.975790080001,
      786.3626188800004
    ],
    index: 161,
    penalty: 5
  },
  {
    v0: [
      2077.1550137607796,
      -20.565891225354253
    ],
    v1: [
      1557.8662603205848,
      329.05425960566805
    ],
    index: 162,
    penalty: 5
  },
  {
    v0: [
      1700.113674629285,
      -8.569121343897606
    ],
    v1: [
      1557.8662603205848,
      329.05425960566805
    ],
    index: 163,
    penalty: 5
  }
]
}

export const INDIANAPOLIS_ROAD: Circuit = {
    map: indianapolis_road_raw,
    info: INDIANAPOLIS_ROAD_INFO
}