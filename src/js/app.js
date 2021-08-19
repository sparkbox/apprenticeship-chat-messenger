import '../css/index.css';
import { addMessageToChatHistory } from './chatWindow';
import { onEnterPress, onFormSubmit } from './eventHandlers';

export default function main() {
  onEnterPress(addMessageToChatHistory);
  onFormSubmit(addMessageToChatHistory);
}
