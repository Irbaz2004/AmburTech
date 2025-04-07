import React from "react";
import styled from "styled-components";
import { BreadCrumb } from ".././Components/BreadCrumb";
import slf1 from "../assets/SLF1.jpg";
import slf2 from "../assets/SLF2.jpg";
import slf3 from "../assets/SLF3.jpg";
import slf4 from "../assets/SLF4.jpg";
import slf5 from "../assets/SLF5.jpg";
import slf6 from "../assets/SLF6.jpg";
import slf7 from "../assets/SLF7.jpg";
import slf8 from "../assets/SLF8.jpg";


const Title = styled.h1`
  padding: 20px 5vw;
  font-size: 1.6rem;
  font-family: "Gantari", serif;
  position: relative;
  margin-top: 130px;

  hr {
    width: 150px;
    border: 2px solid #00911a;
    margin-top: 5px;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-top: 60px;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const DataContainer = styled.div`
  padding: 20px;
  font-size: 1rem;
  font-family: "Gantari", serif;
  position: relative;
  width: 90%;
  margin: 0 auto;
  margin-top: -10px;
  background-color:rgb(255, 255, 255);
  border-radius: 4px;
  @media (max-width: 768px) {
    font-size: 1rem;
    width: 100%;
    margin-top: 10px;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const Para = styled.p`
  font-size: 1.1rem;
  font-family: "Gantari", serif;
  padding: 10px 0;
  color: black;
  @media (max-width: 768px) {
    font-size: 0.7rem;
    width: 500%;
  }
`;

const SubTitle = styled.h2`
  text-decoration: underline;
  padding: 20px 0px;
  font-size: 1.2rem;
  font-family: "Gantari", serif;
  position: relative;
`;
const SubTitle2 = styled.h2`
  text-decoration: underline;
  padding: 0px;
  font-size: 1.2rem;
  font-family: "Gantari", serif;
  position: relative;
`;
const Container = styled.div`
  padding: 20px 5vw;
  font-size: 1.2rem;
  font-family: "Gantari", serif;
  position: relative;
`;

// Image Grid Styles
const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  padding: 20px 5vw;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ImageItem = styled.img`
  width: 100%;
  height: 180px; /* Fixed Height */
  object-fit: cover;
  border-radius: 4px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export default function Slf() {
  return (
    <>
      <BreadCrumb title="SLF" path="/slf" />
      <Title>
        Secured Land Fill <hr />
      </Title>

      <DataContainer>
        <Para>
          Construction of a Secure Land Fill System (SLF) with a capacity of
          88,000 ton at a cost of Rs.72 million under the ASIDE scheme with
          the technical assistance from Central Leather Research Institute
          (CLRI).
        </Para>

        <SubTitle>Facility at AMBURTEC CETP Secure Landfill:</SubTitle>

        <Para>
          • The secure landfill at AMBURTEC CETP is designed to safely dispose
          of hazardous waste.
        </Para>
        <Para>
          • It follows strict regulations and guidelines to prevent
          contamination of land and water.
        </Para>
        <Para>
          • The facility has multiple layers of protection, including liners and
          monitoring systems.
        </Para>
        <Para>
          • Proper waste management and regular inspections ensure the
          landfill's safety and environmental impact.
        </Para>
      </DataContainer>

      <Container>
        <SubTitle2>SLF Gallery</SubTitle2>
        <ImageGrid>
          <ImageItem src={slf1} />
          <ImageItem src={slf2} />
          <ImageItem src={slf3} />
          <ImageItem src={slf4} />
          <ImageItem src={slf5} />
          <ImageItem src={slf6} />
          <ImageItem src={slf7} />
          <ImageItem src={slf8} />
        </ImageGrid>
      </Container>
    </>
  );
}
