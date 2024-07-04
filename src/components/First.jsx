import React from 'react';
import { useNavigate } from 'react-router-dom';

const First = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Login</h1>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <div className="register-forget opacity">
              <a href="/register" className="regis">Register</a>
              <a href="/forgot-password" className="forgot">Forgot Password?</a>
            </div>
            <button onClick={() => navigate('/about')}>Login</button>
          </form>
        </div>
        <div className="overlay-panel overlay-right">
          <img className="image" src="/images/user.png" alt="User" />
        </div>
      </div>
    </>
  );
};

export default First;
