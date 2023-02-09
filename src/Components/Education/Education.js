import 'materialize-css/dist/css/materialize.min.css'

function Education({data})
{
    return(
        <div className='section row'>
            <div className='col left-align s6 offset-s3'>
                <h6 className='sectionHead'>EDUCATION</h6>
                {data.map(edu =>
                        <div key={edu.area + edu.institution} className='col left-align s12'>
                            <div className='col s9'><h6 className='inline eduTitle'>{edu.studyType} {edu.area}</h6><h6 className='inline eduInstitution'>|&nbsp; {edu.institution}</h6></div>
                            <div className='col s3 right-align'><h6 className='eduDates'>{edu.startDate} - {edu.endDate}</h6></div>
                        </div>
                )}
            </div>
        </div>
    )
}

export default Education;


// "education": [{
//     "institution": "University",
//     "url": "https://institution.com/",
//     "area": "Software Development",
//     "studyType": "Bachelor",
//     "startDate": "2011-01-01",
//     "endDate": "2013-01-01",
//     "score": "4.0",
//     "courses": [
//       "DB1101 - Basic SQL"
//     ]
//   }],