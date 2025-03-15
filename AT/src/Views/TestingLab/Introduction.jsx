import React from "react";
import styled from "styled-components";
import { BreadCrumb } from "../../Components/BreadCrumb";

const Title = styled.h1`
  padding: 20px 5vw;
  font-size: 1.6rem;
  font-family: "Gantari", serif;
  position: relative;
  margin-top: 130px;

  hr {
    width: 170px;
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

    </>
  );
}
