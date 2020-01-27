import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
    /* TODO: This method should capture the `x` and `y` coordinates of the mouse
     * from the event and use them to invoke the `drawChromeBoiAtCoords`
     * function that has been provided and is already imported
     * (`drawChromeBoiAtCoords` expects two arguments, an x and a y coordinate)
     */
    let x = event.clientX
    let y = event.clientY
    drawChromeBoiAtCoords(x, y)
  }

handleKeyDown(e) {
  if (e.key === 'a') {
    resize('+')
  } else if (e.key === 's') {
    resize('-')
  }
}

  render() {
    return (
      <canvas
        onClick={toggleCycling}
        onMouseMove={this.handleMouseMove}
        onKeyDown={this.handleKeyDown}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
