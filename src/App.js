import React from 'react';
import './Styles/App.css';
import Grid from './Components/Grid'
import { GridProvider } from "./Contexts/Grid"

function App() {
  return (
    <div className="App">
      <GridProvider>
        <Grid />
      </GridProvider>
    </div>
   
  );
}

export default App;
