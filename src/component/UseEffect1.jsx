import React, { useEffect, useState } from "react";

const UseEffect1 = () => {
  const [counter, setCounter] = useState(10);
  const useEffect = (() => {
    document.title = counter ;
      console.log("loading...");
    },
    [counter ]);

  return (
    <>
    <div>
    <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>increase</button>
      <button onClick={() => setCounter(counter - 1)}>decrease</button>
    </div>
     
    </>
  );
};

export default UseEffect1;
