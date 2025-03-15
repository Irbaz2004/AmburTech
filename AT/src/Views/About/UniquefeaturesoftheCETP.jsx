import React from 'react'
import styled from 'styled-components';
import { BreadCrumb } from '../../Components/BreadCrumb';

const Title = styled.h1`
  padding: 20px 5vw;
  font-size: 1.6rem;
  font-family: 'Gantari', serif;
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
    font-size: 1.3rem;
  }
`;
export default function UniquefeaturesoftheCETP() {
  return (
    <>
      <BreadCrumb title="Unique Features of the CETP" path="/about/uniquefeaturesofthecetp" />
               <Title>Unique Features of the CETP
                <hr />
                </Title> 
    </>
  )
}
