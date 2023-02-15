//add a state called users. 
import {useEffect, useState} from 'react';
import './Main.css';
import Interwork from './Mycomponents/Interwork';
import InteractiveBlock from './Mycomponents/InteractiveBlock';



function Main({domain})
{    

    return(
    <>
    <h1 className="header center red-text" id="catTitle">Resume.cat 🐈</h1>
    <p className="center black-text">I will help you create you a <strong>real</strong> resume step-by-step!</p> 
    <br/>
    <div className = "inputzone">
        <InteractiveBlock type="personal"/>
        <InteractiveBlock type="education"/>
        <InteractiveBlock type="experience"/>
        <InteractiveBlock type="skills"/>
        {/* Unused Yet <InteractiveBlock type="languages"/> */}
        
    </div>
        <br/>

        {/* <form onSubmit={formSubmit}>
        
        <h3>CV Form</h3><br/>
        <label for="name">Your name</label><br/>
        <input type="text" id="name" name="name"/><br/><br/>
        <strong>Your Educational Background</strong>
        <br/>
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
        
        
    </form>  */}

    
           
        </>
        
    )
}




export default Main;

//A HTML Form that takes Name, Surname, Education, Awards, Work Experience and Skills as input 