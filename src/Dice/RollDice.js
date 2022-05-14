import React, { PureComponent } from 'react'
import Dice from './Dice'

class RollDice extends PureComponent {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six']
  }
  constructor(props) {
    super(props)
    this.state = {
      face1: 'one',
      face2: 'two',
      rolling: false,

    }
    this.roll = this.roll.bind(this)
  }
  roll() {
    this.setState({ rolling: true })
    const num1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
    const num2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
    setTimeout(() => {
      this.setState({ rolling: false })
      this.setState({ face1: num1, face2: num2 })
    }, 500)
  }
  render() {
    return <div className='component'>
                <div className='Dice-box'>
                    <Dice face={this.state.face1} rolling={this.state.rolling}/>
                    <Dice face={this.state.face2} rolling={this.state.rolling}/>
                </div>
            <button className={this.state.rolling ? 'button-rolling': 'button-static'} 
            disabled={this.state.rolling}
            onClick={this.roll}>{this.state.rolling ? 'Rolling...' : 'Click to roll'}</button>
        </div>
  }
}

export default RollDice