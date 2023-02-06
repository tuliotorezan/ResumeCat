import 'materialize-css/dist/css/materialize.min.css'

function WorkExperience({data}) {
    return (
        <div className='section row'>
            <div className='col left-align s6 offset-s3'>
                <h6 className='sectionHead'>Work Experience</h6>
                <div className='col left-align s12'>
                </div>

            </div>

        </div>
    )
}

export default WorkExperience

// "work": [{
//     "name": "Company",
//     "position": "President",
//     "url": "https://company.com",
//     "startDate": "2013-01-01",
//     "endDate": "2014-01-01",
//     "summary": "Description…",
//     "highlights": [
//       "Started the company"
//     ]
//   }],