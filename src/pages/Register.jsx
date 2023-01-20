import React from 'react'

const Register = () => {
    return (
      <div className="formContainer">
          <div className="formWrapper">
          <span className="logo">Mark<b> IT</b></span>
              <span className="title">Register</span>
              <form>
                  <input type="text" placeholder="First name"/>
                  <input type="text" placeholder="Last name"/>
                  <input type="email" placeholder='Email'/>
                  <input type="password" placeholder='Password'/>
                  <input style={{display: "none"}} type="file" id='file' />
                  <button>Sign up</button>
              </form>
              <p>You already have an account? Login</p>
          </div>
      </div>
    )
  }

export default Register