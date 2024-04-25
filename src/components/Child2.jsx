import React, { useContext } from 'react'
import { useInput } from '../context/Input';


const Child2 = (props) => {

  const cValue=useInput();
  console.log("context value---->>>",cValue);

  return (
    <div>Child2: data received:{cValue.data}
    
    <hr />
    {props.j}
    </div>
  )
}

export default Child2