/**
 * @jest-environment jsdom
 */

import { addMessageToChatHistory } from './chatWindow';

test('sanitizes input and adds valid messages to the chat window', () => {
  document.body.innerHTML = `<div class="chat-window">
  <div class="js-add-message-to-chat-history chat-window__messages">
  <div class="chat-window__message chat-window__message--incoming">hi</div>
  <div class="chat-window__message chat-window__message--outgoing">hello</div>
  <div class="chat-window__message chat-window__message--outgoing">hows it going?</div>
  <div class="chat-window__message chat-window__message--incoming">not bad</div>
  </div>
  <form class="chat-window__sender-features">
    <label for="message-area" class="visually-hidden">Message area</label>
    <textarea
      name="message-area"
      id="message-area"
      class="chat-window__input"></textarea>
    <button class="chat-window__send-button" type="submit">Send</button>
  </form>
</div>`;

  addMessageToChatHistory('');
  addMessageToChatHistory(4);
  addMessageToChatHistory(false);

  expect(document.getElementsByClassName('chat-window__message').length).toBe(4);

  addMessageToChatHistory('testing');

  const expectedNode = document.createElement('div');
  expectedNode.classList.add('chat-window__message', 'chat-window__message--outgoing');
  expectedNode.textContent = 'testing';

  expect(document.getElementsByClassName('chat-window__messages')[0].lastChild)
    .toStrictEqual(expectedNode);
});
