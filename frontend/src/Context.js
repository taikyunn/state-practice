import './FormValidation.css';
import React, { Component } from 'react';

const data = {
  title: 'Title',
  message: 'this is sample message',
};

const SampleContext = React.createContext(data);

class Context extends Component {
  render() {
    return (
      <div>
        <h1>Context</h1>
        <Title />
        <Message />
      </div>
    );
  }
}

class Title extends Component {
  static contextType = SampleContext;

  render() {
    return (
      <div>
        <h2>{this.context.title}</h2>
      </div>
    );
  }
}

class Message extends Component {
  static contextType = SampleContext;

  render() {
    return(
      <div>
        <p>{this.context.message}</p>
      </div>
    )
  }
}

export default Context;
