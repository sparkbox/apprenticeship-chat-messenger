export const onEnterPress = (callback) => {
  const textArea = document.querySelector('.chat-window__input');
  textArea.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      callback(textArea.value);
      textArea.value = '';
    }
  });
};

export const onFormSubmit = (callback) => {
  const textArea = document.querySelector('.chat-window__input');
  const chatForm = document.querySelector('.chat-window__sender-features');
  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    callback(textArea.value);
    textArea.value = '';
  });
};
