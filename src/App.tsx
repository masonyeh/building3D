import React from 'react';
import './App.css';
import Area from './views/area';
import {run} from './Stats';

function App() {

  run();
  return (
    <div className="App">
        <Area/>
    </div>
  );
}

export default App;
