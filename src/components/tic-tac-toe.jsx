import React from 'react';
import useTicTacToe from '../Hooks/use-tic-tac-toe';

function TicTacToe() {
  const { board, handleClick, getStatusMessage, resetGame } = useTicTacToe();

  return (
    <div className="game">
      <div className='output'>
        {getStatusMessage()}
        <button className='reset-button' onClick={resetGame}>Reset Game</button>
      </div>
      <div className='board'>
        {board.map((b, index) => (
          <button
            className='cell'
            key={index}
            onClick={() => handleClick(index)}
            disabled={b !== null}
          >
            {b}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TicTacToe;


