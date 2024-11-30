function checkUserInputWord(userInput) {
  let results = [];

  for (let i = 0; i < translationOfWords.length; i++) {
    const task = translationOfWords[i];
    const userAnswer = userInput[i];

    if (userAnswer === undefined) {
      results.push({ id: task.id, word: task.word, status: "Пропущено", correctTranslation: task.correctTranslation });
    } else if (userAnswer === task.correctTranslation) {
      results.push({ id: task.id, word: task.word, status: "Правильно" });
    } else {
      results.push({ id: task.id, word: task.word, status: "Неправильно", userAnswer, correctTranslation: task.correctTranslation });
    }
  }

  return results;
}

function checkUserInputPhrases(userInput) {
  let results = [];

  for (let i = 0; i <translationOfPhrases.length; i++) {
    const task = translationOfPhrases[i];
    const userAnswer = userInput[i];

    if (userAnswer === undefined) {
      results.push({ id: task.id, phrases: task.phrases, status: "Пропущено", correctTranslation: task.correctTranslation });
    } else if (userAnswer === task.correctTranslation) {
      results.push({ id: task.id, phrases: task.phrases, status: "Правильно" });
    } else {
      results.push({ id: task.id, phrases: task.phrases, status: "Неправильно", userAnswer, correctTranslation: task.correctTranslation });
    }
  }

  return results;
}

function checkUserInputSentences(userInput) {
  let results = [];

  for (let i = 0; i <translationOfSentences.length; i++) {
    const task = translationOfSentences[i];
    const userAnswer = userInput[i];

    if (userAnswer === undefined) {
      results.push({ id: task.id, sentences: task.sentences, status: "Пропущено", correctTranslation: task.correctTranslation });
    } else if (userAnswer === task.correctTranslation) {
      results.push({ id: task.id, phrases: task.phrases, status: "Правильно" });
    } else {
      results.push({ id: task.id, sentences: task.sentences, status: "Неправильно", userAnswer, correctTranslation: task.correctTranslation });
    }
  }

  return results;
}
