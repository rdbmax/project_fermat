const { execSync } = require("child_process");

const { NumberPrompt } = require("enquirer");

const { getRandomDigit, getRandomFrom0to100 } = require("./helpers");

// askSimpleAddition
// 2 digits addition

const askSimpleAddition = async () => {
  var digit1 = getRandomDigit();
  var digit2 = getRandomDigit();

  const prompt = new NumberPrompt({
    name: "response",
    message: digit1 + " + " + digit2 + " =",
  });

  const response = await prompt.run();

  if (Number(response) === digit1 + digit2) {
    console.log("Bien joué 🙂");
  } else {
    console.log("FAUX ❌");
  }
};

// QUESTION ON NUMBER
// Listen a number and write it

const listenAndWriteNumber = async () => {
  const number = getRandomFrom0to100();

  execSync(`say ${number}`);

  const prompt = new NumberPrompt({
    name: "response",
    message: "Écris le nombre ?",
  });

  const response = await prompt.run();

  if (Number(response) === number) {
    console.log("Bien joué 🙂");
  } else {
    console.log(`FAUX ❌ la bonne réponse était ${number}`);
  }
};

module.exports = {
  askSimpleAddition,
  listenAndWriteNumber,
};
