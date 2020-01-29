import React from 'react';
import './Styles/App.css';
import Grid from './Components/Grid'
import AnnouncementBoard from './Components/AnnouncementBoard'
import { GameProvider } from "./Contexts/Game"
import Scoreboard from './Components/Scoreboard';

function App() {
  return (
    <div className="App">
      <GameProvider>
        <Scoreboard />
        <Grid />
        <AnnouncementBoard />
      </GameProvider>
    </div>
   
  );
}

export default App;
