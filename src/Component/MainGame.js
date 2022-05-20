import { useState } from 'react';
import Winner from '../Winner/Winner';
import BigSquare from './BigSquare';

function MainGame() {
  // States
  const [item, setItem] = useState([Array(9).fill(null)]);
  const [step, setStep] = useState(0);
  const [xIsNextItem, setXIsNextItem] = useState(true);
  const [draw, setDraw] = useState(false);

  // Detecting a winner
  const winner = Winner(item[step]);

  // Determine X or O
  const X_or_O = xIsNextItem ? 'X' : 'O';

  const restart = () => {
    setItem([Array(9).fill(null)]);
    setStep(0);
    setXIsNextItem(true);
    setDraw(false);
  };

  // Function to handle the click
  const handleClick = (i) => {
    const itemPoint = item.slice(0, step + 1);
    const current = itemPoint[step];
    const squares = [...current];
    if (step === 8 && !winner) {
      setDraw(true);
    }
    // Return if won
    if (winner || squares[i]) return;

    // Select the square
    squares[i] = X_or_O;

    setItem([...itemPoint, squares]);
    setStep(itemPoint.length);
    setXIsNextItem(!xIsNextItem);
  };

  return (
    <div className="container">
      <BigSquare squares={item[step]} onClick={handleClick} />
      {(winner || draw) && <h1>The Game has finished</h1>}
      <h3>{!winner && !draw && 'Next player: ' + X_or_O}</h3>

      <h3>{winner && 'Winner: ' + winner}</h3>

      <h3>{draw && 'Draw'}</h3>
      {winner || draw ? (
        <button className="win-draw" onClick={restart}>
          Restart
        </button>
      ) : (
        ''
      )}
    </div>
  );
}

export default MainGame;
