import { execSync } from "child_process";
import inquirer from "inquirer";

import {
  getRandomDigit,
  getRandomFrom0to100,
  getTwoDigitsWithSumLessThanTen,
} from "./helpers.ts";

const frenchTeller = "Thomas (Enhanced)";
const englishTeller = "Ava (Premium)";

// askSimpleAddition
// 2 digits addition

export const askSimpleAddition = async () => {
  const digit1 = getRandomDigit();
  const digit2 = getRandomDigit();

  const { simpleAdditionAnswer } = await inquirer.prompt([
    {
      type: "number",
      name: "simpleAdditionAnswer",
      message: digit1 + " + " + digit2 + " =",
    },
  ]);

  const correctAnswer = digit1 + digit2;

  if (Number(simpleAdditionAnswer) === correctAnswer) {
    console.log("Bien joué 🙂");
    return true;
  } else {
    console.log(`FAUX ❌, la bonne réponse était ${correctAnswer}`);
    return false;
  }
};

// askSimpleSubstraction
// 2 digits Substraction with positive result

export const askSimpleSubstraction = async () => {
  const [digit2, digit1] = getTwoDigitsWithSumLessThanTen().sort();

  const { simpleSubstractionAnswer } = await inquirer.prompt([
    {
      type: "number",
      name: "simpleSubstractionAnswer",
      message: digit1 + " - " + digit2 + " =",
    },
  ]);

  const correctAnswer = digit1 - digit2;

  if (Number(simpleSubstractionAnswer) === correctAnswer) {
    console.log("Bien joué 🙂");
    return true;
  } else {
    console.log(`FAUX ❌, la bonne réponse était ${correctAnswer}`);
    return false;
  }
};

// QUESTION ON NUMBER
// Listen a number and write it

export const listenAndWriteNumber = async () => {
  const number = getRandomFrom0to100();

  execSync(`say -v "${frenchTeller}" "Écris le nombre ${number}"`);

  const { listenAndWriteNumberAnswer } = await inquirer.prompt([
    {
      type: "number",
      name: "listenAndWriteNumberAnswer",
      message: "Écris le nombre ?",
    },
  ]);

  // const response = await prompt.run();

  if (Number(listenAndWriteNumberAnswer) === number) {
    console.log("Bien joué 🙂");
    return true;
  } else {
    console.log(`FAUX ❌ la bonne réponse était ${number}`);
    return false;
  }
};

// askSimpleNumbersAddition
// 2 numbers addition

export const askSimpleNumbersAddition = async () => {
  const [digit1Number1, digit1Number2] = getTwoDigitsWithSumLessThanTen();
  const [digit2Number1, digit2Number2] = getTwoDigitsWithSumLessThanTen();
  const [digit3Number1, digit3Number2] = getTwoDigitsWithSumLessThanTen();

  console.log(`      ${digit1Number1}${digit2Number1}${digit3Number1}`);
  console.log(`    + ${digit1Number2}${digit2Number2}${digit3Number2}`);
  console.log(`    -----`);

  const { simpleNumbersAdditionAnswer } = await inquirer.prompt([
    {
      type: "number",
      name: "simpleNumbersAdditionAnswer",
      message: "=",
    },
  ]);

  const correctAnswer = Number(
    `${digit1Number1 + digit1Number2}${digit2Number1 + digit2Number2}${
      digit3Number1 + digit3Number2
    }`
  );

  if (Number(simpleNumbersAdditionAnswer) === correctAnswer) {
    console.log("Bien joué 🙂");
    return true;
  } else {
    console.log(`FAUX ❌, la bonne réponse était ${correctAnswer}`);
    return false;
  }
};

// QUESTION ON NUMBER
// Listen a number and write it

export const getListenAndWriteWord = (word, sentence, language) => async () => {
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

  const { response } = await inquirer.prompt([
    {
      type: "input",
      name: "response",
      message: labels.message,
    },
  ]);

  if (response === word) {
    // console.log(labels.messageWin);
    await inquirer.prompt([
      {
        type: "confirm",
        name: "confirm",
        message: labels.messageWin,
      },
    ]);

    return true;
  } else {
    // console.log(`${labels.messageLoose} ${word}`);
    await inquirer.prompt([
      {
        type: "confirm",
        name: "confirm",
        message: `${labels.messageLoose} ${word}`,
      },
    ]);

    return false;
  }
};
