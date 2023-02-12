import { useState } from 'react';
import './App.css';
import Awards from './Components/Awards/Awards';
import Intro from './Components/Intro/Intro';
import Skills from './Components/Skills/Skills';
import data from "./Resume.json"
import Main from './Components/Main/Main';
import WorkExperience from './Components/WorkExperience/WorkExperience';
import Education from './Components/Education/Education';

function App() {
  const [jsonData, setData] = useState(data);

  return (
    <>
      <div className='row'>
        <div className='col s6'>
          <div className="Main">
            <Main />
          </div>

        </div>

        <div className='col s6 white'>
          <Intro data={jsonData.basics} />
          <Skills data={jsonData.skills} />
          <WorkExperience data={jsonData.work} />
          <Education data={jsonData.education} />
        </div>
      </div>
    </>
  );
}

export default App;
