export const shuffledArray = <T>(array: T[]): T[] =>
  array.sort((a, b) => 0.5 - Math.random());

export const getRandomDigit = (): number => Math.floor(Math.random() * 10);
export const getRandomFrom0to100 = (): number =>
  Math.floor(Math.random() * 101);

export const getTwoDigitsWithSumLessThanTen = (): [number, number] => {
  const digit1 = getRandomDigit();

  const factor = (digit1 - 10) * -1;

  const digit2 = Math.floor(Math.random() * factor);

  return [digit1, digit2];
};

export const askMany = async (
  operations: (() => Promise<boolean>)[]
): Promise<void> => {
  const results: boolean[] = [];

  for (let index in operations) {
    console.log("");
    const result = await operations[index]();
    results.push(result);
  }

  const winAmount = results.filter((value) => value).length;

  console.log("");
  console.log("*+*+*+*+*+*+*+*+*+*+*+*+*+*+");
  console.log("*+*+*+*+*+*+*+*+*+*+*+*+*+*+");
  console.log("");
  console.log(`Résultats : ${winAmount} / ${operations.length}`);
  console.log("");
  console.log("*+*+*+*+*+*+*+*+*+*+*+*+*+*+");
  console.log("*+*+*+*+*+*+*+*+*+*+*+*+*+*+");
  console.log("");
};
