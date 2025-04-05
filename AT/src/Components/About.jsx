import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AboutContainer = styled.div`
  min-height: 400px;
  height: auto;
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`;

const TextWrapper = styled.div`
  font-size: 18px;
  font-family: "Questrial", serif;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const AboutText = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 50px;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: start;
    gap: 20px;
  }
`;

const Title = styled.h2`
  flex: 1;
  font-size: 2.5rem;
  font-family: "Gantari", serif;
  max-width: 50%;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    max-width: 100%;
  }
`;

const DescriptionWrapper = styled.div`
  flex: 1;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 768px) {
    max-width: 100%;
    align-items: center;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  font-family: "Questrial", serif;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ReadMoreButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 5px;
  align-self: flex-start;
  font-family: "Gantari", serif;
      border: 1px solid black;



  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
  background-color: black;
  gap: 20px;
  margin: 50px 100px;
  border-radius: 15px;

  @media (max-width: 1024px) {
    padding: 15px;
    margin: 40px 10px;
  }
`;

const Box = styled.div`
  width: 22%;
  min-width: 180px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  background-color: black;
  position: relative;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  &:not(:first-child)::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 2px;
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, rgb(0, 0, 0), rgb(255, 255, 255), rgb(0, 0, 0));
  }

  @media (max-width: 1024px) {
    width: 45%;
    height: 350px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;

const BoxText = styled.p`
  font-size: 1rem;
  font-weight: 500;
  font-family: "Questrial", serif;
  color: white;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const BoxNumber = styled.h2`
  font-size: 5rem;
  font-weight: 500;
  font-family: "Gantari", serif;
  color: white;
  text-align: end;

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

export default function About() {
  return (
    <>
      <AboutContainer>
        <TextWrapper>
          <h4 style={{ fontWeight: '600', fontFamily: 'Gantari, serif' }}>About Us</h4>
          <AboutText>
            <Title>
              When water is pure, possibilities are endless. And quality shines through.
            </Title>
            <DescriptionWrapper>
              <Description>
                At Ambutec, we offer tailored wastewater treatment solutions for the leather industry. 
                Using innovative, sustainable technologies, we help businesses manage and treat their 
                wastewater efficiently while meeting environmental standards.
              </Description>
              <ReadMoreButton><Link to={"/about"} style={{color:"white"}}>Read More</Link></ReadMoreButton>
            </DescriptionWrapper>
          </AboutText>
        </TextWrapper>
      </AboutContainer>
      <BoxContainer>
        <Box>
          <BoxText>Over dozens of successful projects, setting benchmarks.</BoxText>
          <BoxNumber>+17</BoxNumber>
        </Box>
        <Box>
          <BoxText>Over two decades of pioneering water treatment innovations, empowering leather tanneries to thrive sustainably.</BoxText>
          <BoxNumber>30</BoxNumber>
        </Box>
        <Box>
          <BoxText>Hundreds of advanced machines delivering precision and efficiency.</BoxText>
          <BoxNumber>+100</BoxNumber>
        </Box>
        <Box>
          <BoxText>Over hundreds of dedicated professionals driving water treatment excellence.</BoxText>
          <BoxNumber>+100</BoxNumber>
        </Box>
      </BoxContainer>
    </>
  );
}
