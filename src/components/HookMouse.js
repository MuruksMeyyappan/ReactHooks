import React, { useState, useEffect } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const logMousePosition = (e) => {
    console.log("inside the subfunction");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("useeffet called ");
    window.addEventListener("mousemove", logMousePosition);

    return () =>{
        console.log("Compunent unmount code");
        window.removeEventListener('mousemove', logMousePosition)
    }
  },[]);
  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  );
}

export default HookMouse;
