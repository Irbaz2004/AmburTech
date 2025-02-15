import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

// Animations
const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; visibility: hidden; }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.5); opacity: 0.7; }
  100% { transform: scale(2); opacity: 0; }
`;

// Styled Components
const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: ${({ isLoaded }) => (isLoaded ? fadeOut : "none")} 1s ease-out forwards;
`;

const LoaderText = styled.h1`
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
  position: relative;
  opacity: 1;
      font-family: 'Questrial', sans-serif;

`;

const PulseCircle = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  animation: ${pulse} 1.5s infinite ease-out;
`;

const LoadingScreen = ({ setLoading }) => {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : "."));
    }, 500);

    setTimeout(() => {
      setLoading(false); // Hide loader after 3 seconds
    }, 3000);

    return () => clearInterval(interval);
  }, [setLoading]);

  return (
    <LoaderContainer>
      <PulseCircle />
      <LoaderText>Amburtec{dots}</LoaderText>
    </LoaderContainer>
  );
};

export default LoadingScreen;
