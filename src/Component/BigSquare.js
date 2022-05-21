import SmallSquare from './SmallSquare';

const BigSquare = ({ squares, onClick, colored }) => (
  <div className="board">
    {squares.map((square, i) => {
      return (
        <SmallSquare
          key={i}
          value={square}
          colored={colored.includes(i)}
          onClick={() => onClick(i)}
        />
      );
    })}
  </div>
);

export default BigSquare;
