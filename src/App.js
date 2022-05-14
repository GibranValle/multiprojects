import './App.css'

import RollDice from "./Dice/RollDice";
import CoinFlipper from './Coin/CoinFlipper';


function App() {
  return (
    <div className="App">
      <div className="componentBox">
      <h1 className='mainTitle'>Component showdown</h1>
        <RollDice />
        <CoinFlipper />
      </div>
    </div>
  );
}

export default App;