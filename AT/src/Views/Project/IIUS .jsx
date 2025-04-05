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

export default function IIUS() {
  return (
    <>
      <BreadCrumb title="Projects" path="/projects/iius" />
      <Title>
        Projects <hr />
      </Title>

      <SubTitle>IIUS – 2008</SubTitle>
      <TableWrapper>
        <StyledTable>
          <thead>
            <tr>
              <th>Sl. No.</th>
              <th>Component</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>Primary treatment</td></tr>
            <tr><td>2</td><td>Secondary treatment (Pre aeration - 450 kLD, Anoxic tank – 1.2 MLD, Aeration tank – 2.2 MLD)</td></tr>
            <tr><td>3</td><td>MBR Plant – 2.2 MLD</td></tr>
            <tr><td>4</td><td>RO Plant – 2.2 MLD</td></tr>
            <tr><td>5</td><td>MVRE – 500 kLD</td></tr>
            <tr><td>6</td><td>Secure Land Fill (SLF)</td></tr>
          </tbody>
        </StyledTable>
      </TableWrapper>
    </>
  );
}
