import { dispatchOutgoingMessage, setCustomWebSocketInstance } from './chatService';

describe('setCustomWebSocketInstance', () => {
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

  it('executes onmessage correctly', () => {
    const mockWebSocket = {
      onopen: () => {},
      onerror: () => {},
    };

    const onMessage = jest.fn();

    setCustomWebSocketInstance(mockWebSocket, onMessage);
    expect(onMessage).not.toHaveBeenCalled();
    mockWebSocket.onmessage({ data: 'data' });
    expect(onMessage).toHaveBeenCalled();
  });
});

describe('dispatchOutgoingMessage', () => {
  it('Runs send method when dispatchOutgoingMethod is called', () => {
    const mockWebSocket = {
      send: jest.fn(),
    };

    setCustomWebSocketInstance(mockWebSocket);

    dispatchOutgoingMessage('Test');

    expect(mockWebSocket.send).toHaveBeenCalled();
  });
});
