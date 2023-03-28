import React, { Component } from "react";
import NewTaskinput from "../components/Homelayout/NewTaskinput";
import TaskList from "./Homelayouts/TaskList";

//const taskListData = ["task1", "task2", "task3"];

export default class HomeLayout extends Component {
  // state = {
  // taskListData: [...taskListData],
  // };

  constructor() {
     super();
     this.state = {
       taskListData: ['Task1', 'Task2', 'Task3'],
     };
   }

   addNewTask =(newTask) => {
     this.setState({
       taskListData: [newTask, ...this.state.taskListData],
     });
   };

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
          flexDirection: "column",
        }}
      >
        <NewTaskinput addNewTask={this.addNewTask} />
        {/* <button onClick={this.addNewTask.bind()}> Add New task</button> */}
        <TaskList data={this.state.taskListData} />
      </div>
    );
  }
}
