export const truncateSentence = (
  sentence: string,
  truncateLength: number | undefined
): string => {
  const maxLength = truncateLength ?? 12;
  const splittedSentence = sentence.split(' ');
  if (splittedSentence.length > maxLength) {
    return sentence.split(' ').slice(0, maxLength).join(' ') + '...';
  }
  return sentence;
};
