import M from 'materialize-css';
import React, { useState, useEffect  } from 'react';


function Minieducation(props) {
    return(
        <>
        <br/>
        <p> Education {props.no+1}</p>
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


function Intereducation({domain})
{    
    const [count, setCount] = useState(1);
    
    useEffect(()=>{
        console.log("hey")
    },[count])
    
    let rows = [];

    for (let i = 0; i < count; i++) {
        rows.push(<Minieducation no={i}/>);
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



export default Intereducation;

