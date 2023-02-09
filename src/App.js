import { useState } from 'react';
import './App.css';
import Awards from './Components/Awards/Awards';
import Intro from './Components/Intro/Intro';
import Skills from './Components/Skills/Skills';
import data from "./Resume.json"
import Dynamiccv from './Components/Dynamiccv/Dynamiccv';
import Main from './Components/Main/Main';
import WorkExperience from './Components/WorkExperience/WorkExperience';
import Education from './Components/Education/Education';

function App() {
  const [jsonData, setData] = useState (data);
  
  return (
    <>
    <div>
     <Intro data={jsonData.basics}/>
     <Skills data={jsonData.skills}/>
     <WorkExperience data={jsonData.work}/>
     <Education data={jsonData.education}/>
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
