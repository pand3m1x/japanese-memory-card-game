import { GameHeader } from "./components/GameHeader.jsx";
import { Card } from "./components/Card.jsx";
import { WinMessage } from "./components/WinMessage.jsx"


import { useGameLogic } from "./hooks/useGameLogic.js";

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

const { cards, score, moves, handleCardClick, initializeGame, isGameComplete} = useGameLogic(cardValues)

  return (
    <div className="app"> 
      <GameHeader score={score} moves={moves} onReset={initializeGame}/>

      {isGameComplete && <WinMessage moves={moves} />}
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
