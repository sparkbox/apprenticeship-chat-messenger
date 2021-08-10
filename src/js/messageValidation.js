/**
 * Determines whether a string is a valid message to send.
 * @param {string} s a string which may or may not be a valid message to send
 * @returns {boolean} whether or not the string is a valid message
 */
export const isMessageValid = (m) => {
  if (typeof m !== 'string' || m === '') return false;

  // Regular expression matching whitespace
  if (/^\s+$/.exec(m)) return false;
  return true;
};
