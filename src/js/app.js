import '../css/index.css';
import { addMessageToChatHistory } from './chatWindow';
import { onEnterPress, onFormSubmit } from './eventHandlers';

export default function main() {
  const helloWorld = () => console.log('Hello!');

  onEnterPress(addMessageToChatHistory);
  onFormSubmit(addMessageToChatHistory);

  helloWorld();
}
