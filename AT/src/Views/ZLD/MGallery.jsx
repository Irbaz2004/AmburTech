import React from 'react'
import styled from "styled-components";
import { BreadCrumb } from "../../Components/BreadCrumb";
import G19 from "../../assets/G19 Multiple Effect Evaporator Plant.jpg";
import G20 from "../../assets/G20 Boiler Plant.png";
import G21 from "../../assets/G21 Salt Godown.jpg";

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
  padding: 20px;
  text-align: center;
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
  border-radius: 10px;
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

export default function MGallery() {
    const images = [
        { src: G19, title: "Multiple Effect Evaporator Plant" },
        { src: G20, title: "Boiler Plant" },
        { src: G21, title: "Salt Godown" },
    
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
