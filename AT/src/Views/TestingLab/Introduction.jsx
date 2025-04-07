import React from "react";
import styled from "styled-components";
import TLE01 from "../../assets/TLE01.jpg"
import { BreadCrumb } from "../../Components/BreadCrumb";

const Title = styled.h1`
  padding: 20px 5vw;
  font-size: 1.6rem;
  font-family: "Gantari", serif;
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
      width: 100px;}
  }
`;
const Title2 = styled.h1`
  margin-left:-5px;
  font-size: 1.6rem;
  font-family: "Gantari", serif;
  position: relative;

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
      width: 100px;}
  }
`;
const List = styled.ul`
  padding: 10px 80px;
  font-size: 1rem;
  font-family: "Gantari", serif;
  color: black;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 10px 20px;
  }
`;

const ListItem = styled.li`
  margin-bottom: 15px;
`;


const SubTitle = styled.h2`
  text-decoration: underline;
  padding: 20px 0px;
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

const ImageContainer = styled.div`
  display: flex;
  margin:0 50px;
  padding: 20px 0px;
`;

// Image Item Styles (Even Size)
const ImageItem = styled.img`
  width: 300px;
  height: 200px; /* Fixed Height */
  object-fit: cover;
  border-radius: 10px;
`;

export default function Introduction() {
  return (
    <>
      <BreadCrumb title="Testing Laboratory" path="/testinglab/introduction" />
      <Title>
        Testing Laboratory
        <hr />
      </Title>
      <List>
        <ListItem>
        •	Introduction to our state-of-the-art testing lab.
        </ListItem>
        <ListItem>
        •	Our lab is equipped with the latest and most advanced equipment.
        </ListItem>
        <ListItem>
        •	We ensure accurate and reliable test results.
        </ListItem>
        <ListItem>
        •	Our modern equipment enables efficient and precise testing processes.
        </ListItem>
      </List>

<Container>
  
  
<Title2>
View Of Modern Equipment
        <hr />
      </Title2>
 <ImageContainer>
      <ImageItem src={TLE01} alt="Test image" />
      </ImageContainer>
</Container>
    </>
  );
}
