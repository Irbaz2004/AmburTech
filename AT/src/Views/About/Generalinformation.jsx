import React from "react";
import styled from "styled-components";
import { BreadCrumb } from "../../Components/BreadCrumb";

const TableContainer = styled.div`
  margin: 80px 5vw;
  position: relative;
  top: 10vh;
  height: 80vh;
  overflow-x: auto; /* Enables horizontal scrolling on small screens */

    @media (max-width: 768px) {
    margin: 0px 5vw;
`;

const Title = styled.h1`
  padding: 20px 5vw;
  font-size: 1.5rem;
  font-family: "Gantari", serif;
  position: relative;
  top: 140px;
  
      hr {
    width: 170px;
    border: 2px solid red;
    margin-top: 5px;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
      top: 60px;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const Par = styled.p`
    font-size: .9rem;
    font-family: "Gantari", serif;
    padding: 10px 0;
    color:gray;
    @media (max-width: 768px) {
 font-size: .8rem;
    padding: 10px 20px;
    }
    `;


const StyledTableWrapper = styled.div`
  width: 100%;
  overflow-x: auto; /* Enables scrolling for tables on small screens */
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 600px; /* Ensures table doesn't shrink too much */

  th, td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
    font-family: "Gantari", serif;
    white-space: nowrap; /* Prevents text wrapping */
  }

  th {
    background: red;
    color: white;
  }
    td:hover {
    background: black; /* Light greenish-blue shade */
    transition: background 0.3s ease-in-out;
    color: white;
}

  @media (max-width: 768px) {
    font-size: 14px;

    th, td {
      padding: 8px;
    }
  }

  @media (max-width: 480px) {
    font-size: 12px;

    th, td {
      padding: 5px;
    }
    
  }
`;

const GeneralInformation = () => {
  return (
    <>
      <BreadCrumb title="General Information" path="/about/generalinformation" />
      <Title>General Information
        <hr />
      </Title>
      <TableContainer>
        <StyledTableWrapper>
          <StyledTable>
            <thead>
              <tr>
                <th colSpan="1">Name of the Common Effluent Treatment Plant (CETP) Company</th>
                <th>Ambur Tannery Effluent Treatment Co Ltd., (Amburtec Thuthipet CETP)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Total number of tanneries as per design</td><td>47</td></tr>
              <tr><td>Number of Tanneries operating*</td><td>35</td></tr>
              <tr><td>CETP commissioned on</td><td>10th March 1993</td></tr>
              <tr><td>Total production quantity from tanneries as per design</td><td>77,167 Kg/day</td></tr>
              <tr><td>Raw material processed</td><td>Buffalo, Calf, Cow hides and Skins</td></tr>
              <tr><td>Number of tanneries doing Raw to Semi-Finish of Finish*</td><td>39</td></tr>
              <tr><td>Number of tanneries doing Semi-Finish to Finish*</td><td>08</td></tr>
              <tr><td>Designed flow rate to the CETP</td><td>2,400 Cubic meter per day</td></tr>
              <tr><td>Capacity of Zero Liquid Discharge plant</td><td>2,219 Cubic meter per day</td></tr>
              <tr><td>Current flow rate to the CETP*</td><td>800 Cubic meter per day</td></tr>
              <tr><td>Current CETP utilization capacity*</td><td>36%</td></tr>
            
              <Par>* As On 2024</Par>

            </tbody>
          </StyledTable>
        </StyledTableWrapper>
      </TableContainer>
    </>
  );
};

export default GeneralInformation;
