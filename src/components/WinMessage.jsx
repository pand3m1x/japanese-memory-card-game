export const WinMessage = ({ moves }) => {

  return (
    <div className="win-message">
      <h2>Congrats!</h2>
      <p>You completed the game in {moves} moves!</p>
      <div>
        <button>Play Again?</button>
        <button>Pick New Category?</button>
      </div>
    </div>
  );
};