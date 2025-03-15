import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Container for cursor (hidden on mobile)
const CursorContainer = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: 99999; /* Make sure it's above everything */
  mix-blend-mode: difference;

  @media (max-width: 768px) {
    display: none;
  }
`;


// Small inner cursor
const InnerCursor = styled.div`
  width: 10px;
  height: 10px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  transition: transform 0.05s ease-out;
`;

// Larger trailing cursor
const OuterCursor = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease-out, width 0.2s ease, height 0.2s ease;
  
  &.hovered {
    width: 60px;
    height: 60px;
    border-color: #ffcc00;
  }
`;

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setTimeout(() => {
        setTrailPosition({ x: e.clientX, y: e.clientY });
      }, 50);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", moveCursor);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <CursorContainer>
      <OuterCursor
        style={{ left: `${trailPosition.x}px`, top: `${trailPosition.y}px` }}
        className={isHovering ? "hovered" : ""}
      />
      <InnerCursor
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </CursorContainer>
  );
};

export default CustomCursor;
