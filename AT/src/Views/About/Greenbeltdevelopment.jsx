import React from 'react';
import styled from 'styled-components';
import { BreadCrumb } from '../../Components/BreadCrumb';
import Gr1 from "../../assets/Gr1.jpg";
import Gr2 from "../../assets/Gr2.jpg";
import Gr3 from "../../assets/Gr3.jpg";
import Gr4 from "../../assets/Gr4.jpg";
import Gr5 from "../../assets/Gr5.jpg";
import Gr6 from "../../assets/Gr6.jpg";
import Gr7 from "../../assets/Gr7.jpg";
import Gr8 from "../../assets/Gr8.jpg";
import Gr9 from "../../assets/Gr9.jpg";
import Gr10 from "../../assets/Gr10.jpg";
import Gr11 from "../../assets/Gr11.jpg";
import Gr12 from "../../assets/Gr12.jpg";
import Gr13 from "../../assets/Gr13.jpg";
import Gr14 from "../../assets/Gr14.jpg";
import Gr15 from "../../assets/Gr15.jpg";


// Title Styles
const Title = styled.h1`
  padding: 20px 5vw;
  font-size: 1.6rem;
  font-family: 'Gantari', serif;
  position: relative;
  margin-top: 130px;

     hr {
    width: 200px;
    border: 2px solid red;
    margin-top: 5px;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-top: 60px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    hr{
    width: 120px;
    }
  }
`;

// Paragraph Styles
const Para = styled.p`
  font-size: 1rem;
  font-family: "Gantari", serif;
  padding: 10px 80px;
  color: gray;

  @media (max-width: 768px) {
    font-size: .8rem;
    padding: 10px 20px;
  }
`;

// Subtitle Styles
const SubTitle = styled.h2`
  text-decoration: underline;
  padding: 20px 5vw;
  font-size: 1.2rem;
  font-family: "Gantari", serif;
  position: relative;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size:.8rem;
  }
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

// Image Item Styles (Even Size)
const ImageItem = styled.img`
  width: 100%;
  height: 180px; /* Fixed Height */
  object-fit: cover;
  border-radius: 10px;
`;

export default function Greenbeltdevelopment() {
    const images = [Gr1, Gr2, Gr3, Gr4, Gr5, Gr6, Gr7, Gr8, Gr9, Gr10, Gr11, Gr12, Gr13, Gr14, Gr15];

      
  return (
    <>
       <BreadCrumb title="Green Belt Development" path="/about/greenbeltdevelopment" />
      <Title>Green Belt Development
        <hr />
      </Title>
      <Para>
        Ambrtec celebrates every June 5 as the green revolution date, whereby as a team from Amburtec we developed a separate space for green belt development.
      </Para>

      <SubTitle>World Environmental Day 2024</SubTitle>
      <ImageGrid>
        {images.slice(0, 7).map((src, index) => (
          <ImageItem key={index} src={src} alt={`Greenbelt ${index + 1}`} />
        ))}
      </ImageGrid>

      <SubTitle>Kurungadugal Farming Scheme 23-05-2023</SubTitle>
      <ImageGrid>
        {images.slice(7).map((src, index) => (
          <ImageItem key={index + 7} src={src} alt={`Greenbelt ${index + 8}`} />
        ))}
      </ImageGrid>

    </>
  );
}
