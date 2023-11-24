const getRandomDigit = () => Math.floor(Math.random() * 10);
const getRandomFrom0to100 = () => Math.floor(Math.random() * 101);

const askMany = async (operations) => {
  for (let index in operations) {
    console.log("");
    await operations[index]();
  }

  console.log("");
};

module.exports = {
  askMany,
  getRandomDigit,
  getRandomFrom0to100,
};
