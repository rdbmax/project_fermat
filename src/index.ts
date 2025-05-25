import { PROJECT_NAME, getExercisePrompt } from "./main.ts";

console.log(PROJECT_NAME);

getExercisePrompt().then((exercise) => {
  console.log(exercise);
});
