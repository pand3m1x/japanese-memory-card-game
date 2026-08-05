export const WinMessage = ({ moves, onPlayAgain, onPickNewCategory }) => {

  const handlePlayAgain = () => {
    // Logic to reset the game and play again
    onPlayAgain?.();
  };

  const handlePickNewCategory = () => {
    // Logic to pick a new category
    onPickNewCategory?.();
  };

  return (
    <div className="win-message">
      <h2>Congrats!</h2>
      <p>You completed the game in {moves} moves!</p>
      <div id="play-reset-buttons">
        <button onClick={handlePlayAgain}>Play Again?</button>
        <button onClick={handlePickNewCategory}>Pick New Category?</button>
      </div>
    </div>
  );
};