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
    }))
    setCards(finalCards);
    
  };

    useEffect(() => {
      initializeGame();
    },[]);


  return (
    <div className="app"> 
      <GameHeader score={3} moves={10}/>
      <div className="cards-grid">
        {cardValues.map((card)=> (
          <Card card={card} />
        ))}
      </div>
      <p>Follow Along code: Pedro Tech</p>
    </div>
  )
}

export default App
