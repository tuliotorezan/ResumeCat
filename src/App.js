import { useState } from 'react';
import './App.css';
import Awards from './Components/Awards/Awards';
import Intro from './Components/Intro/Intro';
import Main from './Components/Main/Main';
import data from "./Resume.json"
import Dynamiccv from './components/Dynamiccv/Dynamiccv';
import Main from './components/Main/Main';

function App() {
  const [jsonData, setData] = useState (data);
  
  
  return (
    <>


    <div className="Main">
     <Main/>
     <Intro data={jsonData.basics}/>
    </div>
     <div className="Dynamiccv">
     <Dynamiccv/>
     </div>

    </>
  );
}

export default App;
