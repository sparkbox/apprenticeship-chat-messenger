import { dispatchOutgoingMessage } from './chatService';
import { addMessageToChatHistory } from './chatWindow';
import sendMessage from './sendMessage';

jest.mock('./chatService.js');
jest.mock('./chatWindow.js');

describe('sendMessage.js', () => {
  it('Calls addMessageToChatHistory with message as parameter', () => {
    sendMessage('message');
    expect(addMessageToChatHistory).toHaveBeenCalledWith('message');
  });
  it('Calls dispatchOutgoingMessage with message as parameter', () => {
    sendMessage('message');
    expect(dispatchOutgoingMessage).toHaveBeenCalledWith('message');
  });
});
