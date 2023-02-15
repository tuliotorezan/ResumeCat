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

  function inputToJson() {
    let myVar =  document.getElementById("dynval_name").value;
    console.log(myVar.value)
 
    let dynJson =
    {
     "basics": {
       "name": document.getElementById("dynval_name").value,
       "label": document.getElementById("dynval_title").value,
       "image": "",
       "email": document.getElementById("dynval_email").value,
       "phone": document.getElementById("dynval_phone").value,
       "url": "https://johndoe.com",
       "summary": document.getElementById("dynval_desc").value,
       "location": {
         "address": "",
         "postalCode": "",
         "city": document.getElementById("dynval_address").value,
         "countryCode": "",
         "region": ""
       },
       "profiles": [{
         "network": "Twitter",
         "username": "john",
         "url": "https://twitter.com/john"
       }]
     },
     "work": [{
       "name": "Company",
       "position": "President",
       "url": "https://company.com",
       "startDate": "2013-01-01",
       "endDate": "2014-01-01",
       "summary": "Description…",
       "highlights": [
         "Started the company"
       ]
     }],
     "volunteer": [{
       "organization": "Organization",
       "position": "Volunteer",
       "url": "https://organization.com/",
       "startDate": "2012-01-01",
       "endDate": "2013-01-01",
       "summary": "Description…",
       "highlights": [
         "Awarded 'Volunteer of the Month'"
       ]
     }],
     "education": [{
       "institution": "University",
       "url": "https://institution.com/",
       "area": "Software Development",
       "studyType": "Bachelor",
       "startDate": "2011-01-01",
       "endDate": "2013-01-01",
       "score": "4.0",
       "courses": [
         "DB1101 - Basic SQL"
       ]
     }],
     "awards": [{
       "title": "Award",
       "date": "2014-11-01",
       "awarder": "Company",
       "summary": "There is no spoon."
     }],
     "certificates": [{
       "name": "Certificate",
       "date": "2021-11-07",
       "issuer": "Company",
       "url": "https://certificate.com"
     }],
     "publications": [{
       "name": "Publication",
       "publisher": "Company",
       "releaseDate": "2014-10-01",
       "url": "https://publication.com",
       "summary": "Description…"
     }],
     "skills": [{
       "name": "Web Development",
       "level": "Advanced",
       "keywords": [
         "HTML",
         "CSS",
         "JavaScript"
       ]
     },{
       "name": "Python",
       "level": "Advanced",
       "keywords": [
         "HTML",
         "CSS",
         "JavaScript"
       ]
     },{
       "name": "Web Development",
       "level": "Basic",
       "keywords": [
         "HTML",
         "CSS",
         "JavaScript"
       ]
     }],
     "languages": [{
       "language": "English",
       "fluency": "Native speaker"
     }],
     "interests": [{
       "name": "Wildlife",
       "keywords": [
         "Ferrets",
         "Unicorns"
       ]
     }],
     "references": [{
       "name": "Jane Doe",
       "reference": "Reference…"
     }],
     "projects": [{
       "name": "Project",
       "description": "Description…",
       "highlights": [
         "Won award at AIHacks 2016"
       ],
       "keywords": [
         "HTML"
       ],
       "startDate": "2019-01-01",
       "endDate": "2021-01-01",
       "url": "https://project.com/",
       "roles": [
         "Team Lead"
       ],
       "entity": "Entity",
       "type": "application"
     }]
   }
 
   console.log(dynJson);
   setData(dynJson)
    
 }


  const [jsonData, setData] = useState(data);
  const [creationTimer, setCreationTimer] = useState(5);


  return (
    <>
      <div className='row'>
        <div className='col s5 leftArea'>
          <div className="Main">
            <Main />
            <button onClick={()=>{inputToJson()}}>Create my resume!</button>
            {setInterval(inputToJson, 100)}
          </div>
        </div>

        <div className='col s7 white' >
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
