import M from 'materialize-css';
import React, { useState, useEffect  } from 'react';


function Miniwork(props) {
    return(
        <>
        <br/>
        <p> Work {props.no+1}</p>
        <label for="name">Workplace Name</label><br/>
        <input type="text" id="name" name="name"/><br/><br/>
        <label for="name">Position</label><br/>
        <input type="text" id="name" name="name"/><br/><br/>
        <label for="name">Dates</label><br/>
        <input type="text" id="name" name="name"/><br/><br/>
        <label for="name">Description</label><br/>
        <input type="text" id="name" name="name"/><br/><br/>
        
        </>

    )
}


function Interwork({domain})
{    
    const [count, setCount] = useState(1);
    
    useEffect(()=>{
        console.log("hey")
    },[count])
    
    let rows = [];

    for (let i = 0; i < count; i++) {
        rows.push(<Miniwork no={i}/>);
    }

    
   
    return(
        <>
        {rows}
        <button onClick={() => setCount(count + 1)}>
          New work experience
        </button>
        <button onClick={() => {if (count != 1) {setCount(count -1)}}}>
        Remove work experience
        </button>
        </>
    )



}



export default Interwork;

