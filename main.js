const { Select } = require("enquirer");

const { askMany } = require("./helpers");
const { askSimpleAddition, listenAndWriteNumber } = require("./exercises");

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
  SimpleAddition: { label: "Addition simple", fn: askSimpleAddition },
  WriteNumber: { label: "Ecrire les nombres", fn: null },
};

const getMenu = async () => {
  const prompt = new Select({
    name: "exo",
    message: "Choisir l'exercice",
    choices: [EXERCISES.SimpleAddition.label, EXERCISES.WriteNumber.label],
  });

  const answer = await prompt.run();

  await launchExercise(answer);

  getMenu();
};

const launchExercise = async (exerciseName) => {
  console.log("");

  if (exerciseName === EXERCISES.SimpleAddition.label) {
    await askMany([askSimpleAddition, askSimpleAddition, askSimpleAddition]);
  } else if (exerciseName === EXERCISES.WriteNumber.label) {
    await askMany([listenAndWriteNumber, listenAndWriteNumber, listenAndWriteNumber]);
  }

  console.log("");
};

module.exports = {
  PROJECT_NAME,
  getMenu,
};
