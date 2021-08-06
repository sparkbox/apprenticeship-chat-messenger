export const listenForKeypressAndConsoleMessage = () => {
  console.log(document.body);
  document.addEventListener('DOMContentLoaded', () => {
    const textArea = document.querySelector('.chat-window__input');
    textArea.addEventListener('keypress', (e) => {
      // if key is 'Enter' key console message
      if (e.keyCode === 13) {
        e.preventDefault();
        console.log(textArea.value);
        textArea.value = '';
      }
    });
  });
};

export const listenForSubmitAndConsoleMessage = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.querySelector('.chat-window__sender-features');
    const textArea = document.querySelector('.chat-window__input');
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log(textArea.value);
      textArea.value = '';
    });
  });
};
