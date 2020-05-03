import React, { useState, useEffect } from "react";

function HookUseEffectCounter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
      console.log("update logs");
      
    document.title = `You Clicked ${count} times`;
  },[count]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </div>
  );
}

export default HookUseEffectCounter;
