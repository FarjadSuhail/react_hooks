import React, { useState, useEffect } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);

    // on unmounting of component
    // the function passed to useEffect will return when the component unmount
    return () => {
      console.log("Component UnMounting");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);
  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  );
}

export default HookMouse;
