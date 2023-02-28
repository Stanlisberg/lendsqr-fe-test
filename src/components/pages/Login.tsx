import lendsqr from '../../icons/lendsqr.svg'
import pablo from '../../icons/pablo.svg'
import '../../styles/Login.css'


function Login() {
  return (
    <div className='container'>
        <div className='wrapper'>
            <div className='login-left'>lendsqr
                <img src={lendsqr} />
                <img src={pablo} />
               
            </div>
            <div className='login-right'>welcome</div>
        </div>
    </div>
  )
}

export default Login