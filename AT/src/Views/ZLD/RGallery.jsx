import React from 'react'
import styled from "styled-components";
import { BreadCrumb } from "../../Components/BreadCrumb";
import G15 from "../../assets/G15 Ultra Filtration System.png";
import G16 from "../../assets/G16 RO Plant.jpg";
import G17 from "../../assets/G17 Chemical Dosing Section.jpg";
import G18 from "../../assets/G18 3rd Stage RO Plant.jpg";

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

export default function RGallery() {
    const images = [
        { src: G15, title: " Ultra Filtration System" },
        { src: G16, title: " RO Plant" },
        { src: G17, title: " Chemical Dosing Section" },
        { src: G18, title: " 3rd Stage RO Plant" },
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
