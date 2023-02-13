import React, { useState, useEffect  } from 'react';
import Intereducation from './Intereducation';
export default InteractiveBlock;

function InteractiveBlock(props) {

    //Convert props to individual variables
    const toRender = props.type;
    
    switch(toRender) {
        case "personal":
          return(<BLK_Personal/>);
        case "education":
          return(<Intereducation/>);
        case "experience":
          return("Goodbye");
        case "skills":
          return("Goodbye");
        case "languages":
          return("Goodbye");
        case "projects":
          return("Goodbye");
        default:
          return("Please refresh the page.");
      }

}

function BLK_Personal() {      
    //Set variables for user requests for certain sections
    const [phoneWanted, set_phoneWanted] = useState(0);

  return(
      <>
<form>
      <div className="basicBox" id ="nameBox">
      <label>What is your name?</label><br/>
      <input type="text" name="name" placeholder="Purrito Cat"></input><br/>
      </div>
      <div className="basicBox" id ="titleBox">
      <label>Do you have a career title? </label>
      <button onClick={()=>set_phoneWanted(0)}>🗑️</button>
      <input type="text" name="title" placeholder="Box Inspector"></input><br/>
      </div>
      <div className="basicBox" id ="addressBox">
      <label>Address Information: </label>
      <button onClick={()=>set_phoneWanted(0)}>🗑️</button>
      <input type="text" name="address" placeholder="Cattown, New Meowia"></input><br/>
      </div>
      <label>Email:</label>
      <input type="email" name="email" placeholder="purrito@meow.cat"></input><br/>
      
      {phoneWanted ? 
      <>
      <label>Phone Number? </label>
      <button onClick={()=>set_phoneWanted(0)}>Remove</button>
      <input type="tel" name="phoneNumber" placeholder="9025555555"></input><br/>
  
      <br/>
      </>
      : 
      <>
      <button onClick={()=>set_phoneWanted(1)}>📞 Add phone number</button>
      <br/>
      </>}

      <label>Personal Website:</label>
      <input type="url" name="personalWebsite"></input><br/>
      <label for="description">Description:</label><br/>  
      <textarea id="description" rows='5' cols='40'></textarea><br/>  
      <input type='submit' value='Submit'/>  
 </form> 
      </>

  )
}






