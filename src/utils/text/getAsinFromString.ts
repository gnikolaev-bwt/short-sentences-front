export const getAsinFromString = (string: string) => {
  const asinRegex = new RegExp('B[0-9]{2}[0-9A-Z]{7}|[0-9]{9}(X|0-9])');
  const resultArr = asinRegex.exec(string);
  if (!resultArr) {
    return null;
  }
  return resultArr?.[0];
};
