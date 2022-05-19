import './App.css'

import RollDice from "./Dice/RollDice";
import CoinFlipper from './Coin/CoinFlipper';
import Hangman from './Hangman/Hangman';
import LightsOn from './LightsOn/LightsOn';
import TodoList from './TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <div className="componentBox">
      <h1 className='mainTitle'>Component showdown</h1>
        <RollDice />
        <CoinFlipper />
        <Hangman />
        <LightsOn />
        <TodoList />
      </div>
    </div>
  );
}

export default App;