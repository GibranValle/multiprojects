import './App.css'

import RollDice from "./Dice/RollDice";
import CoinFlipper from './Coin/CoinFlipper';
import Hangman from './Hangman/Hangman';
import LightsOn from './LightsOn/LightsOn';

function App() {
  return (
    <div className="App">
      <div className="componentBox">
      <h1 className='mainTitle'>Component showdown</h1>
        <RollDice />
        <CoinFlipper />
        <Hangman />
        <LightsOn />
      </div>
    </div>
  );
}

export default App;