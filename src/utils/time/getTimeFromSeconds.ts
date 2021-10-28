export const getTimeFromSeconds = (seconds: number) => {
  let tmpDate = new Date(0);
  tmpDate.setSeconds(seconds);
  return tmpDate.toISOString().substr(14, 5);
};
