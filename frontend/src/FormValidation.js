import './FormValidation.css';
import React, { Component } from 'react';

class FormValidation extends Component {
  input = ''

  msgStyle = {
    fontSize: "20pt",
    color: '#900',
    margin: "20px, 0px",
    padding: '5px'
  };

  inputStyle = {
    fontSize: "12pt",
    padding: "5pt"
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
        <h2>{this.state.message}</h2>
        <form onSubmit={this.doSubmit}>
          <label>
            <span style={this.inputStyle}></span>Message:
            <input type="text" style={this.inputStyle} onChange={this.doChange} required pattern='[A-Za-z _,.]+' />
          </label>
          <input type="submit" style={this.inputStyle} value="click" />
        </form>
      </div>
    );
  }
}

export default FormValidation;
