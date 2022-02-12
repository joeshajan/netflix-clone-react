import React from 'react';
import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/Row/RowPost';
import { NETFLIX_ORIGINALS,ACTIONS,COMEDY,HORROR,ROMANCE,DOCUMENTARIES } from "./Constants/Constants";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={NETFLIX_ORIGINALS} title='Netflix Originals'/>
      <RowPost url={ACTIONS} title='Action' isSmall/>
      <RowPost url={COMEDY} title='Comedy' isSmall/>
      <RowPost url={HORROR} title='Horror' isSmall/>
      <RowPost url={ROMANCE} title='Romance' isSmall/>
      <RowPost url={DOCUMENTARIES} title='Documentary' isSmall/>
    </div>
  );
}

export default App;
