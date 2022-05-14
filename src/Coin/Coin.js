import './Coin.css'
import React, { PureComponent } from 'react'

class Coin extends PureComponent {
  static defaultProps = {
    aguila: {
      url: 'https://i.colnect.net/b/3336/607/10-Pesos.jpg',
      name: 'aguila'
    },
    sol: {
      url: 'https://i.colnect.net/b/3336/608/10-Pesos.jpg',
      name: 'sol'
    },
  }


  render() {
    return (
      <div className='Coin'>
        <div className='counter'>
          <h1>  Sol:  </h1>
          <h2>{this.props.Heads}</h2>
        </div>
        <img 
          className={this.props.rolling && 'Coin-rolling'}
          src={this.props.side === 'heads' ? this.props.sol.url : this.props.aguila.url} 
          alt={this.props.side === 'heads' ? this.props.sol.name : this.props.aguila.name} 
        ></img>
        <div className='counter'>
          <h1>Aguila:</h1>
          <h2>{this.props.Tails}</h2>
        </div>
      </div>
    )
  }
}

export default Coin