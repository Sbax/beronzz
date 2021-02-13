export const randomNumber = (min = 0, max = 255) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const randomFromArray = (array) =>
  array[Math.floor(Math.random() * array.length)];

export const sumUpTo = (n) => (n * (n + 1)) / 2;

export const kFormatter = (num) => {
  if (Math.abs(num) >= 1e6) {
    return Math.sign(num) * (Math.abs(num) / 10e6).toFixed(1) + 'm';
  }

  if (Math.abs(num) >= 1e3) {
    return Math.sign(num) * (Math.abs(num) / 1e3).toFixed(1) + 'k';
  }

  return Math.sign(num) * Math.abs(num);
};
