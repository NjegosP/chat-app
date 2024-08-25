/**
 * Checks if a given message string contains only emojis.
 *
 * This function removes any spaces from the input string and checks if the
 * resulting string consists entirely of valid emojis. The function also ensures
 * that the string is not a number, which could be a numeric emoji.
 *
 * @param {string} message - The input string to check.
 * @returns {boolean} - Returns `true` if the string contains only emojis, otherwise `false`.
 */
export const isEmojiOnly = (message: string) => {
  const stringToTest = message.replace(/ /g, '');
  const emojiRegex =
    /^(?:\p{Emoji}(?:\p{Emoji_Modifier}|\u{FE0F}|\u{20E3}?|[\u{E0020}-\u{E007E}]+\u{E007F})?(?:\u{200D}\p{Emoji}(?:\p{Emoji_Modifier}|\u{FE0F}|\u{20E3}?|[\u{E0020}-\u{E007E}]+\u{E007F})?)*)$/u;
  return emojiRegex.test(stringToTest) && Number.isNaN(Number(stringToTest));
};
