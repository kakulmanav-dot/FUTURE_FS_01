import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  // This stores the current mouse position (x and y coordinates)
  // Starting at {x:0, y:0} means the blob starts at the top-left corner
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // This function runs every time the user moves their mouse
    // e.clientX = how many pixels from the LEFT edge of the screen
    // e.clientY = how many pixels from the TOP edge of the screen
    const moveHandler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Start listening for mouse movement anywhere on the page
    window.addEventListener("mousemove", moveHandler);

    // CLEANUP — when the component is removed from the page,
    // stop listening to mouse movement to avoid memory leaks
    return () => window.removeEventListener("mousemove", moveHandler);
  }, []); // Empty [] means this runs only once when the page loads

  return (
    // OUTER DIV — this is the "carrier" that moves around following the cursor
    // fixed        → stays in place relative to the viewport (not the page)
    // top-0 left-0 → starts at the top-left corner of the screen
    // pointer-events-none → mouse clicks pass THROUGH this div (so it doesn't block buttons etc.)
    // z-50         → sits on top of everything else on the page
    // transform    → moves the div to the current mouse position
    //   We subtract 40px from both x and y so the CENTER of the blob
    //   sits under the cursor, not the top-left corner of the blob
    <div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{
        transform: `translate(${position.x - 40}px, ${position.y - 40}px)`,
      }}
    >
      {/* INNER DIV — this is the actual visible glowing blob
          We use inline styles instead of Tailwind classes because:
          inline styles ALWAYS work, but Tailwind classes only work
          if Tailwind is properly installed and scanning your file

          width/height: 80px  → size of the blob (same as h-20 w-20 in Tailwind)
          borderRadius: 50%   → makes it a perfect circle (same as rounded-full)
          background          → pink to blue gradient going left to right
          filter: blur(24px)  → makes the edges soft and glowy (same as blur-3xl)
          opacity: 0.8        → slightly see-through so it blends nicely        */}
      <div className="sm:w-20 sm:h-20 w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 blur-3xl opacity-80" />
    </div>
  );
};

export default CustomCursor;
