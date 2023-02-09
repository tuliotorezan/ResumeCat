import 'materialize-css/dist/css/materialize.min.css'
import { useState } from 'react'

function Skills({data})
{
    const advSkills = data.filter(e=>e.level==="Advanced")
    const intmSkills = data.filter(e=>e.level==="Intermediate")
    const basicSkills = data.filter(e=>e.level==="Basic")
    return(
        <div className='section row'>
            <div className='col left-align s6 offset-s3'>
                <h6 className='sectionHead'>SKILLS</h6>
                <div className='col left-align s12'>
                    <div className='col s2 left-align headline'>
                        Advanced
                    </div>
                    {advSkills.map(e=><div key={e.name} className="col skill-card blue lighten-3"><p className="card-content">{e.name}</p></div>)}
                </div>

                <div className='divider grey col s12 space'></div>
                <div className='col left-align s12'>
                    <div className='col s2 left-align headline'>
                        Intermediate
                    </div>
                    {intmSkills.map(e=><div key={e.name} className="col skill-card green lighten-3"><p className="card-content">{e.name}</p></div>)}
                </div>
                
                <div className='divider grey col s12 space'></div>
                <div className='col left-align s12'>
                    <div className='col s2 left-align headline'>
                        Basic
                    </div>
                    {basicSkills.map(e=><div key={e.name} className="col skill-card yellow lighten-3"><p className="card-content">{e.name}</p></div>)}
                </div>
                
            </div>
        </div>
    )
}

export default Skills