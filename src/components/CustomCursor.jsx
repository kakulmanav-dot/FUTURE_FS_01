import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    
    const moveHandler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    
    window.addEventListener("mousemove", moveHandler);

   
    return () => window.removeEventListener("mousemove", moveHandler);
  }, []); 

  return (
    
    <div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{
        transform: `translate(${position.x - 40}px, ${position.y - 40}px)`,
      }}
    >
    
      <div className="sm:w-20 sm:h-20 w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 blur-3xl opacity-80" />
    </div>
  );
};

export default CustomCursor;
