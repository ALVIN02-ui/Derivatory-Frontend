import React from 'react'

//Context Provider
import { useStateContext } from "../../contexts/ContextProvider";
//Context Provider

//CSS
import "../../App.css";
//CSS

function Overunder() {

  const { open, currentMode} = useStateContext();
  return (
    <div className={`${open ? "pl-72" : "pl-20"} ${currentMode === 'Dark' ? 'dark bg-slate-900 text-white': 'bg-slate-200 text-gray-800'} h-screen w-screen`}>overunder</div>
  )
}

export default Overunder