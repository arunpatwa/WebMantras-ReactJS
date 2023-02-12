import './App.css';
import React, { useState } from 'react';
import ComponentA from './components/ComponentA';

function App() {

  const [data,setData]=useState("WebMantra")
  return (
    <div className="App">
      <ComponentA data={data}/>
    </div>
  );
}

export default App;
