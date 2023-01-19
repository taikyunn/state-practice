import './FormValidation.css';
import React, { Component } from 'react';

const data = {
  title: 'Title',
  message: 'this is sample message',
};

const SampleContext = React.createContext(data);

var theme = {
  light: {
    backgroundColor: '#eef',
    color: '#006',
    padding: '10px'
  },
  dark : {
    backgroundColor: '#006',
    color: '#eef',
    padding: '10px'
  }
};

const ThemeContext = React.createContext(theme.dark);

class ContextTheme extends Component {
  static contextType = ThemeContext;
  render() {
    return (
      <div style={this.context}>
        <Title value="Context page" />
        <Message value="This is context sample" />
        <Message value="これはテーマのサンプルです" />
      </div>
    );
  }
}

class Title extends Component {
  static contextType = ThemeContext;

  render() {
    return (
      <div>
        <h2 style={this.context}>{this.props.value}</h2>
      </div>
    );
  }
}

class Message extends Component {
  static contextType = ThemeContext;

  render() {
    return(
      <div>
        <p style={this.context}>{this.props.value}</p>
      </div>
    )
  }
}

export default ContextTheme;
