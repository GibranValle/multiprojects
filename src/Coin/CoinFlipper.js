import React, { PureComponent } from 'react'
import Coin from './Coin'

class CoinFlipper extends PureComponent {
  static defaultProps = {
    sides: ['heads', 'tails']
  }
  constructor(props) {
    super(props)
    this.state = {
      side: 'heads',
      Heads: 0,
      Tails: 0,
      rolling: false
    }
    this.flip = this.flip.bind(this)
  }
  flip() {
    this.setState({ rolling: true })
    const index = Math.floor(Math.random() * this.props.sides.length)
    let Heads = this.state.Heads
    let Tails = this.state.Tails
    if (index === 0) Heads += 1
    else Tails += 1
    setTimeout(() => {
      this.setState({ side: this.props.sides[index], Heads, Tails, rolling: false })
    }, 500);
  }
  render() {
    return (
      <div className='component'>
        <Coin side={this.state.side} Heads={this.state.Heads} 
        Tails={this.state.Tails} rolling={this.state.rolling}/>
        <button className={this.state.rolling ? 'button-rolling' : 'button-static'}
        onClick={this.flip}>{!this.state.rolling ? 'Click to Flip' : 'Flipping...'}</button>
      </div>
    )
  }
}

export default CoinFlipper