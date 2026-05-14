import { GameHeader } from "./components/GameHeader.jsx";
import { Card } from "./components/Card.jsx";

import { useState,useEffect } from "react";

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

  const initializeGame = () => {
    // SHUFFLE THE CARDS

    console.log(cardValues)

    const finalCards = cardValues.map(( value, index ) => ({
      id: index,
      value, 
      isFlipped: false,
      isMatched: false,
    }));

    setCards(finalCards);
    
  };

    useEffect(() => {
      initializeGame();
    }, []);

  const handleCardClick = (card) => {
    // Don't allow clicking if card is already flipped, matched

    if(card.isFlipped || card.isMatched) {
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
    setCards(newCards)
  };

  return (
    <div className="app"> 
      <GameHeader score={3} moves={10}/>
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
