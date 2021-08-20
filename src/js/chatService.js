import { addMessageToChatHistory } from './chatWindow';

let instance;

export const setCustomWebSocketInstance = async (
  customInstance,
  onMessage = (message) => addMessageToChatHistory(message, { messageType: 'incoming' }),
) => {
  instance = customInstance;
  return new Promise((resolve, reject) => {
    instance.onopen = () => resolve(instance);
    instance.onerror = (err) => reject(err);
    instance.onmessage = ({ data }) => onMessage(data);
  });
};

export const dispatchOutgoingMessage = (payload) => instance.send(payload);
