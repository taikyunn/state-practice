import './App.css';
import React from 'react';

class App1 extends React.Component {
  msgStyle = {
    fontSize: "24px",
    color: '#900',
    margin: '20px 0px',
    padding: '5px',
    borderBottom: '2px solid #900'
  }

  btn = {
    fontSize: '20px',
    padding: '0px 10px'
  }

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      msg: 'count start!',
    };
    // コンポーネントクラスのdoActionをバインドしイベントによって実行できるようになる
    this.doAction = this.doAction.bind(this);
  }

  doAction(){
    this.setState((state) => ({
      counter: state.counter + 1,
      msg : 'count ' + state.counter
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>React</h1>
        <p style={this.msgStyle}>{this.state.msg}</p>
        <button style={this.btn} onClick={this.doAction}>Click</button>
      </div>
    );
  }
}

export default App1;
