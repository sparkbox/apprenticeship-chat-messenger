/**
 * @jest-environment jsdom
 */

import { callbackOnFormSubmit, callbackWhenEnterIsPressed } from './eventHandlers';

document.body.innerHTML = `
<form class="chat-window__sender-features">
  <label for="message-area" class="visually-hidden">Message area</label>
  <textarea
    name="message-area"
    id="message-area"
    class="chat-window__input">Hello World</textarea>
  <button class="chat-window__send-button" type="submit">Send</button>
</form>
`;

describe('eventHandler.js', () => {
  it('Should run callback and set textarea to empty string on "Enter" key press', () => {
    const callback = jest.fn();
    callbackWhenEnterIsPressed(callback);

    const textArea = document.querySelector('.chat-window__input');
    const event = new KeyboardEvent('keypress', { keyCode: 13 });

    textArea.dispatchEvent(event);

    expect(textArea.value).toBe('');
    expect(callback).toHaveBeenCalled();
  });

  it('Should run callback and set textarea to empty string on submit event', () => {
    const callback = jest.fn();
    callbackOnFormSubmit(callback);

    const textArea = document.querySelector('.chat-window__input');
    const chatForm = document.querySelector('.chat-window__sender-features');
    const event = new Event('submit');

    chatForm.dispatchEvent(event);

    expect(textArea.value).toBe('');
    expect(callback).toHaveBeenCalled();
  });
});
