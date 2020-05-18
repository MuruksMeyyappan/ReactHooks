import React, { useContext } from "react";
import { CountContext } from "../../App.js";

function ComponentsD() {
  const countContext = useContext(CountContext);
  return <div> 
    ComponentsD - count {countContext.countState}
       <button onClick={()=>countContext.countDispatch('increment')}>Increment</button>
      <button onClick={()=>countContext.countDispatch('decrement')}>Decrement</button>
      <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
  </div>;
} 

export default ComponentsD;
