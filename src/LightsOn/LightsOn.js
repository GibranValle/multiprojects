import React, { PureComponent } from 'react'
import LightBox from './LightBox'

import './LightsOn.css'

class LightsOn extends PureComponent {
  static defaultProps = {
    size: 4,
    odds: 0.5,
  }

  constructor(props) {
    super(props)
    this.state = {
      board: Array.from({ length: this.props.size })
        .map(row => Array.from({ length: this.props.size })
          .map(cell => Math.random() < this.props.odds)),
      hasWon: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    const [row, cell] = e.target.id.split('-')
    this.updateBoard(parseInt(row), parseInt(cell))
  }

  updateBoard(ri, ci) {
    const { size } = this.props
    const { board } = this.state
    let newBoard = board.map(row => row.map(Number))
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (r === ri && c === ci) {
          newBoard[r][c] = !board[r][c] // center
          if (r - 1 >= 0) newBoard[r - 1][c] = !board[r - 1][c] // left
          if (c - 1 >= 0) newBoard[r][c - 1] = !board[r][c - 1] // up
          if (c + 1 < size) newBoard[r][c + 1] = !board[r][c + 1] // down
          if (r + 1 < size) newBoard[r + 1][c] = !board[r + 1][c] // right
        }
      }
    }
    this.setState(st => ({
      board: newBoard,
      hasWon: newBoard.every(row => row.every(cell => cell))
    }))
  }

  renderBoard() {
    return this.state.board.map(
      (row, ri) => <tr key={ri}>{(row.map(
        (cell, ci) => (<td key={`${ri}-${ci}`}>{
                <LightBox event={this.handleClick} isLit={cell} index={`${ri}-${ci}`} key={`${ri}-${ci}`}/>
            }</td>)
      ))}</tr>
    )
  }

  render() {
    const table =
      <table>
      <tbody>
          {this.renderBoard()}
      </tbody>
    </table>
    const alert = <div className='winner'>YOU WON</div>
    return (
      <div className='component LightsOn'>
            <h1>Lights On</h1>
            {this.state.hasWon ? alert : table}
        </div>
    )
  }
}

export default LightsOn