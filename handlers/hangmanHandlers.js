const { words } = require("../data/words");

// write your handlers here...
const getWordByIdHandler = (req, res) => {
  const id = req.params.id;
  console.log(id);
  const wordObj = words.filter((word) => id === word.id);
  if (wordObj) {
    res.status(200).json({
      status: 200,
      message: wordObj,
    });
  } else {
    res.status(400).json({
      status: 400,
      message: "Something is wrong with ID!",
    });
  }
};

const getRandomWordHandler = (req, res) => {
  let randomIndex = Math.floor(Math.random() * words.length);
  let word = words[randomIndex];
  console.log(word);
  res.status(200).json({
    status: 200,
    word: [word.id, word.letterCount],
  });
};

const letterGuessHandler = (req, res) => {
  const id = req.params.id;
  const letter = req.params.letter;
  const guess = words.filter((word) => id === word.id);
  const word = guess[0].word;
  const wordArray = word.split("");
  let results = [];
  wordArray.forEach((userGuess) => {
    if (letter === userGuess) {
      results.push(true);
    } else {
      results.push(false);
    }
  });
  res.status(200).json({
    status: 200,
    message: results,
  });
};

module.exports = {
  getWordByIdHandler,
  getRandomWordHandler,
  letterGuessHandler,
};
