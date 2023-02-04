import { useState } from 'react';
import './App.css';
import Awards from './Components/Awards/Awards';
import Intro from './Components/Intro/Intro';
import Skills from './Components/Skills/Skills';
import data from "./Resume.json"
import Dynamiccv from './Components/Dynamiccv/Dynamiccv';
import Main from './Components/Main/Main';

function App() {
  const [jsonData, setData] = useState (data);
  
  
  return (
    <>
    <div>
     <Intro data={jsonData.basics}/>
     <Skills data={jsonData.skills}/>
    </div>

    <div className="Main">
     <Main/>
    </div>
     <div className="Dynamiccv">
     <Dynamiccv/>
     </div>
    </>
  );
}

export default App;
