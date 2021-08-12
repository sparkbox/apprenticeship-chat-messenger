/**
 * @jest-environment jsdom
 */

import { onFormSubmit, onEnterPress } from './eventHandlers';

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

const textArea = document.querySelector('.chat-window__input');
const chatForm = document.querySelector('.chat-window__sender-features');

describe('onEnterIsPressed', () => {
  it('Runs callback on "Enter" key press', () => {
    const callback = jest.fn();
    onEnterPress(callback);

    const event = new KeyboardEvent('keypress', { key: 'Enter' });

    textArea.dispatchEvent(event);

    expect(callback).toHaveBeenCalled();
  });

  it('Sets textarea to empty string on "Enter" key press', () => {
    const callback = jest.fn();
    onEnterPress(callback);

    const event = new KeyboardEvent('keypress', { key: 'Enter' });

    textArea.dispatchEvent(event);

    expect(textArea.value).toBe('');
  });
});

describe('onFormSubmit', () => {
  it('Runs callback on submit event', () => {
    const callback = jest.fn();
    onFormSubmit(callback);

    const event = new Event('submit');

    chatForm.dispatchEvent(event);

    expect(callback).toHaveBeenCalled();
  });

  it('Sets textarea to empty string on form submit', () => {
    const callback = jest.fn();
    onFormSubmit(callback);

    const event = new Event('submit');

    chatForm.dispatchEvent(event);

    expect(textArea.value).toBe('');
  });
});
