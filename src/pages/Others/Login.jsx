import React from 'react';

//Context Provider
import { useStateContext } from "../../contexts/ContextProvider";
//Context Provider

// CSS
import '../../App.css';
// CSS

//Icons
import { BsRobot } from "react-icons/bs";
//Icons

//Assets
import user_icon from '../../assets/person.png'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'
//Assets

const Login = () => {

  const { open, currentMode, currentColor} = useStateContext();


  return (
    <div className={`${open ? "pl-72" : "pl-20"} ${currentMode === 'Dark' ? 'dark bg-slate-900 text-white': 'bg-slate-200 text-gray-800'} h-screen w-screen flex`}>

      <div className='h-screen w-2/3 flex'>  
        <div className={`signup-container flex flex-col m-auto  ${currentMode === 'Dark' ? 'dark bg-slate-900 text-white': 'bg-slate-200 text-gray-800'}`}>

          <div className='flex items-center justify-center pb-7'>
            <BsRobot
              className={` ${currentMode === 'Dark' ? 'dark text-white': 'text-gray-800'}  text-4xl rounded cursor-pointer`}
              style={{ background: 'transparent'}}
            />
          </div>

          <div className="inputs mt-2 flex flex-col gap-6">

            <div className="input bg-slate-100">
              <input type="text" placeholder='Username'/>
            </div>

            <div className="input bg-slate-100">
              <input type="password" placeholder='Password'/>
            </div>

          </div>

          <div className="member"><span>Forgot Password</span></div>

          <div className="submit-container">
            <div className="submit">Log In</div>
          </div>

          <div className="password">
            Don't have an account? <span>Register</span>             
          </div>
        
        </div>
      </div>

      <div className=' h-screen w-1/3 z-0 relative flex justify-center items-center border-l border-black'>
        <div className="rounded-full p-7 border border-black glass">
          <div className='flex items-center justify-center'>
            <BsRobot
              className={` ${currentMode === 'Dark' ? 'dark text-white': 'text-gray-800'}  text-7xl  cursor-pointer`}
              style={{ background: 'transparent'}}
            />
          </div>
        </div>
      </div>


    </div>
  );
}

export default Login;
