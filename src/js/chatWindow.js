import { isMessageValid } from './messageValidation';

const guardOptions = (options) => {
  if (options.messageType !== 'outgoing' && options.messageType !== 'incoming') {
    return false;
  }

  return true;
};

/**
 * Adds a message, if valid, to the chat messages in the DOM.
 * @param {*} message a message (yet to be validated)
 * @returns {void}
 */
export const addMessageToChatHistory = (message, options = { messageType: 'outgoing' }) => {
  if (!isMessageValid(message)) return;

  if (!guardOptions(options)) throw new Error('Message Type is incorrect');

  const chatMessageElement = document.createElement('div');

  chatMessageElement.classList.add('chat-window__message', `chat-window__message--${options.messageType}`);

  chatMessageElement.textContent = message;

  document.querySelector('.js-add-message-to-chat-history').appendChild(chatMessageElement);
};
