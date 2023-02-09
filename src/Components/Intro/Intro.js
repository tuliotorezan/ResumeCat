import 'materialize-css/dist/css/materialize.min.css'
import "./intro.css"

function Intro({ data }) {
    return (
        <header className='row'>
            <div className='col s6 offset-s3'>
                <div className='col left-align s10'>
                    <h4>{data.name}</h4>
                    <h5>{data.label}</h5>
                    <span>{data.location.city}, {data.location.region}</span>
                </div>
                <div className='col s2'>
                    <img className="circle responsive-img" src="./profilePic.png" />
                </div>

                <div className='col left-align s12 valign-wrapper'>
                    <div className='inline valign-wrapper'>
                        <i className="tiny material-icons">email</i>
                        <a>{data.email}</a>
                    </div>
                    <div className='inline valign-wrapper'>
                        <i className="tiny material-icons">phone</i>
                        <a>{data.phone}</a>
                    </div>
                    <div className='inline valign-wrapper'>
                        <i className="tiny material-icons">open_in_new</i>
                        <a className=''>{data.url}</a>
                    </div>
                </div>

                <div className='socials col s12 left-align'>
                    {data.profiles.map(e =>
                        <div key={e.network} className='inline'>
                            <a>{e.url}</a>
                        </div>
                    )}
                </div>

                <div className="col left-align s12">
                    <div className="card blue lighten-4">
                        <div className="card-content black-text">
                            <p>{data.summary}</p>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Intro;