import React, { Component } from 'react'

export default class SingleTask extends Component {
  render() {
    const { title } = this.props;
    return (

      <div>
        <p>{title}</p>
      </div>
    )
  }
}
