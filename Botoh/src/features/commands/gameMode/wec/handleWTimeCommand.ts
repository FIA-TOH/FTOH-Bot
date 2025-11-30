import {
  gameMode,
  GameMode,
  generalGameMode,
  GeneralGameMode,
} from "../../../changeGameState/changeGameModes";
import { setRaceTime } from "../../../changeGameState/qualy/qualiMode";
import { sendErrorMessage } from "../../../chat/chat";
import { MESSAGES } from "../../../chat/messages";

export function handleWTimeCommand(
  byPlayer: PlayerObject,
  args: string[],
  room: RoomObject
) {
  if (!byPlayer.admin) {
    sendErrorMessage(room, MESSAGES.NON_EXISTENT_COMMAND(), byPlayer.id);
    return;
  }

  if (room.getScores() !== null) {
    sendErrorMessage(room, MESSAGES.ALREADY_STARTED(), byPlayer.id);
    return;
  }
  if (generalGameMode !== GeneralGameMode.GENERAL_RACE) {
    sendErrorMessage(room, MESSAGES.NOT_IN_RACE(), byPlayer.id);
    return false;
  }
  if (args.length === 0) {
    sendErrorMessage(room, MESSAGES.QTIME_COMMAND_USAGE(), byPlayer.id);
  }

  setRaceTime(byPlayer, parseInt(args[0]), room);
  return false;
}
