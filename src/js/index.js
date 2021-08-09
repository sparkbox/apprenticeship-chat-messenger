import '../css/index.css';
import { addMessageToChatHistory } from './chatWindow';
import { callbackWhenEnterIsPressed, callbackOnFormSubmit } from './eventHandlers';

const helloWorld = () => console.log('Hello!');

callbackWhenEnterIsPressed(addMessageToChatHistory);
callbackOnFormSubmit(addMessageToChatHistory);

helloWorld();
