import { GameHeader } from "./components/GameHeader.jsx";
import { Card } from "./components/Card.jsx";
import { WinMessage } from "./components/WinMessage.jsx"


import { useGameLogic } from "./hooks/useGameLogic.js";
import { clothingCategory } from "./vocab-categories/clothingCategory.js";



function App() {

const { cards, score, moves, handleCardClick, initializeGame, isGameComplete } =
  useGameLogic( clothingCategory, 8 );

  return (
    <div className="app"> 
      <GameHeader score={score} moves={moves} onReset={initializeGame}/>

      {isGameComplete && <WinMessage moves={moves} />}
      <div className="cards-grid">
        {cards.map((card) => (
          <Card key={card.id} card={card} onClick={handleCardClick}/>
        ))}
      </div>
      <p>Follow Along code: Pedro Tech</p>
    </div>
  )
}

export default App
