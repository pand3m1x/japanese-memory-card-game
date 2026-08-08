import { GameHeader } from "../components/GameHeader.jsx";
import { Card } from "../components/Card.jsx";
import { WinMessage } from "../components/WinMessage.jsx"


import { useGameLogic } from "../hooks/useGameLogic.js";
import { categoryRegistry } from "../vocab-categories/categoryRegistry.js";



export const GamePage = ({ categoryKey, onPickNewCategory }) => {
 const categoryData = categoryRegistry[categoryKey].data;

  const { cards, score, moves, handleCardClick, initializeGame, isGameComplete } =
    useGameLogic( categoryData, 8 );

  return (
    <div className="app">
      <GameHeader score={score} moves={moves} onReset={initializeGame} />

      {isGameComplete && (
        <WinMessage
          moves={moves}
          onPlayAgain={initializeGame}
          onPickNewCategory={onPickNewCategory}
        />
      )}

      <div className="cards-grid">
        {cards.map((card) => (
          <Card key={card.id} card={card} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  )
}

