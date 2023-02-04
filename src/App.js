import { useState } from 'react';
import './App.css';
import Awards from './Components/Awards/Awards';
import Intro from './Components/Intro/Intro';
import Main from './Components/Main/Main';
import data from "./Resume.json"

function App() {
  const [jsonData, setData] = useState (data);
  
  
  return (
    <div className="App">
     <Main/>
     <Intro data={jsonData.basics}/>
    </div>
  );
}

export default App;
