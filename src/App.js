import { useState } from 'react';
import {jsPDF} from 'jspdf';
import './App.css';
import Awards from './Components/Awards/Awards';
import Intro from './Components/Intro/Intro';
import Skills from './Components/Skills/Skills';
import data from "./Resume.json"
import Main from './Components/Main/Main';
import WorkExperience from './Components/WorkExperience/WorkExperience';
import Education from './Components/Education/Education';

function App() {

  function SaveToPDF() {
    const resume = new jsPDF('portrait','pt','a4', false, false, 2, 0.5);
    resume.html(document.querySelector('#resume')).then(() => {
      resume.save('resume.pdf');
    });
  }

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
       "url": document.getElementById("dynval_website").value,
       "summary": document.getElementById("dynval_desc").value,
       "location": {
         "address": "baban",
         "postalCode": "anan1",
         "city": document.getElementById("dynval_address").value,
         "countryCode": "anan2",
         "region": document.getElementById("dynval_state").value
       },
       "profiles": [{
         "network": "",
         "username": "",
         "url": ""
       }]
     },
     "work": [{
       "name":document.getElementById("dynvar_exp_company").value,
       "position": document.getElementById("dynvar_exp_position").value,
       "url": "",
       "startDate": document.getElementById("dynvar_exp_startdate").value,
       "endDate": document.getElementById("dynvar_exp_enddate").value,
       "summary": document.getElementById("dynvar_exp_details").value,
       "highlights": [
        document.getElementById("dynvar_exp_highlight").value,
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
            <button onClick={()=>{SaveToPDF()}}>Save my resume!</button>
            {setInterval(inputToJson, 500)}
          </div>
        </div>

        <div id="resume" className='col s7 white' >
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
