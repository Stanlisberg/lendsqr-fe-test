import lendsqr from "../../icons/lendsqr.svg";
import pablo from "../../icons/pablo.svg";
import "../../styles/Login.css";

function Login() {
  return (
    // <div className="container">
      <div className="wrapper">
        <div className="wrapper-left">
          <div className='wrap-logo'>
             <img className="lendsqr-logo" src={lendsqr} />
             <img className="pablo-logo" src={pablo} />
          </div>
        </div>
        <div className="wrapper-right">
         <img className="lendsqr-logo2" src={lendsqr} />
         <form>
          <div className="login-container">
            <div className="login-header">
              <p className="p-head">Welcome!</p>
              <p className='p-sub'>Enter details to login.</p>
            </div>
            <div className="login-input">
              <div className='input-email'>
                <label htmlFor="email"></label>
                <input 
                    className="email" 
                    type="email" 
                    placeholder="Email"
                 />
              </div>
              <div className='input-password'>
                <label htmlFor="email"></label>
                <input
                    className="password"
                    type="password"
                    placeholder="Password"
                />
                <p className='show-pass'>SHOW</p>
              </div>
              <div className='forgot-pass'>FORGOT PASSWORD?</div>
              <button type='submit' className='button'>LoG IN</button>
            </div>
            {/* <button type='submit' className='button'>LoG IN</button> */}
          </div>
         </form>
        </div>
      </div>
    // </div>
  );
}

export default Login;
