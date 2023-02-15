import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import { useSelector } from "react-redux";
// useSelector is used to get the current state
import { useDispatch } from "react-redux";
//useDispatch is used to update the state

import { Increment,Decrement } from "./states/reducers/index";


function App() {
  const curState = useSelector((state) => state.number);
  const dispatch=useDispatch();

  return (
    <div>
      <Header />
      <div style={{ width: "100%", display: "flex", alignItems: 'center' , flexDirection:'column'}}>
          {curState}
          <button onClick={()=> dispatch(Increment(5))}>Increment</button>
        <button onClick={()=> dispatch(Decrement(10))}>Decrement</button>
        </div>
    </div>
  );
}

export default App;
