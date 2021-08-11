import { isMessageValid } from './messageValidation';

test('should guard against empty messages', () => {
  expect(isMessageValid('')).toBe(false);
});

test('should guard against null and undefined messages', () => {
  expect(isMessageValid(null)).toBe(false);
  expect(isMessageValid(undefined)).toBe(false);
});

test('should guard against whilespace-filled messages', () => {
  expect(isMessageValid('                         \n          ')).toBe(false);
  expect(isMessageValid('      ')).toBe(false);
  expect(isMessageValid('      \t   ')).toBe(false);
  expect(isMessageValid('\n\n\n\n\n\n\n\n\n\n\n')).toBe(false);
});

test('should allow valid messages', () => {
  expect(isMessageValid('hello! it\'s a valid message.')).toBe(true);
});
