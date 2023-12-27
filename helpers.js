const shuffledArray = (array) => array.sort((a, b) => 0.5 - Math.random());

const getRandomDigit = () => Math.floor(Math.random() * 10);
const getRandomFrom0to100 = () => Math.floor(Math.random() * 101);

const getTwoDigitsWithSumLessThanTen = () => {
  const digit1 = getRandomDigit();

  const factor = (digit1 - 10) * -1;

  const digit2 = Math.floor(Math.random() * factor);

  return [digit1, digit2];
};

const askMany = async (operations) => {
  const results = [];

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

module.exports = {
  shuffledArray,
  askMany,
  getRandomDigit,
  getRandomFrom0to100,
  getTwoDigitsWithSumLessThanTen,
};
