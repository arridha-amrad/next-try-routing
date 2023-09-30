export const delay = (duration: number) => {
  return new Promise((res) => {
    setTimeout(() => {
      res("OK");
    }, duration);
  });
};
