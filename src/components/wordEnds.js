export const wordEnds = (number, arrEnds) => {
  if (number % 10 === 1 && number % 100 !== 11) {
    return arrEnds[0];
  }

  if (
    number % 10 >= 2 &&
    number % 10 <= 4 &&
    (number % 100 < 10 || number % 100 >= 20)
  ) {
    return arrEnds[1];
  }

  return arrEnds[2];
};
