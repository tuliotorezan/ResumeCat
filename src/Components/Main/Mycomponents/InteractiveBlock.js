import React, { useState, useEffect  } from 'react';
export default InteractiveBlock;
function InteractiveBlock(props) {

    //Convert props to individual variables
    const toRender = props.type;
    
    switch(toRender) {
        case "personal":
          return(<BLK_PERSONAL/>);
        case "education":
          return(<BLK_EDUCATION/>);
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
    const [option_phone, set_option_phone] = useState(true);
    const [option_website, set_option_website] = useState(true);
    

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

      
      {option_mail ? 
      <>
      <div className="basicBox" id ="mailBox">
      <label>Your e-mail? </label>
      <button onClick={()=>set_option_mail(false)}>🗑️</button>
      <input type="email" name="email" placeholder="purrito@meow.cat"></input><br/>
      </div>
      </>
      : 
      <>
      <button onClick={()=>set_option_mail(true)}>Add Mail</button>
      <br/>
      </>}


      {option_phone ? 
      <>
      <div className="basicBox" id ="phoneBox">
      <label>Phone Number? </label>
      <button onClick={()=>set_option_phone(0)}>🗑️</button>
      <input type="tel" name="phoneNumber" placeholder="9025555555"></input><br/>
      </div>
      </>
      : 
      <>
      <button onClick={()=>set_option_phone(1)}>📞 Add phone number</button>
      </>}

      {option_website ? 
      <>
      <div className="basicBox" id ="siteBox">
      <label>Do you want to add a website link? </label>
      <button onClick={()=>set_option_website(0)}>🗑️</button>
      <input type="url" name="personalWebsite" placeholder="You can leave this area empty."></input><br/>
      </div>
      </>
      : 
      <>
      <button onClick={()=>set_option_website(true)}>Add Website</button>
      <br/>
      </>}

    
     
      <div className="basicBox">
      <br/>
      <label for="description">Talk about yourself!</label><br/>  
      <textarea id="description" rows='5' cols='40' placeholder='I am a cat.'></textarea><br/>  
      </div>
 </form> 
      </>

  )
}

function BLK_EDUCATION()
{    
  const [count, setCount] = useState(1);
  
  useEffect(()=>{
      console.log("hey")
  },[count])
  
  let rows = [];

  for (let i = 0; i < count; i++) {
      rows.push(<Unit_Education no={i}/>);
  }
 
  return(
      <>
      {rows}
      <button onClick={() => setCount(count + 1)}>
        Add Education!
      </button>
      <button onClick={() => {if (count != 1) {setCount(count -1)}}}>
        Remove Education!
      </button>
      </>
  )



}

function Unit_Education(props) {
  return(
      <>
      <br/>
      <h6><strong>Any degrees, diplomas or certificates? (Credential {props.no+1})</strong></h6>
      <label for="name">Institution Name</label><br/>
      <input type="text" id="name" name="name"/><br/><br/>
      <label for="name">Study Field</label><br/>
      <input type="text" id="name" name="name"/><br/><br/>
      <label for="name">Study Tier</label><br/>
      <input type="text" id="name" name="name"/><br/><br/>
      <label for="name">Details</label><br/>
      <input type="text" id="name" name="name"/><br/><br/>
      
      </>

  )
}



