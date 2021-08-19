/**
 * @jest-environment jsdom
 */
import main from './app.js';
import sendMessage from './sendMessage.js';
import { onEnterPress, onFormSubmit } from './eventHandlers.js';

jest.mock('./eventHandlers.js');
jest.mock('./sendMessage.js');

describe('App Initialization', () => {
  it('Runs onEnterPress with sendMessage as a parameter', () => {
    main();
    expect(onEnterPress).toHaveBeenCalledWith(sendMessage);
  });

  it('Runs onFormSubmit with sendMessage as a parameter', () => {
    main();
    expect(onFormSubmit).toHaveBeenCalledWith(sendMessage);
  });
});
