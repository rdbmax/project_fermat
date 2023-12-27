const { Select } = require("enquirer");

const { askMany, shuffledArray } = require("./helpers");
const { englishWords, frenchWords } = require("./words");
const {
  askSimpleAddition,
  askSimpleSubstraction,
  listenAndWriteNumber,
  askSimpleNumbersAddition,
  getListenAndWriteWord,
} = require("./exercises");

const PROJECT_NAME = `
_______  ______    _______      ___  _______  _______    _______  _______  ______    __   __  _______  _______ 
|       ||    _ |  |       |    |   ||       ||       |  |       ||       ||    _ |  |  |_|  ||   _   ||       |
|    _  ||   | ||  |   _   |    |   ||    ___||_     _|  |    ___||    ___||   | ||  |       ||  |_|  ||_     _|
|   |_| ||   |_||_ |  | |  |    |   ||   |___   |   |    |   |___ |   |___ |   |_||_ |       ||       |  |   |  
|    ___||    __  ||  |_|  | ___|   ||    ___|  |   |    |    ___||    ___||    __  ||       ||       |  |   |  
|   |    |   |  | ||       ||       ||   |___   |   |    |   |    |   |___ |   |  | || ||_|| ||   _   |  |   |  
|___|    |___|  |_||_______||_______||_______|  |___|    |___|    |_______||___|  |_||_|   |_||__| |__|  |___|  


`;

const EXERCISES = {
  SimpleAddition: { label: "Addition simple" },
  SimpleSubstraction: { label: "Soustraction simple" },
  WriteNumber: { label: "Ecrire les nombres" },
  listenAndWriteWordFrench: { label: "Écoutes et écris le mot" },
  listenAndWriteWordEnglish: { label: "Listen and write the word" },
  askSimpleNumbersAddition: { label: "Addition simple de nombres" },
  evaluation: { label: "Évaluation" },
};

const getMenu = async () => {
  const prompt = new Select({
    name: "exo",
    message: "Choisir l'exercice",
    choices: [
      EXERCISES.SimpleAddition.label,
      EXERCISES.SimpleSubstraction.label,
      EXERCISES.WriteNumber.label,
      EXERCISES.askSimpleNumbersAddition.label,
      EXERCISES.listenAndWriteWordFrench.label,
      EXERCISES.listenAndWriteWordEnglish.label,
      EXERCISES.evaluation.label,
    ],
  });

  const answer = await prompt.run();

  await launchExercise(answer);

  getMenu();
};

const launchExercise = async (exerciseName) => {
  console.log("");

  if (exerciseName === EXERCISES.SimpleAddition.label) {
    await askMany([askSimpleAddition, askSimpleAddition, askSimpleAddition]);
  } else if (exerciseName === EXERCISES.SimpleSubstraction.label) {
    await askMany([
      askSimpleSubstraction,
      askSimpleSubstraction,
      askSimpleSubstraction,
    ]);
  } else if (exerciseName === EXERCISES.WriteNumber.label) {
    await askMany([
      listenAndWriteNumber,
      listenAndWriteNumber,
      listenAndWriteNumber,
    ]);
  } else if (exerciseName === EXERCISES.listenAndWriteWordFrench.label) {
    await askMany(
      shuffledArray(frenchWords).map(([word, sentence]) =>
        getListenAndWriteWord(word, sentence, "fr")
      )
    );
  } else if (exerciseName === EXERCISES.listenAndWriteWordEnglish.label) {
    await askMany(
      shuffledArray(englishWords).map(([word, sentence]) =>
        getListenAndWriteWord(word, sentence, "en")
      )
    );
  } else if (exerciseName === EXERCISES.askSimpleNumbersAddition.label) {
    await askMany([
      askSimpleNumbersAddition,
      askSimpleNumbersAddition,
      askSimpleNumbersAddition,
    ]);
  } else if (exerciseName === EXERCISES.evaluation.label) {
    await askMany(
      shuffledArray([
        askSimpleNumbersAddition,
        askSimpleNumbersAddition,
        askSimpleNumbersAddition,
        askSimpleNumbersAddition,
        askSimpleNumbersAddition,
        listenAndWriteNumber,
        listenAndWriteNumber,
        listenAndWriteNumber,
        listenAndWriteNumber,
        listenAndWriteNumber,
        askSimpleAddition,
        askSimpleAddition,
        askSimpleAddition,
        askSimpleAddition,
        askSimpleAddition,
        askSimpleSubstraction,
        askSimpleSubstraction,
        askSimpleSubstraction,
        askSimpleSubstraction,
        askSimpleSubstraction,
        ...frenchWords.map(([word, sentence]) =>
          getListenAndWriteWord(word, sentence, "fr")
        ),
        ...englishWords.map(([word, sentence]) =>
          getListenAndWriteWord(word, sentence, "en")
        ),
      ])
    );
  }

  console.log("");
};

module.exports = {
  PROJECT_NAME,
  getMenu,
};
