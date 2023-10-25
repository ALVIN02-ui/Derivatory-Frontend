import React from 'react'

//Context Provider
import { useStateContext } from "../contexts/ContextProvider";
//Context Provider

//CSS
import "../App.css";
//CSS

function Dashboard() {

  const { open, setOpen} = useStateContext();
  return (
    <div className={`${open ? "pl-72" : "pl-20"} h-screen w-screen bg-red-600 text-white`}>dashboard</div>
  )
}

export default Dashboard