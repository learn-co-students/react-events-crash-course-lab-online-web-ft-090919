import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    /* TODO: This method should capture the `x` and `y` coordinates of the mouse
     * from the event and use them to invoke the `drawChromeBoiAtCoords`
     * function that has been provided and is already imported
     * (`drawChromeBoiAtCoords` expects two arguments, an x and a y coordinate)
     */

     // Call on fn to draw from coords, use MouseEvent's 'clientX' and 'clientY' methods to read coords
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }
  
  /* TODO: Create an event handler which, when fired, invokes the provided
   * `toggleCycling` function with no arguments. Don't forget the click event
   * listener that should fire it!
   */

  // Check to see if either 'a' or 's' key was pressed. Resize page depending on key
  // Use 'resize' fn from 'canvasHelpers
  handleKeyDown = (event) => {
    if (event.key === 'a') { resize('+') }
    if (event.key === 's') { resize('-') }
  }

   
  /* TODO: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-' 
   */
  
  render() {
    return (
      <canvas 
        // set element attributes of 'onMouseMove', 'onKeyDown', etc
        // listener to handle mouse move event
        onMouseMove={this.handleMouseMove}
        // listener to handle click event
        onClick={ () => {toggleCycling()}}
        // listener to handle keydown event
        onKeyDown={this.handleKeyDown}

        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
