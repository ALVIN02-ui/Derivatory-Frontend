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
    <div className={`${open ? "pl-72" : "pl-20"} ${currentMode === 'Dark' ? 'dark bg-slate-900 text-white': 'bg-slate-200 text-gray-800'} h-screen w-screen`}>
      Login
    </div>
  );
}

export default Login;
