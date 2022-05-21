import { Route, BrowserRouter, Routes } from 'react-router-dom';
import MainGame from './Component/MainGame';
import ListItem from './Rock-Scissors-Paper-Game/ListItem';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainGame />} />
        <Route path="/second-game" element={<ListItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
