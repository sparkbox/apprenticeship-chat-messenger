/**
 * @jest-environment jsdom
 */
import main from './app.js';

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

describe('app.js', () => {
  it('A good place for a test', () => {
    main();
  });
});
