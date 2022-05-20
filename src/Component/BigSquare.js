import SmallSquare from './SmallSquare';

const BigSquare = ({ squares, onClick }) => (
  <div className="board">
    {squares.map((square, i) => (
      <SmallSquare key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default BigSquare;
