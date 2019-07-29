import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  // keep state minimal
  state = {
    inputValue: '',
    // removed inputLength: 0  (keep state minimal)
    // removed chars: []
  }

  inputChangedHandler = (e) => {
    this.setState({
      inputValue: e.target.value,
      // removed chars: this.state.inputValue.split("") 
      // which gives unexpected result
      // state update may be async (batch update)
      // You should not rely on this.state & this.props for caculating next state
      // use this.setState((state, props) => ({ }));
      // state: previous state, props: props at the time the update is applied

    })
  }

  deleteCharHandler = (index) => {
    const chars = this.state.inputValue.split("");
    chars.splice(index, 1);
    const newText = chars.join(""); // process outside setState to be safe
    this.setState({
      inputValue: newText
    })
  }

  render() {

    let chars = (
      // keep state simple, process them here.
      this.state.inputValue.split("").map((v, i) => {
        return (
          <Char
            key={i} // not optimal(index is not a unique id), but no choice
            click={this.deleteCharHandler.bind(this, i)}
            char={v} />
        )
      })

    );

    return (
      <div className="App">
        <div className="header">
          <h1>Complete React Guide</h1>
          <h2>Assignment #2</h2>
        </div>
        <input
          type="text"
          className="textInput"
          value={this.state.inputValue}
          onChange={this.inputChangedHandler} />

        <Validation
          textLength={this.state.inputValue.length} />
        {chars}
      </div>
    );
  }
}

export default App;
