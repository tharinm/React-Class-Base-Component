import React, { Component } from "react";

export default class NewTaskinput extends Component {
  state = {
    inputValue: "",
    isError: false,
  };

  handleInputValueChange = (e) => {
    // console.log(e.target.value);
    const { value } = e.target;
    if (value.trim) {
      this.setState({
        isError: false,
      });
    } else {
      // this.setState({
      // isError: true,
      // });
    }
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleAddNewTask = () => {
    const { inputValue } = this.state;
    if (inputValue.trim()) {
      this.props.addNewTask(inputValue);
      this.setState(
        {
          inputValue: ''
        }
      )
    } else {
     // console.log("second");
      this.setState({
        isError: true,
      });
    }
  };

  render() {
    // const { addNewTask } = this.props;
    return (
      <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
        <input type={"text"} onChange={this.handleInputValueChange} value={this.state.inputValue} />
        <button onClick={this.handleAddNewTask}>Add</button>
        <br></br>
        {this.state.isError ? (
          <p style={{ fontSize: "15px", color: "red" }}>
            Please Enter a valid task
          </p>
        ) : (
          ""
        )}
      </div>
    );
  }
}
