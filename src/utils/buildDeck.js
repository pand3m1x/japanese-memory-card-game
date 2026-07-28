const shuffleArray = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export const buildDeck = (categoryArray, pairCount = 8) => {
  if (pairCount > categoryArray.length) {
    throw new Error(
      `Requested ${pairCount} pairs but category only has ${categoryArray.length} words.`
    );
  }

  const selected = shuffleArray(categoryArray).slice(0, pairCount);

  const deck = selected.flatMap((word) => [
    { vocabId: word.id, type: "emoji", display: word.emoji },
    { vocabId: word.id, type: "word", display: word.wordJP },
  ]);

  return shuffleArray(deck);
};