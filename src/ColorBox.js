import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    console.log(this)
    return (
      <div className="color-box" style={{opacity: null /*replace null with the value*/}}>
        {/* your conditional code here! */}
      </div>
    )
  }

}

