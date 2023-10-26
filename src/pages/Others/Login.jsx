import React from 'react';

//Context Provider
import { useStateContext } from "../../contexts/ContextProvider";
//Context Provider

// CSS
import '../../App.css';
// CSS

//Assets
import user_icon from '../../assets/person.png'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'
//Assets

const Login = () => {

  const { open, currentMode} = useStateContext();
  return (
    <div className={`${open ? "pl-72" : "pl-20"} ${currentMode === 'Dark' ? 'dark bg-slate-900 text-white': 'bg-slate-200 text-gray-800'} h-screen w-screen container`}>
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">

        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" />
        </div>

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" />
        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" />
        </div>

      </div>

      <div className="submit-container">
        <div className="submit">Sign Up</div>
        <div className="submit">Log In</div>
      </div>
    </div>
  );
}

export default Login;
