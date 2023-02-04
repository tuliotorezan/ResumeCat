import M from 'materialize-css';
import React, { useState, useEffect  } from 'react';



function Intereducation({domain})
{    
    const [count, setCount] = useState(0);
    
    useEffect(()=>{
        console.log("hey")
    },[count])
    
    if (count == 0) {
    return(
        <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Add Education!
        </button>
      </div>    
    )
}    if (count == 1) {
    return(
        <>
        <label for="name">Your name</label><br/>
        <input type="text" id="name" name="name"/><br/><br/>
        <button onClick={() => setCount(count + 1)}>
          Add Education!
        </button>
        </>
    )
}  if (count == 2) {
    return(
        <>
        <label for="name">Your name</label><br/>
        <input type="text" id="name" name="name"/><br/><br/>
        <label for="name">Your name</label><br/>
        <input type="text" id="name" name="name"/><br/><br/>
        <button onClick={() => setCount(count + 1)}>
          Add Education!
        </button>
        </>
    )
}  if (count == 3) {
    return(
        <>
        <label for="name">Your name</label><br/>
        <input type="text" id="name" name="name"/><br/><br/>
        <label for="name">Your name</label><br/>
        <input type="text" id="name" name="name"/><br/><br/>
        <label for="name">Your name</label><br/>
        <input type="text" id="name" name="name"/><br/><br/>
        </>
    )
}
}



export default Intereducation;

