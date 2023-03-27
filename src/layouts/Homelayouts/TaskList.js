import React, { Component } from 'react'
import SingleTask from '../../components/Tasklist/SingleTask'

export default class TaskList extends Component {
  render() {
    const {data}=this.props
    return (
      <div>
        {data.map((val, key) => {
          return <SingleTask key={key} title={ val} />;
        })}
        
      </div>
    )
  }
}
