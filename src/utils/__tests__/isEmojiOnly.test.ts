import { isEmojiOnly } from '../helpers';

describe('isEmojiOnly', () => {
  test('returns true for a single emoji', () => {
    expect(isEmojiOnly('😀')).toBe(true);
  });

  test('returns false for multiple emojis', () => {
    expect(isEmojiOnly('😀🎉')).toBe(false);
  });

  test('returns false for an emoji followed by text', () => {
    expect(isEmojiOnly('😀Hello')).toBe(false);
  });

  test('returns false for a single non-emoji character', () => {
    expect(isEmojiOnly('A')).toBe(false);
  });

  test('returns false for a number', () => {
    expect(isEmojiOnly('1')).toBe(false);
  });

  test('returns false for an empty string', () => {
    expect(isEmojiOnly('')).toBe(false);
  });

  test('returns true for an emoji with a modifier', () => {
    expect(isEmojiOnly('👍')).toBe(true);
  });

  test('returns true for an emoji with zero-width joiner', () => {
    expect(isEmojiOnly('👩‍💻')).toBe(true);
  });

  test('returns true for an emoji with white spaces', () => {
    expect(isEmojiOnly('  😀  ')).toBe(true);
  });
});
