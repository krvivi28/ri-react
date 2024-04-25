import React, { useContext, useState } from "react";
import Child2 from "./Child2";
import { InputContext } from "../context/Input";

const Child1 = (props) => {
  console.log("props of child1", props);

  const {setData}=useContext(InputContext);

  return (
    <div>
      <input
        type="text"
        placeholder="enter something"
        onChange={(e) => setData(e.target.value)}
      />
      {/* Child1:
      <input
        type="text"
        placeholder="enter something"
        onChange={(e) => props.setData(e.target.value)}
      />
      <hr /> */}
      {/* <div className="flex flex-col w-[90%] p-5 mx-auto bg-gray-500 h-[400px] items-center justify-center">
        {props.children}
        {props.children[1]}
      </div> */}
      Child1
    </div>
  );
};

export default Child1;
