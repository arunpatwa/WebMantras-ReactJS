import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMod>
    <App />
  // </React.StrictMod>

  //when i removed it then useEffect only working once time
);


