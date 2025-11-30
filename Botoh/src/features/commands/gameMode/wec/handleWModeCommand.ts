import {
  changeGameMode,
  GameMode,
} from "../../../changeGameState/changeGameModes";
import { sendErrorMessage } from "../../../chat/chat";
import { MESSAGES } from "../../../chat/messages";
import { log } from "../../../discord/logger";

export function handleWModeCommand(
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

  changeGameMode(GameMode.WEC, room);
  log("Wec mode enabled by admin");
  room.sendAnnouncement("Wec mode on");
}
