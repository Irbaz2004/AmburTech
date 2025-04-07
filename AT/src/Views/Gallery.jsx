import React from 'react'
import styled from "styled-components";
import { BreadCrumb } from ".././Components/BreadCrumb";
import G1 from "../assets/G1 Raw effluent Receiving Sump.jpg";
import G2 from "../assets/G2 Chemical House.jpg";
import G3 from "../assets/G3 Equalization Tank With OHR.png";
import G4 from "../assets/G4 Pre Settler.jpg";
import G5 from "../assets/G5 Filtrate Holding Tank.png"
import G6 from "../assets/G6 Fliter Press.png";
import G7 from "../assets/G7 Fliter Press Washing pump.png"
import G8 from "../assets/G8 Primary Clarifier.png"
import G9 from "../assets/G9 Dual Media Filter.jpg"
import G10 from "../assets/G10 Aeration tank.jpg"
import G11 from "../assets/G11 Secondary Clarifier.png"
import G12 from "../assets/G12 Tertiary Clarifier.jpg"
import G13 from "../assets/G13 Pelletizer & Circulation Pumps.png"
import G14 from "../assets/G14 Auto Disc Filter.png"
import G23 from "../assets/G23 Overhead Tank of capacity 5 lakh litres.jpg";

const Title = styled.h1`
  padding: 20px 5vw;
  font-size: 1.6rem;
  font-family: "Gantari", serif;
  position: relative;
  top: 130px;

     hr {
    width: 100px;
    border: 2px solid #00911a;
    margin-top: 5px;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    top: 60px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    hr{
    width: 40px;
    }
  }
`;

const ImageGridContainer = styled.div`
max-height: 200vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  padding: 20px; text-align: center;
  position: relative;
    top: 130px;
      margin: 0px 5vw 10vw 5vw;

    @media (max-width: 480px) {
    max-height: 80vh;
    overflow-x:auto;
          margin: 0px 5vw 25vw 5vw;
          top: 60px;

    }
`;

const ImageItem = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  display: block;
  object-fit: cover;
  border-radius: 4px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const ImageTitle = styled.p`
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export default function Gallery() {
    const images = [
        { src: G1, title: " Raw effluent Receiving Sump" },
        { src: G2, title: " Chemical House" },
        { src: G3, title: " Equalization Tank With OHR" },
        { src: G4, title: " Pre Settler" },
        { src: G5, title: " Filtrate Holding Tank" },
        { src: G6, title: " Fliter Press" },
        { src: G7, title: " Fliter Press Washing pump" },
        { src: G8, title: " Primary Clarifier" },
        { src: G9, title: " Dual Media Filter" },
        { src: G10, title: "  Aeration tank" },
        { src: G11, title: "  Secondary Clarifier" },
        { src: G12, title: "  Tertiary Clarifier" },
        { src: G13, title: "  Pelletizer & Circulation Pumps" },
        { src: G14, title: "  Auto Disc Filter" },
        { src: G23, title: " Overhead Tank of capacity 5 lakh litres" },
    ];
  return (
    <>
      <BreadCrumb title="Gallery" path="/zld/pretreatment/gallery" />
            <Title>Gallery
              <hr />
            </Title>

            <ImageGridContainer>
      {images.map((item, index) => (
        <ImageItem key={index}>
          <Image src={item.src} alt={item.title} />
          <ImageTitle>{item.title}</ImageTitle>
        </ImageItem>
      ))}
    </ImageGridContainer>
    </>
  )
}
