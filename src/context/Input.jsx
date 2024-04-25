import { createContext, useContext, useState } from "react";

export const InputContext = createContext();


import React from 'react'

const InputContextWrapper = (props) => {

    const [data, setData] = useState("");

  return (
    <InputContext.Provider value={{data,setData}}>
      {props.children}
    </InputContext.Provider>
  )
}

export default InputContextWrapper;

export const useInput=()=>
{
  return useContext(InputContext)
}