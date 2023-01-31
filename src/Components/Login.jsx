import { Link } from 'react-router-dom';

import { useHistory } from 'react-router-dom';

import "./loginRegister.css";

const Login = () => {
  let history = useHistory();

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Mark<b> IT</b></span>
        <form>
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <input style={{ display: "none" }} type="file" id='file' />
          <button onClick={() => {
            history.push("/tasklist");
          }
          }
          >
            Sign in
          </button>
        </form>
        <p>You don't have an account? <Link to='/register'>Sign up</Link></p>
      </div>
    </div>
  )
}

export default Login