import React, { PureComponent } from 'react'
import './Hangman.css'

class Hangman extends PureComponent {
  static defaultProps = {
    images: [
      './images/1.png', './images/2.png', './images/3.png',
      './images/4.png', './images/5.png', './images/6.png',
      './images/7.png'
    ],
    words: [
      'abuela', 'blanco', 'cabeza', 'densas', 'echate', 'firmes', 'herida', 'irrita', 'jarosa', 'kansas', 'llenas', 'mixtas',
      'nevosa', 'oxidar', 'plasma', 'quesos', 'raspes', 'saltas', 'techos', 'unamos', 'vellos', 'yeguas', 'zorras',
    ],
    keyboard: 'abcdefghijklmnopqrstuvwxyz',
    fixedValues: {
      tries: 0,
      guessed: new Set(),
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      ...this.props.fixedValues,
      answer: this.props.words[Math.floor(Math.random() * this.props.words.length)],
      maxTries: this.props.images.length - 1
    }
    this.state.secret = this.state.answer.split('').map(l => '_').join('')
    this.handleClick = this.handleClick.bind(this)
  }

  restart() {
    // set state updates previous key pair object (answer) before calling st.answer 
    this.setState(st => ({
      tries: 0,
      guessed: new Set(),
      answer: this.props.words[Math.floor(Math.random() * this.props.words.length)],
      secret: st.answer.split('').map(l => '_').join('')
    }))
  }


  try (l) {
    if (this.state.answer.includes(l) && !this.state.guessed.has(l)) {
      this.setState(st => ({
        guessed: st.guessed.add(l),
        secret: st.answer.split('').map(lt => {
          if (st.guessed.has(lt)) return lt
          return '_'
        })
      }))
    }
    else {
      this.setState(st => ({ tries: st.tries + 1 }))
    }
  }


  handleClick(e) {
    if (e.target.className === 'key') this.try(e.target.textContent)
    else if (e.target.className === 'button-static') this.restart()
  }


  renderKeyboard() {
    return this.props.keyboard.split('').map(key =>
      <div 
      className={`key${this.state.guessed.has(key) ? ' disabled' : ''}`}
      onClick={this.handleClick}
      key={key}>{key}
      </div>)
  }

  render() {
    let message, keyboard, secret, messageClass
    if (this.state.tries >= this.state.maxTries) {
      message = 'PERDISTE'
      messageClass = 'loser'
      keyboard = ''
      secret = this.state.answer
    }
    else {
      message = ''
      messageClass = ''
      keyboard = this.renderKeyboard()
      secret = this.state.secret

      if (!secret.includes('_')) {
        message = 'GANASTE!'
        messageClass = 'winner'
        keyboard = ''
      }
    }

    return (
      <div className='component Hangman'>
        <h1>Ahorcado</h1>   
        <div className={messageClass}>{message}</div>
        <h3>Errores: {this.state.tries}</h3>
        <img alt={this.state.tries} src={require(`${this.props.images[this.state.tries]}`)}/>
        <div className='secret'>{secret}</div>
        <div className='keyboard'>{keyboard}</div>
        <button onClick={this.handleClick} className='button-static'>Reiniciar</button>
      </div>
    )
  }
}

export default Hangman