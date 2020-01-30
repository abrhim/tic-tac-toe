import React from 'react';
import './Styles/App.css';
import Grid from './Components/Grid'
import AnnouncementBoard from './Components/AnnouncementBoard'
import { GameProvider } from "./Contexts/Game"
import Scoreboard from './Components/Scoreboard';
import ColorToggle from './Components/ColorToggle';

function App() {
  return (
    <div className="App">
      <GameProvider>
        <Scoreboard />
        <Grid />
        <AnnouncementBoard />
        <ColorToggle />
      </GameProvider>
    </div>
   
  );
}

export default App;
