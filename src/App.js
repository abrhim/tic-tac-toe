import React from 'react';
import './Styles/App.css';
import Grid from './Components/Grid'
import { GameProvider } from "./Contexts/Game"

function App() {
  return (
    <div className="App">
      <GameProvider>
        <Grid />
      </GameProvider>
    </div>
   
  );
}

export default App;
