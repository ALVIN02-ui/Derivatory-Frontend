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

  const { open, currentMode, currentColor} = useStateContext();

  return (
    <div className={`${open ? "pl-72" : "pl-20"} ${currentMode === 'Dark' ? 'dark bg-slate-900 text-white': 'bg-slate-200 text-gray-800'} h-screen w-screen`}>

      <div className={`signup-container flex flex-col m-auto mt-20 w-2/5 border-2 border-derivatory  ${currentMode === 'Dark' ? 'dark bg-slate-900 text-white': 'bg-slate-200 text-gray-800'}`}>

        <div className="header flex flex-col w-full mt-2 px-4">

          <div className={`px-4 pt-3 scroll-pb-1.5`}>
            <h1 className={` origin-left font-medium text-2xl duration-300 text-derivatory`}>Derivatory</h1>
          </div>

          <div className="text text-sm font-medium pl-4">Sign Up now to get started</div>

        </div>

        <div className="inputs mt-2 flex flex-col gap-6">

          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder='Username'/>
          </div>

          <div className="input">
            <img src={email_icon} alt=""/>
            <input type="email" placeholder='Email' />
          </div>

          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Password'/>
          </div>

        </div>

        <div className="forgot-password">Lost Password? <span>Click Here</span></div>

        <div className="submit-container">
          <div className="submit">Sign Up</div>
          <div className="submit">Log In</div>
        </div>
        
      </div>
    </div>
  );
}

export default Login;
