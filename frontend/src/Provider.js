import './FormValidation.css';
import React, { Component } from 'react';

const data = {
  title: 'Title',
  message: 'this is sample message',
};

const SampleContext = React.createContext(data);

class Provider extends Component {
  newData = {
    title: '新しいタイトル',
    message: 'これは新しいタイトルです'
  };
  render() {
    return (
      <div>
        <h1>Context</h1>
        <Title />
        <Message />
        <SampleContext.Provider value={this.newData}>
          <Title />
          <Message />
        </SampleContext.Provider>
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

export default Provider;
