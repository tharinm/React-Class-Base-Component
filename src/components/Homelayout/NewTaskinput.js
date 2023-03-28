import React, { Component } from "react";

export default class NewTaskinput extends Component {
  state = {
    inputValue: "",
  };

  handleInputValueChange = (e) => {
    console.log(e.target.value);
    this.setState({
      inputValue: e.target.value
     })
  };

  render() {
    const { addNewTask } = this.props;
    return (
      <div style={{ display: "flex", gap: "15px" }}>
        <input type={"text"} onChange={this.handleInputValueChange} />
        <button onClick={() => addNewTask(this.state.inputValue)}>Add</button>
      </div>
    );
  }
}
