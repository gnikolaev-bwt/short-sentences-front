export const createAsyncPromise = <T>(data: T, timeout: number) => {
  return new Promise<T>((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, timeout);
  });
};
