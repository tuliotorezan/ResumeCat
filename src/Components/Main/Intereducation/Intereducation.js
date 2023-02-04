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
        <button onClick={() => setCount(count + 1)}>
          Add Education!
        </button>
      </div>    
    )
}    if (count == 1) {
    return(
        <>
        <br/>
        <label for="name">Institution Name</label><br/>
        <input type="text" id="name" name="name"/><br/><br/>
        <label for="name">Study Field</label><br/>
        <input type="text" id="name" name="name"/><br/><br/>
        <label for="name">Study Tier</label><br/>
        <input type="text" id="name" name="name"/><br/><br/>
        <label for="name">Details</label><br/>
        <input type="text" id="name" name="name"/><br/><br/>
        <button onClick={() => setCount(count + 1)}>
          Add Education!
        </button>
        </>
    )
}  if (count == 2) {
    return(
        <>
        <br/>
        <p>First Education</p>
        <label for="name">Institution Name</label><br/>
        <input type="text" id="name" name="name"/><br/><br/>
        <label for="name">Study Field</label><br/>
        <input type="text" id="name" name="name"/><br/><br/>
        <label for="name">Study Tier</label><br/>
        <input type="text" id="name" name="name"/><br/><br/>
        <label for="name">Details</label><br/>
        <input type="text" id="name" name="name"/><br/><br/>

        <p>Second Education</p>
        <label for="name">Institution Name</label><br/>
        <input type="text" id="name" name="name"/><br/><br/>
        <label for="name">Study Field</label><br/>
        <input type="text" id="name" name="name"/><br/><br/>
        <label for="name">Study Tier</label><br/>
        <input type="text" id="name" name="name"/><br/><br/>
        <label for="name">Details</label><br/>
        <input type="text" id="name" name="name"/><br/><br/>

        <button onClick={() => setCount(count + 1)}>
          Add Education!
        </button>
        </>
    )
}  if (count == 3) {
    return(
        <>
        <br/>
        <p>First Education</p>
        <label for="name">Institution Name</label><br/>
        <input type="text" id="name" name="name"/><br/><br/>
        <label for="name">Study Field</label><br/>
        <input type="text" id="name" name="name"/><br/><br/>
        <label for="name">Study Tier</label><br/>
        <input type="text" id="name" name="name"/><br/><br/>
        <label for="name">Details</label><br/>
        <input type="text" id="name" name="name"/><br/><br/>

        <p>Second Education</p>
        <label for="name">Institution Name</label><br/>
        <input type="text" id="name" name="name"/><br/><br/>
        <label for="name">Study Field</label><br/>
        <input type="text" id="name" name="name"/><br/><br/>
        <label for="name">Study Tier</label><br/>
        <input type="text" id="name" name="name"/><br/><br/>
        <label for="name">Details</label><br/>
        <input type="text" id="name" name="name"/><br/><br/>

        <p>Third Education</p>
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
}



export default Intereducation;

