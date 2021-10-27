export const truncateString = (
  string: string,
  truncateLength: number | undefined
): string => {
  const maxLength = truncateLength ?? 30;
  if (string.length > maxLength) {
    return string.slice(0, maxLength) + '...';
  }
  return string;
};
