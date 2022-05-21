function SmallSquare({ value, onClick, colored }) {
  let style = value ? `squares ${value}` : 'squares';

  if (colored) {
    style += ' colored';
  }
  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
}

export default SmallSquare;
