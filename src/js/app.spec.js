/**
 * @jest-environment jsdom
 */
import main from './app.js';
import { addMessageToChatHistory } from './chatWindow.js';
import { onEnterPress, onFormSubmit } from './eventHandlers.js';

jest.mock('./eventHandlers.js');
jest.mock('./chatWindow.js');

describe('App Initialization', () => {
  it('Runs onEnterPress with addMessageToChatHistory as a parameter', () => {
    main();
    expect(onEnterPress).toHaveBeenCalledWith(addMessageToChatHistory);
  });

  it('Runs onFormSubmit with addMessageToChatHistory as a parameter', () => {
    main();
    expect(onFormSubmit).toHaveBeenCalledWith(addMessageToChatHistory);
  });
});
