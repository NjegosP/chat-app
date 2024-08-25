import { isEmojiOnly } from '../../../utils/helpers';

type MessageStylesProps = {
  isUserMessage: boolean;
  isConsecutive: boolean;
  isLiked: boolean;
  messageText: string;
};

export const getMessageStyles = ({ isUserMessage, isConsecutive, isLiked, messageText }: MessageStylesProps) => {
  const messageAlignment = isUserMessage ? 'self-end' : 'self-start';
  const messageColor = isUserMessage ? 'bg-[#0F172A]' : 'bg-[#17274b]';
  const margin = isConsecutive ? 'mt-0.5' : 'mt-2';
  const marginBottom = isLiked ? 'mb-3' : '';
  const isEmoji = isEmojiOnly(messageText);
  const fontSize = isEmoji ? 'text-5xl' : 'text-sm';
  const rowDirection = isUserMessage ? 'flex-row' : 'flex-row-reverse';

  return {
    messageAlignment,
    messageColor,
    margin,
    marginBottom,
    fontSize,
    rowDirection,
  };
};
