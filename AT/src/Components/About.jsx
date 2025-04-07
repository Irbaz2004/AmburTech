import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {  FaIndustry, FaCogs, FaUsers, FaLaptopCode,FaThumbsUp } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AboutSection = styled.section`
  background: rgb(255, 255, 255);
  padding: 80px 20px;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const Heading = styled.h4`
  font-size: 1.2rem;
  font-weight: bold;
  font-family: "Gantari", serif;
  color: black;
  margin-bottom: 10px;
  text-align: start;
`;

const Title = styled.h2`
  font-size: 2.8rem;
  font-family: "Gantari", serif;
  color: #000;
  margin-bottom: 40px;
  text-align: start;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  font-family: "Questrial", sans-serif;
  color: #333;
  line-height: 1.8;
  max-width: 800px;
  text-align: start;
  margin-bottom: 40px;
`;

const Button = styled(Link)`
  background: black;
  color: white;
  padding: 12px 30px;
  font-size: 1rem;
  font-family: "Gantari", serif;
  text-decoration: none;
  border-radius: 5px;
  border: 2px solid transparent;
  transition: 0.3s ease;

  &:hover {
    background: white;
    color: black;
    border-color: black;
  }
`;

const StatCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 30px 20px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.13);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 300px; /* Ensures even height */
  box-sizing: border-box;
  margin: 20px 0;

  &:hover {
    transform: translateY(-8px);
  }

  @media (max-width: 768px) {
    height: auto; /* allow expansion on mobile */
  }
`;
const SliderWrapper = styled.div`
  margin-top: 80px;

  .slick-slide > div {
    padding: 0 15px;
  }

  .slick-list {
    margin: 0 -15px;
  }

  .slick-dots li button:before {
    color: #00911a;
    font-size: 12px;
  }

  @media (max-width: 768px) {
    .slick-slide > div {
      padding: 0 10px;
    }

    .slick-list {
      margin: 0 -10px;
    }
  }
`;


const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: #00911a;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: 0 auto 20px;
  font-size: 1.5rem;
`;

const StatNumber = styled.h3`
  font-size: 3rem;
  color: black;
  font-family: "Gantari", serif;
  margin: 10px 0;
`;

const StatText = styled.p`
  font-size: 1rem;
  font-family: "Questrial", sans-serif;
  color: #333;
  line-height: 1.5;
`;

// Slider Settings
const sliderSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
};


export default function About() {
  return (
    <AboutSection>
      <ContentWrapper>
        <Heading>About Us</Heading>
        <Title>When water is pure, possibilities are endless.</Title>
        <Description>
          At Ambutec, we offer tailored wastewater treatment solutions for the leather industry. 
          Using innovative, sustainable technologies, we help businesses manage and treat their 
          wastewater efficiently while meeting environmental standards.
        </Description>
        <Button to="/about">Read More</Button>
        <SliderWrapper>
  <Slider {...sliderSettings}>
   
    
    <StatCard>
      <IconWrapper><FaIndustry /></IconWrapper>
      <StatNumber>30</StatNumber>
      <StatText>Years Of Experience</StatText>
    </StatCard>

    <StatCard>
      <IconWrapper><FaCogs /></IconWrapper>
      <StatNumber>+100</StatNumber>
      <StatText>Advanced machines enhancing precision and output.</StatText>
    </StatCard>

    <StatCard>
      <IconWrapper><FaUsers /></IconWrapper>
      <StatNumber>+100</StatNumber>
      <StatText>Experts driving water treatment excellence.</StatText>
    </StatCard>

    <StatCard>
      <IconWrapper><FaLaptopCode /></IconWrapper>
      <StatNumber>+15</StatNumber>
      <StatText>Cutting-edge technologies powering efficient systems.</StatText>
    </StatCard>


    <StatCard>
      <IconWrapper><FaThumbsUp /></IconWrapper>
      <StatNumber>47</StatNumber>
      <StatText>Member Tanners</StatText>
    </StatCard>

  </Slider>
</SliderWrapper>

        
              </ContentWrapper>
    </AboutSection>
  );
}
