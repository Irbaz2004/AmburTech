import React, { useState } from "react";
import styled from "styled-components";
import AT03 from "../assets/AT03.jpg"
import AT06 from "../assets/AT06.jpg"
import AT07 from "../assets/AT07.jpg"

const ServicesContainer = styled.div`
  min-height: 400px;
  height: auto;
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px 0;
  font-family: "Questrial", sans-serif;
`;

const TextWrapper = styled.div`
  font-size: 18px;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  font-family: "Questrial", sans-serif;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    margin: 0 30px;
  }

  @media (max-width: 768px) {
    margin: 0 20px;
  }
`;

const Card = styled.div`
  position: relative;
  width: ${(props) => (props.isHovered ? "900px" : "500px")};
  height: 400px;
  transition: width 0.5s ease-in-out;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  padding: 20px;
  color: white;
  font-weight: 100;
  margin-bottom: 20px;
  font-family: "Questrial", sans-serif;

  &:nth-child(1) {
    width: ${(props) => (props.hoveredCard === null ? "900px" : props.isHovered ? "900px" : "500px")};
  }

  &:after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
    z-index: 1;
    border-radius: 20px;
    margin: 0 10px;
  }

  div {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 900px) {
    width: 100% !important;
    margin: 10px 0;
  }
`;

const Title = styled.h2`
  flex: 1;
  font-size: 2.5rem;
  max-width: 50%;
  margin: 30px 0px 80px 0;
  font-family: "Gantari", serif;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    max-width: 100%;
    margin-bottom: 20px;
  }
`;

const ReadMoreButton = styled.button`
  width: 100%;
  background: rgb(255, 255, 255);
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
  transition: background 0.3s;
  color: black;
  border-radius: 25px;
  font-family: "Questrial", sans-serif;

  &:hover {
    background: rgba(255, 255, 255, 0);
    border: 1px solid white;
    color: white;
  }
`;

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <ServicesContainer>
      <TextWrapper>
        <h4 style={{ fontWeight: "600", fontFamily: "Gantari, serif" }}>Our Services</h4>
        <Title>Transforming wastewater into clean resources, fostering sustainability and a cleaner tomorrow.</Title>
      </TextWrapper>
      <CardContainer>
        <Card
          style={{ backgroundImage: `url(${AT03})` }}
          isHovered={hoveredCard === 1}
          hoveredCard={hoveredCard}
          onMouseEnter={() => setHoveredCard(1)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div>
            <h3>ZLD - Zero Liquid Discharge</h3>
            <p>Recycle, reuse wastewater, eliminate all liquid discharge environmentally.</p>
            <ReadMoreButton>Read More →</ReadMoreButton>
          </div>
        </Card>

        <Card
          style={{ backgroundImage: `url(${AT07})`}}
          isHovered={hoveredCard === 2}
          hoveredCard={hoveredCard}
          onMouseEnter={() => setHoveredCard(2)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div>
            <h3>SLF - Sanitary Landfilling</h3>
            <p>The delf supreme ruins appearance well layout.</p>
            <ReadMoreButton>Read More →</ReadMoreButton>
          </div>
        </Card>

        <Card
          style={{ backgroundImage: `url(${AT06})` }}
          isHovered={hoveredCard === 3}
          hoveredCard={hoveredCard}
          onMouseEnter={() => setHoveredCard(3)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div>
            <h3>Effluent Treatment</h3>
            <p>For ensuring regulatory compliance & environment.</p>
            <ReadMoreButton>Read More →</ReadMoreButton>
          </div>
        </Card>
      </CardContainer>
    </ServicesContainer>
  );
}
