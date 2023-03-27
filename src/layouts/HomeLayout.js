import React, { Component } from "react";
import NewTaskinput from "../components/Homelayout/NewTaskinput";
import TaskList from "./Homelayouts/TaskList";

const taskListData = ["task1", "task2", "task3"];

export default class HomeLayout extends Component {
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
        <NewTaskinput />
        <TaskList data={taskListData} />
      </div>
    );
  }
}
