import { dispatchOutgoingMessage, setCustomWebSocketInstance } from './chatService';

describe('chatService.js', () => {
  it('Runs send method when dispatchOutgoingMethod is called', () => {
    const mockWebSocket = {
      send: jest.fn(),
    };

    setCustomWebSocketInstance(mockWebSocket);

    dispatchOutgoingMessage('Test');

    expect(mockWebSocket.send).toHaveBeenCalled();
  });
  it('Resolves with instance', () => {
    const mockWebSocket = {
      send: () => {},
    };

    expect(setCustomWebSocketInstance(mockWebSocket)).resolves.toEqual(mockWebSocket);
  });
  it('Rejects with error message', async () => {
  });
});
