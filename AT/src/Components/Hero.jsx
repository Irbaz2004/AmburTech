import React from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Image Imports
import Image1 from '../assets/AT01.jpg';
import Image2 from '../assets/AT02.jpg';
import Image3 from '../assets/AT03.jpg';
import Image4 from '../assets/AT04.jpg';
import Image5 from '../assets/AT05.jpg';

// Styled Components
const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  padding-left: 5%;
`;

const HeroContent = styled.div`
  max-width: 700px;
  padding: 20px;
`;

const HeroTitle = styled.h1`
  font-family: "Gantari", serif;
  font-size: 3.5rem;
  font-weight: 400;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: white;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-family: "Questrial", serif;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 20px;
  line-height: 1.6;
  color: white;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const HeroButtonExplore = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  text-decoration: underline;
  padding: 12px 24px;
  font-size: 1rem;
  transition: all 0.3s ease;
  border-radius: 3px;
    font-family: "Gantari", serif;


  &:hover {
    text-decoration: none;
    color: black;
    background-color: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const HeroButtonContact = styled.button`
  background-color: #fff;
  color: black;
  border: none;
  cursor: pointer;
  padding: 12px 24px;
  font-size: 1rem;
  transition: all 0.3s ease;
  border-radius: 3px;
    font-family: "Gantari", serif;


  &:hover {
    color: white;
    background-color: black;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const StyledSlider = styled(Slider)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;


  .slick-slide {
    transition: transform 1.5s ease-in-out;
  }

  .slick-active {
    transform: scale(1.2);
  }

  .slick-slide img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    transition: transform 1s ease-in-out;
  }
`;
const HeroLocation = styled.div`
  position: absolute;
  bottom: 20px;
  right: 30px;
  color: white;
  display: flex;
  align-items: center; /* Align icon and text properly */
  gap: 10px; /* Space between icon and text */
  font-size: 1rem;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  padding: 35px;
  border-radius: 10px;
  max-width: 400px; /* Flexible max width */
  width: auto; /* Adjust based on content */
  
  @media (max-width: 768px) {
    bottom: 15px;
    right: 15px;
    font-size: 0.9rem;
    max-width: 300px;
    padding: 12px;
  }

  @media (max-width: 480px) {
    bottom: 10px;
    right: 10px;
    font-size: 0.8rem;
    max-width: 250px;
    padding: 10px;
  }
`;

const LocationText = styled.div`
  display: flex;
  flex-direction: column;
`;

const LocationTitle = styled.span`
  font-family: "Gantari", serif;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 3px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const LocationDescription = styled.span`
  font-family: "Questrial", serif;
  font-size: 0.9rem;
  font-weight: 400;
  opacity: 0.8;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;
// Hero Component
const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const images = [Image1, Image2, Image3, Image4, Image5];

  return (
    <HeroContainer>
      <StyledSlider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </StyledSlider>
      <HeroOverlay>
        <HeroContent>
          <HeroTitle>PURE IMPACT</HeroTitle>
          <HeroTitle>ZERO WASTEWATER</HeroTitle>
          <HeroSubtitle>
            Transforming the leather industry with cutting-edge, sustainable training solutions powered by innovation,
            expertise, and commitment to a cleaner future.
          </HeroSubtitle>
          <ButtonContainer>
            <HeroButtonContact primary>Contact Us</HeroButtonContact>
            <HeroButtonExplore>Explore Projects</HeroButtonExplore>
          </ButtonContainer>
        </HeroContent>
      </HeroOverlay>
      <HeroLocation>
        <FaMapMarkerAlt size={20} />
        <LocationText>
          <LocationTitle>Ambur</LocationTitle>
          <LocationDescription>
            A renowned town known for its leather industry, specializing in tanning and manufacturing.
          </LocationDescription>
        </LocationText>
      </HeroLocation>
    </HeroContainer>
  );
};

export default Hero;
