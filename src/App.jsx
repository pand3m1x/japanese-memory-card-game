import { GameHeader } from "./components/GameHeader.jsx";
import { Card } from "./components/Card.jsx";

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
