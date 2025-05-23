import React from 'react'
import styled from 'styled-components';
import { BreadCrumb } from '../../Components/BreadCrumb';

const Title = styled.h1`
  text-decoration: underline;
  padding: 20px 5vw;
  font-size: 1.6rem;
  font-family: 'Gantari', serif;
  position: relative;
  margin-top: 130px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-top: 60px;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;
export default function Pretreatement() {
  return (
    <>
      <BreadCrumb title="Pre-Treatment" path="/zld/pretreatment" />
                          <Title>Pre-Treatment</Title>  
    </>
  )
}
