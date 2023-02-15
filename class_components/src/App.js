import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";

import Comp from "./components/Comp";

class App extends React.Component {


  state = {
    name: 'Shakya',
    age: 22,
    count: 0,
  }

  // increment = () =>{
  //   this.setState({count:this.state.count+1});
  // }
  // this below function also works same using prevState

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <h1>Class Components</h1>
        <Comp name={'Arun'} />
        <h1>{this.state.name}</h1>
        <h1>{this.state.age}</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Increment </button>
      </div>
    );
  }
}

export default App;
