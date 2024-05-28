import React from 'react';

const GameEndPopup = ({ result, word, points, onRestart }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>GAME OVER</h2>
        <p className={result === 'win' ? 'result win' : 'result lose'}>
          {result === 'win' ? 'YOU WON!' : 'YOU LOST!'}
        </p>
        <p>
          THE CORRECT WORD WAS: <span className="word">{word}</span>
        </p>
        <p>
          THE POINTS YOU GOT: <span className="points">{points}</span>
        </p>
        <button className="rematch-button" onClick={onRestart}>Home</button>
      </div>
    </div>
  );
};

export default GameEndPopup;
