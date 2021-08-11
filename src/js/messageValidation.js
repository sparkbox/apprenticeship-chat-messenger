/**
 * Determines whether a string is a valid message to send.
 * @param {string} maybeMessage a string which may or may not be a valid message to send
 * @returns {boolean} whether or not the string is a valid message
 */
export const isMessageValid = (maybeMessage) => {
  const isAllWhitespace = (string) => (/^\s+$/.exec(string) !== null);
  const isNonemptyString = (string) => (typeof string === 'string') && (string !== '');

  return isNonemptyString(maybeMessage) && !isAllWhitespace(maybeMessage);
};
