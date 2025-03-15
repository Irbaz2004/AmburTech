import React from "react";
import styled from "styled-components";
import { BreadCrumb } from "../../Components/BreadCrumb";
import TLE01 from "../../assets/TLE01.jpg"


const Title = styled.h1`
  padding: 20px 5vw;
  font-size: 1.6rem;
  font-family: "Gantari", serif;
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
      width: 120px;}
  }
`;

const ImageContainer = styled.div`
  display: flex;
  margin:0 50px;
  padding: 20px;
`;

// Image Item Styles (Even Size)
const ImageItem = styled.img`
  width: 300px;
  height: 200px; /* Fixed Height */
  object-fit: cover;
  border-radius: 10px;
`;
export default function Viewofmodernequipe() {
  return (
    <>
      <BreadCrumb
        title="View Of Modern Equipment"
        path="/testinglab/viewofmodernequipe"
      />
      <Title>
        View Of Modern Equipment
        <hr />
      </Title>
      <ImageContainer>
      <ImageItem src={TLE01} alt="Test image" />
      </ImageContainer>
    </>
  );
}
