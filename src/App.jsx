import { GameHeader } from "./components/GameHeader.jsx";
import { Card } from "./components/Card.jsx";
import { WinMessage } from "./components/WinMessage.jsx"

import { useState, useEffect } from "react";

const cardValues = [
  "👓",
  "👜",
  "👙",
  "👚",
  "🥾",
  "👠",
  "👑",
  "🧥",
  "👓",
  "👜",
  "👙",
  "👚",
  "🥾",
  "👠",
  "👑",
  "🧥"
]
function App() {

  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  const initializeGame = () => {
    // SHUFFLE THE CARDS

    const shuffledArray = shuffleArray(cardValues);
    
    const finalCards = shuffledArray.map(( value, index ) => ({
      id: index,
      value, 
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
    // Don't allow clicking if card is already flipped, matched

    if(card.isFlipped || card.isMatched || isLocked || flippedCards.length === 2) {
      return;
    }
    console.log("Card clicked: ", card);

    // update card flipped state
    const newCards = cards.map((c) => {
      if (c.id === card.id) {
        return {...c, isFlipped: true };
      } else {
        return c;
      }
    });

    setCards(newCards);

    const newFlippedCards = [...flippedCards, card.id]
    setFlippedCards(newFlippedCards);

    //check for match if two cards are flipped
    if (flippedCards.length === 1) {
      setIsLocked(true);
      const firstCard = cards[flippedCards[0]]
      
      if (firstCard.value === card.value) {
        setTimeout(() => {
        setMatchedCards((prev) => [ ...prev, firstCard.id, card.id ]);
        setScore((prev) => prev + 1);
        setCards((prev) =>
          prev.map((c) => {
          if (c.id === card.id || c.id === firstCard.id ) {
            return {...c, isMatched: true };
          } else {
            return c;
          }
        })
       
      );

        setFlippedCards([]);
        setIsLocked(false);
      }, 500 );
      } else {

        //flip back card 1, card 2

        setTimeout(() => {
          const flippedBackCard = newCards.map((c) => {
            if (newFlippedCards.includes( c.id )) {
              return {...c,isFlipped: false };
            } else {
              return c;
            }
          });

          setCards(flippedBackCard);

          setFlippedCards([]);
          setIsLocked(false);
        }, 1000);
      }

      setMoves((prev) => prev + 1);
    }
  };

  return (
    <div className="app"> 
      <GameHeader score={score} moves={moves} onReset={initializeGame}/>

      <WinMessage moves={moves} />
      <div className="cards-grid">
        {cards.map((card)=> (
          <Card card={card} onClick={handleCardClick}/>
        ))}
      </div>
      <p>Follow Along code: Pedro Tech</p>
    </div>
  )
}

export default App
