import { Link } from 'react-router-dom';

import "../style.scss";

const Login = () => {
  return (
    <div  className="formContainer">
          <div className="formWrapper">
              <span className="logo">Mark<b> IT</b></span>
              <form>
                  <input type="email" placeholder='Email'/>
                  <input type="password" placeholder='Password'/>
                  <input style={{display: "none"}} type="file" id='file' />
                  <button><Link to='/tasklist'>Sign in</Link></button>
              </form>
              <p>You don't have an account? <Link to='/register'>Sign up</Link></p>
          </div>
      </div>
  )
}

export default Login