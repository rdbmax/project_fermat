// TODO add all the words to learn form school

type Word = string;
type Sentence = string;

type WordsWithSentence = [Word, Sentence][];

const englishWords: WordsWithSentence = [
  ["bug", "This is a big bug !"],
  ["pig", "I see a pig in the farm."],
  ["car", "The car is on the road."],
  ["dog", "The dog is in the car."],
  ["hen", "The hen is in the henhouse."],
  ["mug", "The mug is in the sink."],
  ["net", "I have a nice net."],
  ["bin", "The bin is full."],
  ["rat", "There is a rat on the sidewalk."],
  ["box", "Put it in the box please."],
];

const frenchWords: WordsWithSentence = [
  ["voici", "Voici un ami."],
  ["leurs", "J'ai vu leurs vêtements."],
  ["pour", "On se retrouve pour manger."],
  ["ici", "Je suis ici."],
  ["bien", "J'aime bien jouer."],
];

export { englishWords, frenchWords };
