import 'materialize-css/dist/css/materialize.min.css'

function WorkExperience({data}) {
    return (
        <div className='section row'>
            <div className='col left-align s6 offset-s3'>
                <h6 className='sectionHead'>WORK EXPERIENCE</h6>
                <div className='col left-align s12'>
                    <div className='col s6 jobTitle'><h6>{data[0].position} | {data[0].name}</h6></div>
                    <div className='col s6 jobDates right-align'><h6>{data[0].startDate} - {data[0].endDate}</h6></div>
                </div>

                <div className='col left-align s12'>
                    <div className='col left-align s12 valign-wrapper'>
                        <i className="tiny material-icons icon">open_in_new</i>
                        <a>{data[0].url}</a>
                    </div>
                </div>

                <div className='col left-align s12'>
                    <p className='col s12'>{data[0].summary}</p>
                    <ul>
                        {data[0].highlights.map(e=><li key={e}>{e}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default WorkExperience
