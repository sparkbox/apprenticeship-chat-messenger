import '../css/index.css';
import { setCustomWebSocketInstance } from './chatService';
import { onEnterPress, onFormSubmit } from './eventHandlers';
import sendMessage from './sendMessage';

export default async function main() {
  onEnterPress(sendMessage);
  onFormSubmit(sendMessage);
  await setCustomWebSocketInstance(new WebSocket('ws://localhost:3000'));
}
