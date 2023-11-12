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
    <div className={`${open ? "pl-72" : "pl-20"} ${currentMode === 'Dark' ? 'dark bg-slate-900 text-white': 'bg-slate-200 text-gray-800'} h-screen w-screen flex flex-row`}>

      <div className='bg-derivatory h-screen w-2/3 relative'>
          <div className={`signup-container flex flex-col m-auto mt-20 w-2/5 border-2 border-derivatory  ${currentMode === 'Dark' ? 'dark bg-slate-900 text-white': 'bg-slate-200 text-gray-800'}`}>

            <div>
              <div className={`px-4 pt-3 scroll-pb-1.5`}>
                <h1 className={` origin-left font-medium text-2xl duration-300 text-derivatory`}>Derivatory</h1>
              </div>
            </div>

            <div className="inputs mt-2 flex flex-col gap-6 bg-green-300">

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
            </div>
          
        </div>
      </div>

      <div className='bg-white h-screen w-1/3'>

      </div>


    </div>
  );
}

export default Login;
