import { isMessageValid } from './messageValidation';

/**
 * Adds a message, if valid, to the chat messages in the DOM.
 * @param {*} m a message (yet to be validated)
 * @returns {void}
 */
export const addMessageToChatHistory = (m) => {
  if (!isMessageValid(m)) return;

  const c = document.createElement('div');
  c.classList.add('chat-window__message', 'chat-window__message--outgoing');
  c.textContent = m;

  document.querySelector('.js-add-message-to-chat-history').appendChild(c);
};
