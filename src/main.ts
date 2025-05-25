import inquirer from "inquirer";

import { askMany, shuffledArray } from "./helpers.ts";
import { englishWords, frenchWords } from "./words.ts";
import {
  askSimpleAddition,
  askSimpleSubstraction,
  listenAndWriteNumber,
  askSimpleNumbersAddition,
  getListenAndWriteWord,
} from "./exercises.ts";

const PROJECT_NAME = `
_______  ______    _______      ___  _______  _______    _______  _______  ______    __   __  _______  _______ 
|       ||    _ |  |       |    |   ||       ||       |  |       ||       ||    _ |  |  |_|  ||   _   ||       |
|    _  ||   | ||  |   _   |    |   ||    ___||_     _|  |    ___||    ___||   | ||  |       ||  |_|  ||_     _|
|   |_| ||   |_||_ |  | |  |    |   ||   |___   |   |    |   |___ |   |___ |   |_||_ |       ||       |  |   |  
|    ___||    __  ||  |_|  | ___|   ||    ___|  |   |    |    ___||    ___||    __  ||       ||       |  |   |  
|   |    |   |  | ||       ||       ||   |___   |   |    |   |    |   |___ |   |  | || ||_|| ||   _   |  |   |  
|___|    |___|  |_||_______||_______||_______|  |___|    |___|    |_______||___|  |_||_|   |_||__| |__|  |___|  


`;

const EXERCISES: [string, string, () => Promise<void>][] = [
  [
    "SimpleAddition",
    "Addition simple",
    () => askMany([askSimpleAddition, askSimpleAddition, askSimpleAddition]),
  ],
  [
    "SimpleSubstraction",
    "Soustraction simple",
    () =>
      askMany([
        askSimpleSubstraction,
        askSimpleSubstraction,
        askSimpleSubstraction,
      ]),
  ],
  [
    "WriteNumber",
    "Ecrire les nombres",
    () =>
      askMany([
        listenAndWriteNumber,
        listenAndWriteNumber,
        listenAndWriteNumber,
      ]),
  ],
  [
    "listenAndWriteWordFrench",
    "Écoutes et écris le mot",
    () =>
      askMany(
        shuffledArray(frenchWords).map(([word, sentence]) =>
          getListenAndWriteWord(word, sentence, "fr")
        )
      ),
  ],
  [
    "listenAndWriteWordEnglish",
    "Listen and write the word",
    () =>
      askMany(
        shuffledArray(englishWords).map(([word, sentence]) =>
          getListenAndWriteWord(word, sentence, "en")
        )
      ),
  ],
  [
    "askSimpleNumbersAddition",
    "Addition simple de nombres",
    () =>
      askMany([
        askSimpleNumbersAddition,
        askSimpleNumbersAddition,
        askSimpleNumbersAddition,
      ]),
  ],
  [
    "evaluation",
    "Évaluation",
    () =>
      askMany(
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
      ),
  ],
];

const getExercisePrompt = () =>
  inquirer
    .prompt([
      {
        type: "list",
        name: "exercise",
        message: "Choisir l'exercice",
        choices: EXERCISES.map(([, label]) => label),
      },
    ])
    .then(({ exercise }) => {
      const exerciseFn = EXERCISES.find(([, label]) => exercise === label)?.[2];

      if (exerciseFn) return exerciseFn();

      throw new Error("Oups un bug c'est glissé ici");
    })
    .then(getExercisePrompt);

export { PROJECT_NAME, getExercisePrompt };
