import React from 'react'

//Context Provider
import { useStateContext } from "../contexts/ContextProvider";
//Context Provider

function Card() {

  const { open, setOpen} = useStateContext();
  return (
    <div>card</div>
  )
}

export default Card