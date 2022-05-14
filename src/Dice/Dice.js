import React, { PureComponent } from 'react'
import './Dice.css'

class Dice extends PureComponent {
  render() {
    return <i className={`fa-solid fa-dice-${this.props.face} Dice ${this.props.rolling && 'Dice-rolling'}`}></i>
  }
}

export default Dice