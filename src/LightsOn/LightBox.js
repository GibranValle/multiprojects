import React, { PureComponent } from 'react'
import './LightBox.css'

class LightBox extends PureComponent {
  static defaultProps = {
    isLit: true
  }
  render() {
    return (
      <div onClick={this.props.event} id={this.props.index}
      className={`LightBox ${this.props.isLit ? 'lit' : ''}`}></div>
    )
  }
}

export default LightBox