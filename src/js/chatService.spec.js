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
      onopen: () => {},
      onerror: () => {},
    };

    const customWebsocketInstance = setCustomWebSocketInstance(mockWebSocket);
    mockWebSocket.onopen();

    expect(customWebsocketInstance).resolves.toMatchObject(mockWebSocket);
  });
  it('Rejects with error message', () => {
    const mockWebSocket = {
      onopen: () => {},
      onerror: () => {},
    };

    const customWebsocketInstance = setCustomWebSocketInstance(mockWebSocket);
    mockWebSocket.onerror(new Error('Error!'));
    expect(customWebsocketInstance).rejects.toThrow('Error!');
  });
});
