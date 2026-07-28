import { useState, useEffect } from "react";
import { buildDeck } from "../utils/buildDeck.js";

export const useGameLogic = (categoryArray, pairCount = 8) => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  const initializeGame = () => {
    const deck = buildDeck(categoryArray, pairCount);
    const finalCards = deck.map((cardData, index) => ({
      id: index,
      ...cardData,
      isFlipped: false,
      isMatched: false,
    }));

    setCards(finalCards);
    setIsLocked(false);
    setMoves(0);
    setScore(0);
    setFlippedCards([]);
    setMatchedCards([]);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const handleCardClick = (card) => {
    if (card.isFlipped || card.isMatched || isLocked || flippedCards.length === 2) {
      return;
    }

    const newCards = cards.map((c) =>
      c.id === card.id ? { ...c, isFlipped: true } : c
    );
    setCards(newCards);

    const newFlippedCards = [...flippedCards, card.id];
    setFlippedCards(newFlippedCards);

    if (flippedCards.length === 1) {
      setIsLocked(true);
      const firstCard = cards.find((c) => c.id === flippedCards[0]);

      if (firstCard.vocabId === card.vocabId) {
        setTimeout(() => {
          setMatchedCards((prev) => [...prev, firstCard.id, card.id]);
          setScore((prev) => prev + 1);
          setCards((prev) =>
            prev.map((c) =>
              c.id === card.id || c.id === firstCard.id
                ? { ...c, isMatched: true }
                : c
            )
          );
          setFlippedCards([]);
          setIsLocked(false);
        }, 500);
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              newFlippedCards.includes(c.id) ? { ...c, isFlipped: false } : c
            )
          );
          setFlippedCards([]);
          setIsLocked(false);
        }, 1000);
      }

      setMoves((prev) => prev + 1);
    }
  };

  const isGameComplete = cards.length > 0 && matchedCards.length === cards.length;

  return { cards, score, moves, isGameComplete, initializeGame, handleCardClick };
};