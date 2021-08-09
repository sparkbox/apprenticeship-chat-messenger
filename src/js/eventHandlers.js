export const callbackWhenEnterIsPressed = (callback) => {
  const textArea = document.querySelector('.chat-window__input');
  textArea.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      callback(textArea.value);
      textArea.value = '';
    }
  });
};

export const callbackOnFormSubmit = (callback) => {
  const chatForm = document.querySelector('.chat-window__sender-features');
  const textArea = document.querySelector('.chat-window__input');
  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    callback(textArea.value);
    textArea.value = '';
  });
};
