import 'materialize-css/dist/css/materialize.min.css'
import "./intro.css"

function Intro(props)
{
    const data = props.data;
    return(
        <header className='row'>
            <div className='col left-align s5 offset-s3'>
                <h4>{data.name}</h4>
                <h5>{data.label}</h5>
                <span>{data.location.city}, {data.location.region}</span>
            </div>
            <div className='col s1'>
                <img className="circle responsive-img" src="./profilePic.png" />
            </div>

            <div className='contact col s6 offset-s3 left-align'>
                <div className='inline'>
                    <i class="tiny material-icons">email</i>
                    <a>{data.email}</a>
                </div>
                <div className='inline'>
                    <i class="tiny material-icons">phone</i>
                    <a>{data.phone}</a>
                </div>
                <div className='inline'>
                    <i class="tiny material-icons">open_in_new</i>
                    <a>{data.url}</a>
                </div>
            </div>

            <div className='socials col s6 offset-s3 left-align'>
                {data.profiles.map(e =>
                    <div className='inline'>
                        <a>{e.url}</a>
                    </div>
                )}
            </div>

            <div class="col left-align s6 offset-s3">
                <div class="card blue lighten-4">
                    <div class="card-content black-text">
                        <p>{data.summary}</p>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Intro;