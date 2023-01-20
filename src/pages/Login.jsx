import React from 'react'

const Login = () => {
  return (
    <div  className="formContainer">
          <div className="formWrapper">
              <span className="logo">Mark<b> IT</b></span>
              <form>
                  <input type="email" placeholder='Email'/>
                  <input type="password" placeholder='Password'/>
                  <input style={{display: "none"}} type="file" id='file' />
                  <button>Sign in</button>
              </form>
              <p>You don't have an account? <a href='https://www.youtube.com/'>Sign up</a></p>
          </div>
      </div>
  )
}

export default Login