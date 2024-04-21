import React, { useState } from "react";
import Child from "./Child";

const Count = (props) => {

  console.log("props",props);

  const [count, setCount] = useState(0);
  const inc = () => {
    setCount(count + 1);
  };

  const dec = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <Child name="Riy"/>
      <h1>Count:{props.count}</h1>
      <button onClick={() => props.addCount(1)}>++</button>
      <button onClick={dec}>--</button>
    </div>
  );
};

export default Count;
