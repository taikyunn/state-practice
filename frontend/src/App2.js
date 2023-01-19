import './App.css';
import React from 'react';

class App2 extends React.Component {
  msgStyle1 = {
    fontSize: "24px",
    color: '#900',
    margin: '20px 0px',
    padding: '5px',
    borderBottom: '2px solid #900'
  }

  msgStyle2 = {
    fontSize: "24px",
    color: 'white',
    backgroundColor: '#900',
    margin: '20px 0px',
    padding: '5px',
    borderBottom: '2px solid #900'
  }

  btn = {
    fontSize: '16px',
    padding: '10px'
  }

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      msg: 'count start!',
      flg: true,
    };
    this.doAction = this.doAction.bind(this);
  }

  doAction(){
    this.setState((state) => ({
      counter: state.counter + 1,
      msg : 'count ' + state.counter,
      flg: !state.flg
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>React</h1>
        {this.state.flg ?
          <p style={this.msgStyle1}>count: {this.state.msg}</p>
          :
          <p style={this.msgStyle2}>{this.state.msg}です。</p>
        }
        <button style={this.btn} onClick={this.doAction}>Click</button>
      </div>
    );
  }
}

export default App2;
