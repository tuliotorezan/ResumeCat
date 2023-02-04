//add a state called users. 
import {useEffect, useState} from 'react';
import M from 'materialize-css';
import './Main.css';
function Main({domain})
{    
    return(
        <>
        <form action="">
        <h3>CV Form</h3><br/>
        Your Name? <input type="text" name="name"/><br/><br/>
        Education?<input type="text" name="education"/><br/><br/>
        Awards: <input type="text" name="awards"/><br/><br/>
        Work Experience: <input type="text" name="workExperience"/><br/><br/>
        Skills: <input type="text" name="skills"/><br/><br/>

        <input type="submit"/>
    </form> 
           
        </>
        
    )
}

export default Main;

//A HTML Form that takes Name, Surname, Education, Awards, Work Experience and Skills as input 