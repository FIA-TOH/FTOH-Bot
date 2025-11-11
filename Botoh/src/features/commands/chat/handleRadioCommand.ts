// ...existing code...
import { sendErrorMessage, sendNonLocalizedSmallChatMessage } from "../../chat/chat";
import { MESSAGES } from "../../chat/messages";
const radioColor = 0xFF8800; // Naranja para el radio
const radioFont = "bold";
export function handleRadioCommand(
  byPlayer?: PlayerObject,
  args?: string[],
  room?: RoomObject
) {
  if (!room || !byPlayer) return;

  if (!args || args.length < 2) {
    sendErrorMessage(
      room,
      MESSAGES.RADIO_BAD_USE(),
      byPlayer.id
    );
    return;
  }

  const targetKey = args[0];
  const message = args.slice(1).join(" ").trim();
  if (!message) {
    sendErrorMessage(room, MESSAGES.RADIO_MESSAGE_LEFT(), byPlayer.id);
    return;
  }

  const players = room.getPlayerList() || [];
  let target: PlayerObject | undefined;

  const maybeId = Number(targetKey);
  if (!isNaN(maybeId)) {
    target = players.find((p) => p.id === maybeId);
  }

  if (!target) {
    const lowered = targetKey.toLowerCase();
    const matches = players.filter((p) => (p.name || "").toLowerCase().includes(lowered));
    if (matches.length === 1) target = matches[0];
    else if (matches.length > 1) {
      sendErrorMessage(
        room,
        MESSAGES.MULTIPE_RADIO(),
        byPlayer.id
      );
      return;
    }
  }

  if (!target) {
    sendErrorMessage(room, MESSAGES.RADIO_NOT_FOUND(), byPlayer.id);
    return;
  }

  const announced = `[RADIO] ${byPlayer.name}: ${message}`;

  // private -> only target and sender
  room.sendAnnouncement(announced, target.id, radioColor, radioFont);
  room.sendAnnouncement(announced, byPlayer.id, radioColor, radioFont);
}
// ...existing code...