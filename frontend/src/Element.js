import './App.css';
import React, { Component } from 'react';

class Element extends Component {
  input = ''

  msgStyle = {
    fontSize: "20pt",
    color: '#900',
    margin: "20px, 0px",
    padding: '5px'
  };

  constructor(props) {
    super(props);
    this.state = {
      message: 'type your name'
    };
    this.doChange = this.doChange.bind(this);
    this.doSubmit = this.doSubmit.bind(this);
  }

  doChange(e) {
    this.input = e.target.value;
  }

  doSubmit(e) {
    this.setState({
      message: 'Hello, ' + this.input + '!!'
    });
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>React</h1>
        <Message title="Children!">
          これはコンポーネント内のコンテンツです。
          まるでテキストを分割しリストにして表示します。
          改行はありません。
        </Message>
      </div>
    );
  }
}

class Message extends Component {
  li = {
    fontSize: '16pt',
    color: '#06',
    margin: '0px',
    padding: '0px'
  }

  render() {
    let content = this.props.children;
    let arr = content.split('。');
    let arr2 = [];
    for (let i = 0; i <= arr.length; i++) {
      arr2.push(arr[i]);
    }

    let list = arr2.map((value, key) => (
      <li style={this.li} key={key}>{value}.</li>
    ));
    return (
      <div>
        <h2>{this.props.title}</h2>
        <ol>{list}</ol>
      </div>
    )
  }
}

export default Element;
