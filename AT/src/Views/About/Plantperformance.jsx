import React from 'react'
import styled from "styled-components";
import { BreadCrumb } from "../../Components/BreadCrumb";
import PPG from "../../assets/PPG.png"



const TableContainer = styled.div`
  margin: 80px 5vw;
  position: relative;
  top: 10vh;
  max-height: 80vh;
  overflow-x: auto; /* Enables horizontal scrolling on small screens */

    @media (max-width: 768px) {
    margin: 0px 5vw;
`;

const Title = styled.h1`
  padding: 20px 5vw;
  font-size: 1.6rem;
  font-family: "Gantari", serif;
  position: relative;
  top: 130px;

     hr {
    width: 170px;
    border: 2px solid #00911a;
    margin-top: 5px;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
      top: 60px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;

    hr {
    width: 100px;
    
  }
`;

const Para = styled.p`
    font-size: 1rem;
    font-family: "Gantari", serif;
    padding: 10px 80px;
    color:gray;
      position: relative;
  top: 130px;
    @media (max-width: 768px) {
 font-size: .8rem;
    padding: 10px 20px;   
    top: 40px;
    }
    `;


const StyledTableWrapper = styled.div`
  width: 100%;
  overflow-x: auto; /* Enables scrolling for tables on small screens */
  margin-bottom: 20px;
`;

const StyledTable = styled.table`
  width: 100%;
    border-collapse: collapse;
    border-spacing: 0
  min-width: 600px; /* Ensures table doesn't shrink too much */

  th, td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
    font-family: "Gantari", serif;
    white-space: nowrap; /* Prevents text wrapping */
  }

  th {
    background: #00911a;
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


export default function Plantperformance() {
  return (
    <>
      <BreadCrumb title="Plant Performance" path="/about/statisticalprofile" />
          <Title>Plant Performance
            <hr />
          </Title>
          <Para>The CETP is being operated and maintained efficiently and so as to achieve the Zero Liquid Discharge (ZLD) standard in compliance to the directions of the TNPCB.</Para>
          

          <TableContainer>
            <StyledTableWrapper>
              <StyledTable>
  <thead>
    <tr>
      <th>S.No</th>
      <th>Parameter</th>
      <th>Raw Effluent</th>
      <th>Quality of Water Recycling to Tanneries</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>pH</td>
      <td>4.0 – 11.0</td>
      <td>6.5 – 7.5</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Total Suspended Solids (TSS)</td>
      <td>3,000 – 4,500</td>
      <td>BDL</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Total Dissolved Solids (TDS)</td>
      <td>17,000 – 22,000</td>
      <td>450 - 600</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Biological Oxygen Demand (BOD)</td>
      <td>1,500 – 1,800</td>
      <td>BDL</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Chemical Oxygen Demand (COD)</td>
      <td>4,000 – 5,500</td>
      <td>10 – 15</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Ammonical Nitrogen (NH3)</td>
      <td>450 - 600</td>
      <td>20 - 30</td>
    </tr>
  </tbody>

              </StyledTable>
            </StyledTableWrapper>
          </TableContainer>
<ImageContainer>
<StyledImage src={PPG} alt="Plant Performance Graph" />
</ImageContainer>
      
    </>
  )
}
