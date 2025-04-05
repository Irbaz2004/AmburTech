import React from 'react'
import styled from "styled-components";
import { BreadCrumb } from "../../Components/BreadCrumb";

const Title = styled.h1`
  padding: 20px 5vw;
  font-size: 1.6rem;
  font-family: "Gantari", serif;
  position: relative;
  margin-top: 130px;

  hr {
    width: 70px;
    border: 2px solid #00911a;
    margin-top: 5px;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-top: 60px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    hr {
      width: 40px;
    }
  }
`;

const SubTitle = styled.h2`
  text-decoration: underline;
  padding: 20px 5vw;
  font-size: 1.2rem;
  font-family: "Gantari", serif;
  position: relative;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const TableWrapper = styled.div`
  padding: 10px 5vw;
  overflow-x: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: "Gantari", serif;
  font-size: 1rem;
  color: black;

  th, td {
    border: 1px solid #ccc;
    padding: 12px;
    text-align: left;
  }

  th {
background-color: #00911a;
    color: white;
        font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export default function STEP() {
  return (
    <>
      <BreadCrumb title="Projects" path="/projects/step" />
      <Title>
        Projects <hr />
      </Title>

      <SubTitle>Proposal under STEP Scheme – 2025</SubTitle>
      <TableWrapper>
        <StyledTable>
          <thead>
            <tr>
              <th>Sl. No.</th>
              <th>Component</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>1000 kg/hr Paddle dryer</td></tr>
            <tr><td>2</td><td>OCEMS at 8TPH Boiler stack</td></tr>
            <tr><td>3</td><td>500 kVAR X 2 APFC Panel with 300A X 2 Harmonic Filter Unit</td></tr>
          </tbody>
        </StyledTable>
      </TableWrapper>
    </>
  );
}
