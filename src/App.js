import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'
import Scoreboard from './components/Scoreboard'

function App() {
  return (
    <div className="App">
      <Title content="This is some content" />
      <Scoreboard />
    </div>
  );
}

export default App;
