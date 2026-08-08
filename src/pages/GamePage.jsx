import { GameHeader } from "../components/GameHeader.jsx";
import { Card } from "../components/Card.jsx";
import { WinMessage } from "../components/WinMessage.jsx"


import { useGameLogic } from "../hooks/useGameLogic.js";
import { clothingCategory } from "../vocab-categories/clothingCategory.js";



function gameApp() {

const { cards, score, moves, handleCardClick, initializeGame, isGameComplete } =
  useGameLogic( clothingCategory, 8 );

  return (
    <div className="game-app"> 
      <GameHeader score={score} moves={moves} onReset={initializeGame}/>

      {isGameComplete && (<WinMessage 
                          moves={moves} 
                          onPlayAgain={initializeGame}
                          onPickNewCategory={() => console.log("category picker: not built yet")} />)}
      <div className="cards-grid">
        {cards.map((card) => (
          <Card key={card.id} card={card} onClick={handleCardClick}/>
        ))}
      </div>
    </div>
  )
}

export default gameApp
