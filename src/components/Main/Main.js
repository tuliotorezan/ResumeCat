//add a state called users. 
import {useEffect, useState} from 'react';
import M from 'materialize-css';
import './Main.css';
import Dynamiccv from '../Dynamiccv/Dynamiccv';
import Intereducation from './Mycomponents/Intereducation';
import Interwork from './Mycomponents/Interwork';


const formSubmit = (event) => {
    event.preventDefault();
    var data = new FormData(event.target);
    let formObject = Object.fromEntries(data.entries());
    console.log(formObject);
  }

function Main({domain})
{    
    return(
    <>
        <form onSubmit={formSubmit}>
        <h1 className="header center blue-text">Resume.cat 🐱</h1>
        <h3>CV Form</h3><br/>
        <label for="name">Your name</label><br/>
        <input type="text" id="name" name="name"/><br/><br/>
        <strong>Your Educational Background</strong>
        <br/>
        <Intereducation/>
        <br/>
        <br/>
        <br/>
        <p>hey I am some text yay</p>
        <Interwork/>
        Awards: 
        <input type="text" name="awards"/><br/><br/>
        Skills: 
        <input type="text" name="skills"/><br/><br/>
        <input type="submit"/>
        
        
    </form> 

    
           
        </>
        
    )
}

export default Main;

//A HTML Form that takes Name, Surname, Education, Awards, Work Experience and Skills as input 