import React from 'react';
import styled from 'styled-components';
import { FaTint, FaRecycle, FaBacteria } from 'react-icons/fa';
import { GiWaterDrop, GiChemicalDrop } from 'react-icons/gi';

const AboutContainer = styled.div`
  min-height: 500px;
  height: auto;
  background-color: rgb(0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 60px 0 0px 0;
  }
`;

const TextWrapper = styled.div`
  font-size: 18px;
  font-family: 'Questrial', sans-serif;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  color: white;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const AboutText = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 20px;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-family: 'Gantari', sans-serif;
  max-width: 70%;
  color: white;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    max-width: 100%;
  }
`;

const Timeline = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 1100vh;
  margin-top: 60px;
  position: relative;
  padding: 40px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;
  text-align: center;
  position: relative;
  padding: 20px;
  font-family: 'Questrial', sans-serif;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 40px;
  }

  &:before {
    content: "";
    position: absolute;
    top: -30px;
    width: 2px;
    height: 40px;
    background: repeating-linear-gradient(
      to bottom,
      white,
      white 5px,
      transparent 5px,
      transparent 10px
    );
  }
`;

const IconWrapper = styled.div`
  background-color: white;
  color: black;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.3);
  margin-bottom: 20px;
`;

const Description = styled.div`
  color: white;
  font-size: 16px;
  font-family: 'Questrial', sans-serif;
  max-width: 100%;
  line-height: 1.2;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export default function Treatments() {
  return (
    <AboutContainer>
      <TextWrapper>
        <h4 style={{ fontWeight: '600', color: 'white', fontFamily: 'Gantari, sans-serif' }}>
          Our Treatments
        </h4>
        <AboutText>
          <Title>
            We combine physical, chemical, and biological processes with RO systems and evaporators to recycle clean water effectively.
          </Title>
        </AboutText>
        <Timeline>
          <Step>
            <IconWrapper>
              <GiWaterDrop />
            </IconWrapper>
            <Description>
              <strong>01 | Primary Treatment</strong>
              <p>Removes large solids and suspended particles through screening and sedimentation processes.</p>
            </Description>
          </Step>
          <Step>
            <IconWrapper>
              <FaBacteria />
            </IconWrapper>
            <Description>
              <strong>02 | Secondary Treatment</strong>
              <p>Uses biological processes to degrade organic matter, reducing BOD and COD in the wastewater.</p>
            </Description>
          </Step>
          <Step>
            <IconWrapper>
              <GiChemicalDrop />
            </IconWrapper>
            <Description>
              <strong>03 | Tertiary Treatment</strong>
              <p>Advanced chemical treatment and filtration to remove dissolved contaminants like TDS, nitrogen, and phosphorus.</p>
            </Description>
          </Step>
          <Step>
            <IconWrapper>
              <FaTint />
            </IconWrapper>
            <Description>
              <strong>04 | Reverse Osmosis</strong>
              <p>High-pressure membrane process that removes dissolved solids, producing high-purity water for reuse.</p>
            </Description>
          </Step>
          <Step>
            <IconWrapper>
              <FaRecycle />
            </IconWrapper>
            <Description>
              <strong>05 | Evaporator System</strong>
              <p>Concentrates RO rejects and recovers water by evaporation, enabling Zero Liquid Discharge (ZLD).</p>
            </Description>
          </Step>
        </Timeline>
      </TextWrapper>
    </AboutContainer>
  );
}
