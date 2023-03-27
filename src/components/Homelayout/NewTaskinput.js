import React, { Component } from 'react'

export default class NewTaskinput extends Component {
  render() {
    return (
      <div style={{display:'flex',gap:'15px'}}>
        <input type={"text"} />
        <button>Add</button>
      </div>
    );
  }
}
