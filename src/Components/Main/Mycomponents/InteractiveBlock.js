import React, { useState, useEffect  } from 'react';
import Intereducation from './Intereducation';
export default InteractiveBlock;

function InteractiveBlock(props) {

    //Convert props to individual variables
    const toRender = props.type;
    
    switch(toRender) {
        case "personal":
          return(<BLK_PERSONAL/>);
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

function BLK_PERSONAL() {      
    //Set variables for the optional sections
    const [option_title, set_option_title] = useState(true);
    const [option_address, set_option_address] = useState(true);
    const [option_mail, set_option_mail] = useState(true);
    const [option_web, set_option_web] = useState(true);
    const [option_phone, set_option_phone] = useState(true);
    

  return(
      <>
<form>

      <div className="basicBox" id ="nameBox">
      <label>What is your name?</label><br/>
      <input type="text" name="name" placeholder="Purrito Cat"></input><br/>
      </div>

      {option_title ? 
      <>
      <div className="basicBox" id ="titleBox">
      <label>Do you have a career title? </label>
      <button onClick={()=>set_option_title(0)}>🗑️</button>
      <input type="text" name="title" placeholder="Box Inspector"></input><br/>
      </div>
      </>
      : 
      <>
      <button onClick={()=>set_option_title(1)}>Add title</button>
      <br/>
      </>}

      {option_address ? 
      <>
      <div className="basicBox" id ="addressBox">
      <label>Your address? </label>
      <button onClick={()=>set_option_address(false)}>🗑️</button>
      <input type="text" name="address" placeholder="Cattown, New Meowia"></input><br/>
      </div>
      </>
      : 
      <>
      <button onClick={()=>set_option_address(true)}>Add Address</button>
      <br/>
      </>}


      <div className="basicBox" id ="mailBox">
      <label>Email:</label>
      <input type="email" name="email" placeholder="purrito@meow.cat"></input><br/>
      </div>

      {option_phone ? 
      <>
      <div className="basicBox" id ="phoneBox">
      <label>Phone Number? </label>
      <button onClick={()=>set_option_phone(0)}>🗑️</button>
      <input type="tel" name="phoneNumber" placeholder="9025555555"></input><br/>
      </div>
      <br/>
      </>
      : 
      <>
      <button onClick={()=>set_option_phone(1)}>📞 Add phone number</button>
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






