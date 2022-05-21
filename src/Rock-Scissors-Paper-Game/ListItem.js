import { FaHandScissors, FaHandRock, FaHandPaper } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import Item from './Item';

function ListItem() {
  const [computerItem, setComputerItem] = useState(null);
  const [userItem, setUserItem] = useState(null);
  const [winner, setWinner] = useState(null);
  const [userWin, setUserWin] = useState(0);
  const [computerWin, setComputerWin] = useState(0);
  const [draw, setDraw] = useState(0);

  useEffect(() => {
    detectingWin();
  }, [userItem, computerItem]);

  const items = {
    rock: <FaHandRock className="icon" />,
    scissors: <FaHandScissors className="icon" />,
    paper: <FaHandPaper className="icon" />,
  };

  const detectingWin = () => {
    switch (userItem + computerItem) {
      case 'rockpaper':
      case 'paperscissors':
      case 'scissorsrock':
        setComputerWin((prev) => prev + 1);
        setWinner('You Lose!');
        break;
      case 'paperrock':
      case 'scissorspaper':
      case 'rockscissors':
        setUserWin((prev) => prev + 1);
        setWinner('You win!');
        break;
      case 'rockrock':
      case 'paperpaper':
      case 'scissorsscissors':
        setWinner('Draw!');
        setDraw((prev) => prev + 1);
        break;
      default:
        break;
    }
  };

  function randomGenerator() {
    const random = ['rock', 'scissors', 'paper'];
    const number = Math.floor(Math.random() * 3);

    return random[number];
  }

  const handleClick = (value) => {
    const r = randomGenerator();

    setUserItem(value);

    setComputerItem(r);
  };

  const restart = () => {
    setComputerItem(null);
    setUserItem(null);
    setWinner(null);
    setDraw(0);
    setUserWin(0);
    setComputerWin(0);
  };

  return (
    <div className="container-second">
      <div className="items-container">
        <button id="rock" onClick={() => handleClick('rock')}>
          <FaHandRock className="icon" />
        </button>
        <button id="scissors" onClick={() => handleClick('scissors')}>
          <FaHandScissors className="icon" />
        </button>
        <button id="paper" onClick={() => handleClick('paper')}>
          <FaHandPaper className="icon" />
        </button>
      </div>

      <div className="choosen-container small-container">
        {userItem && <div> Your choice: {items[userItem]} </div>}
        {computerItem && <div>Computer's choice: {items[computerItem]} </div>}
      </div>

      <div className="choosen-container">{winner && <div>{winner}</div>}</div>

      {(userWin || computerWin || draw) && (
        <div className="choosen-container small-container">
          {<div> Your wins: {userWin} </div>}
          {<div> Draws: {draw} </div>}
          {<div> Computer's wins: {computerWin} </div>}
        </div>
      )}

      <button className="btn-restart" onClick={restart}>
        Restart
      </button>

      <Link className="link" to={'/'}>
        First Game
      </Link>
    </div>
  );
}

export default ListItem;
