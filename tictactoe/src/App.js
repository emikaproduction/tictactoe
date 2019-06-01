import React from 'react';
import Board from './components/Board';
import SingleBox from './components/Board/SingleBox';
import Status from './components/Status';
import './lib/styles/App.scss';

function App() {
  return (
    <div className="App">
      <Status />
      <Board />
      <SingleBox />
    </div>
  );
}

export default App;
