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

export default function IFLADP() {
  return (
    <>
      <BreadCrumb title="Projects" path="/projects/ifladp" />
      <Title>
        Projects <hr />
      </Title>

      <SubTitle>IFLADP - 2018</SubTitle>
      <TableWrapper>
        <StyledTable>
          <thead>
            <tr>
              <th>Sl. No.</th>
              <th>Component</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>Modification in collection and conveyance system</td></tr>
            <tr><td>2</td><td>Manhole Jetting & Suction machine with portable power</td></tr>
            <tr><td>3</td><td>Mechanical screen at raw effluent inlet X 2No's.</td></tr>
            <tr><td>4</td><td>OHR Mixer in Equalization tank X 68No's.</td></tr>
            <tr><td>5</td><td>Primary Clari-flocculator in SS.</td></tr>
            <tr><td>6</td><td>New Filter Presses in CETP(3ton) X 2no's</td></tr>
            <tr><td>7</td><td>Aeration and Secondary Clarifier system</td></tr>
            <tr><td>8</td><td>Tertiary Treatment system</td></tr>
            <tr><td>9</td><td>Disc Screen before UF-RO</td></tr>
            <tr><td>10</td><td>Installation of New UF</td></tr>
            <tr><td>11</td><td>New RO for 1 MLD</td></tr>
            <tr><td>12</td><td>Energy Recovery Devices for RO systems - 2.2MLD</td></tr>
            <tr><td>13</td><td>New Softening system prior to third stage RO</td></tr>
            <tr><td>14</td><td>Third Stage RO</td></tr>
            <tr><td>15</td><td>MEE with accessories (Boiler, Cooling Tower, etc)</td></tr>
            <tr><td>16</td><td>Additional Laboratory Instruments</td></tr>
            <tr><td>17</td><td>Transformer and DG for additional capacity</td></tr>
            <tr><td>18</td><td>2 MW Solar Power Plant</td></tr>
          </tbody>
        </StyledTable>
      </TableWrapper>
    </>
  );
}
