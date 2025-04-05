import React from 'react'
import styled from 'styled-components';
import { BreadCrumb } from '../../Components/BreadCrumb';
import ATCE02 from "../../assets/AT02.jpg"

const Title = styled.h1`
  padding: 20px 5vw;
  font-size: 1.6rem;
  font-family: 'Gantari', serif;
  position: relative;
  margin-top: 130px;

  
      hr {
    width: 170px;
    border: 2px solid #00911a;
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

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const StyledImage = styled.img`
  width: 80%;
  max-width: 900px;
  height: auto;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;

 

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 95%;
  }
`;

export default function ComputerizedCETP() {
  return (
    <>
    
           <BreadCrumb title="Computerized CETP" path="/about/computerizedcetp" />
          <Title>Computerized CETP
            <hr />
          </Title>
          <ImageContainer>
                  <StyledImage src={ATCE02} alt="Organization Chart" />
                </ImageContainer>
      
    </>
  )
}
