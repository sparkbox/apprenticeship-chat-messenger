import { Server } from 'ws';
import uniqid from 'uniqid';

const WEBSOCKET_PORT = 3000;

/**
 * Dictionary to store uuids and current connections. This is used to
 * make sure that we only send messages to non-senders.
 */
const connectedClients = {};

const sendMessageToRecipients = (message, uuid) => {
  const recipientClients = Object.keys(connectedClients).filter((c) => c !== uuid);
  recipientClients.forEach((c) => {
    connectedClients[c].send(message);
  });
};

const registerNewConnection = (ws) => {
  const uuid = uniqid();
  connectedClients[uuid] = ws;
  return uuid;
};

const removeExistingConnection = (uuid) => {
  delete connectedClients[uuid];
};

const getCurrentConnectionCount = () => Object.keys(connectedClients).length;

const getWebSocketServerInstance = () => new Server({ port: WEBSOCKET_PORT });

const logMessageToServer = (message) => console.info(message);

getWebSocketServerInstance()
  .on('connection', (ws) => {
    const uuid = registerNewConnection(ws);
    logMessageToServer(`New user connected (total connections: ${getCurrentConnectionCount()})`);

    ws.on('message', (buffer) => {
      const message = buffer.toString();
      logMessageToServer(`Message received: ${message}`);
      sendMessageToRecipients(message, uuid);
    });

    ws.on('close', () => {
      removeExistingConnection(uuid);
    });
  });
