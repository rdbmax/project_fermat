const { execSync } = require("child_process");

const { Confirm, NumberPrompt, StringPrompt } = require("enquirer");

const {
  getRandomDigit,
  getRandomFrom0to100,
  getTwoDigitsWithSumLessThanTen,
} = require("./helpers");

const frenchTeller = "Thomas (Enhanced)";
const englishTeller = "Ava (Premium)";

// askSimpleAddition
// 2 digits addition

const askSimpleAddition = async () => {
  const digit1 = getRandomDigit();
  const digit2 = getRandomDigit();

  const prompt = new NumberPrompt({
    name: "response",
    message: digit1 + " + " + digit2 + " =",
  });

  const response = await prompt.run();

  const correctAnswer = digit1 + digit2;

  if (Number(response) === correctAnswer) {
    console.log("Bien joué 🙂");
    return true;
  } else {
    console.log(`FAUX ❌, la bonne réponse était ${correctAnswer}`);
    return false;
  }
};

// askSimpleSubstraction
// 2 digits Substraction with positive result

const askSimpleSubstraction = async () => {
  const [digit2, digit1] = getTwoDigitsWithSumLessThanTen().sort();

  const prompt = new NumberPrompt({
    name: "response",
    message: digit1 + " - " + digit2 + " =",
  });

  const response = await prompt.run();

  const correctAnswer = digit1 - digit2;

  if (Number(response) === correctAnswer) {
    console.log("Bien joué 🙂");
    return true;
  } else {
    console.log(`FAUX ❌, la bonne réponse était ${correctAnswer}`);
    return false;
  }
};

// QUESTION ON NUMBER
// Listen a number and write it

const listenAndWriteNumber = async () => {
  const number = getRandomFrom0to100();

  execSync(`say -v "${frenchTeller}" "Écris le nombre ${number}"`);

  const prompt = new NumberPrompt({
    name: "response",
    message: "Écris le nombre ?",
  });

  const response = await prompt.run();

  if (Number(response) === number) {
    console.log("Bien joué 🙂");
    return true;
  } else {
    console.log(`FAUX ❌ la bonne réponse était ${number}`);
    return false;
  }
};

// askSimpleNumbersAddition
// 2 numbers addition

const askSimpleNumbersAddition = async () => {
  const [digit1Number1, digit1Number2] = getTwoDigitsWithSumLessThanTen();
  const [digit2Number1, digit2Number2] = getTwoDigitsWithSumLessThanTen();
  const [digit3Number1, digit3Number2] = getTwoDigitsWithSumLessThanTen();

  console.log(`      ${digit1Number1}${digit2Number1}${digit3Number1}`);
  console.log(`    + ${digit1Number2}${digit2Number2}${digit3Number2}`);
  console.log(`    -----`);

  const prompt = new NumberPrompt({
    name: "response",
    message: "=",
  });

  const response = await prompt.run();

  const correctAnswer = Number(
    `${digit1Number1 + digit1Number2}${digit2Number1 + digit2Number2}${
      digit3Number1 + digit3Number2
    }`
  );

  if (Number(response) === correctAnswer) {
    console.log("Bien joué 🙂");
    return true;
  } else {
    console.log(`FAUX ❌, la bonne réponse était ${correctAnswer}`);
    return false;
  }
};

// QUESTION ON NUMBER
// Listen a number and write it

const getListenAndWriteWord = (word, sentence, language) => async () => {
  const storyTeller = language === "fr" ? frenchTeller : englishTeller;
  const verb = language === "fr" ? "Écris" : "Write";
  const cmdSaySentence = `say -v "${storyTeller}" "${sentence}"`;
  const cmdSleep1s = `sleep 1`;
  const cmdSayWord = `say -v "${storyTeller}" "${verb} : ${word}"`;

  execSync(cmdSaySentence);
  console.log(sentence.replace(new RegExp(word, "ig"), "___"));
  execSync(cmdSleep1s);
  execSync(cmdSayWord);

  const labels =
    language === "fr"
      ? {
          message: "Écris le mot",
          messageWin: "🙂 Bien joué",
          messageLoose: "❌ Raté, le mot était",
          confirm: "Passes à la suite !",
        }
      : {
          message: "Write the word",
          messageWin: "🙂 Good game",
          messageLoose: "❌ Wrong, the word was",
          confirm: "Go next word !",
        };

  const prompt = new StringPrompt({
    name: "response",
    labels: labels.message,
  });

  const response = await prompt.run();

  if (response === word) {
    // console.log(labels.messageWin);
    const confirmPrompt = new Confirm({
      name: "goNext",
      message: labels.messageWin,
    });

    await confirmPrompt.run();

    return true;
  } else {
    // console.log(`${labels.messageLoose} ${word}`);
    const confirmPrompt = new Confirm({
      name: "goNext",
      message: `${labels.messageLoose} ${word}`,
    });

    await confirmPrompt.run();
    return false;
  }
};

module.exports = {
  askSimpleAddition,
  askSimpleSubstraction,
  listenAndWriteNumber,
  askSimpleNumbersAddition,
  getListenAndWriteWord,
};
