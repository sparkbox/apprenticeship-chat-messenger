export const addMessageToChatHistory = (m) => {
  if (typeof m !== 'string' || m === '') return;

  const c = document.createElement('div');
  c.classList.add('chat-window__message', 'chat-window__message--outgoing');
  c.textContent = m;

  document.querySelector('.js-add-message-to-chat-history').appendChild(c);
};
