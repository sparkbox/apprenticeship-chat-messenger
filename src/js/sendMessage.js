import { dispatchOutgoingMessage } from './chatService';
import { addMessageToChatHistory } from './chatWindow';

export default function sendMessage(message) {
  addMessageToChatHistory(message);
  dispatchOutgoingMessage(message);
}
