import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import AT01 from "../assets/AT01.jpg";
import AT02 from "../assets/AT02.jpg";
import AT03 from "../assets/AT03.jpg";

const AboutContainer = styled.div`
  min-height: 400px;
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  flex-direction: column;
`;

const TextWrapper = styled.div`
  font-size: 18px;
  font-family: 'Questrial', sans-serif;
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
  font-family: 'Gantari', sans-serif;
  max-width: 60%;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    max-width: 100%;
  }
`;

const SliderContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 30px;
  position: relative;
`;

const ImageWrapper = styled.div`
  padding: 0 10px;
  img {
    width: 100%;
    border-radius: 10px;
  }
`;

const CustomArrows = styled.div`
  position: absolute;
  top: -50px;
  right: 20px;
  display: flex;
  gap: 10px;

  button {
    background: rgb(0, 0, 0);
    color: white;
    border: none;
    padding: 8px 12px;
    font-size: 15px;
    cursor: pointer;
    border-radius: 50%;
    font-family: 'Questrial', sans-serif;

    &:hover {
      background: white;
      color: black;
      border: 1px solid black;
    }
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export default function Projects() {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.2, // Shows half of the next image
    slidesToScroll: 1,
    arrows: false, // Hide default arrows
  };

  return (
    <AboutContainer>
      <TextWrapper>
        <h4 style={{ fontWeight: "600", fontFamily: "Gantari, sans-serif" }}>
          Our Projects
        </h4>
        <AboutText>
          <Title>
            We’ve transformed wastewater into a resource for sustainable
            leather production
          </Title>
        </AboutText>
      </TextWrapper>

      {/* Custom Navigation Arrows */}
      <SliderContainer>
        <CustomArrows>
          <button onClick={() => sliderRef.current.slickPrev()}>⬅</button>
          <button onClick={() => sliderRef.current.slickNext()}>➡</button>
        </CustomArrows>

        <Slider ref={sliderRef} {...settings}>
          <ImageWrapper>
            <img src={AT01} alt="Project 1" />
          </ImageWrapper>
          <ImageWrapper>
            <img src={AT02} alt="Project 2" />
          </ImageWrapper>
          <ImageWrapper>
            <img src={AT03} alt="Project 3" />
          </ImageWrapper>
        </Slider>
      </SliderContainer>
    </AboutContainer>
  );
}
