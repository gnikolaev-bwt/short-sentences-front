export const truncateSentence = (sentence: string): string => {
  return sentence.split(' ').slice(0, 11).join(' ');
};
