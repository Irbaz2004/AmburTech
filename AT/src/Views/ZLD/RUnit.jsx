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
      width: 120px;}
  }
`;

const TableContainer = styled.div`
  margin: 0px 5vw;

  max-height: 80vh;
  overflow-x: auto;

  @media (max-width: 768px) {
    margin: 0px 5vw;
  }
`;
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 1em;
  min-width: 600px;
      font-family: "Gantari", serif;
  text-align: left;

  th, td {
    padding: 12px;
    border: 1px solid #ddd;
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
`;

export default function RUnit() {
  const data = [
    { no: 1, name: "UF Feed Tank", units: 1, dimensions: "6.0m x 6.0m x 4.5m" },
    { no: 2, name: "UF Backwash Cum RO Feed Tank", units: 1, dimensions: "3.2m x 4.6m x 4.5m" },
    { no: 3, name: "Ultra Filtration System", units: 1, dimensions: "2219 KLD (12'' Membranes 54 Nos)" },
    { no: 4, name: "UF Chemical Tanks", units: 3, dimensions: "200L HDPE" },
    { no: 5, name: "Cleaning Chemical Tank", units: 1, dimensions: "5000 Litre Sintex" },
    { no: 6, name: "CIP Storage Tank", units: 1, dimensions: "2.0m x 2.0m x 3.0m" },
    { no: 7, name: "RO-1 Feed Tank", units: 1, dimensions: "6.0m x 4.2m x 4.5m" },
    { no: 8, name: "RO Combined Permeate Tank", units: 1, dimensions: "6.0m x 15m x 4.5m" },
    { no: 9, name: "RO -I & II Reject Tank", units: 1, dimensions: "6.0m x 5.0m x 4.5m" },
    { no: 10, name: "RO-III Feed Tank", units: 1, dimensions: "6.0m x 6.0m x 4.5m" },
    { no: 11, name: "RO3 Reject Tank", units: 1, dimensions: "6.0m x 6.0m x 4.5m" },
    { no: 12, name: "RO 1st Stage 8\" Membranes", units: "20 Vessels", dimensions: "132 Nos" },
    { no: 13, name: "RO 2nd Stage 8\" Membranes", units: "15 Vessels", dimensions: "90 Nos" },
    { no: 14, name: "RO 3rd Stage 8\" Membranes Standby", units: "14 Vessels", dimensions: "84 Nos" },
    { no: 15, name: "Over Head Tank - 5 Lakh Litre", units: 1, dimensions: "500 cu.m" }
  ];
  
      
  return (
    <>
       <BreadCrumb title='Unit Sizes and Design' path='/zld/pretreatment/unitsizedesign' />
                  <Title>Unit Sizes and Design
                    <hr />
                  </Title>

                  <TableContainer>
      <Table>
        <thead>
          <tr>
            <th>SI. No.</th>
            <th>Name of the Treatment Unit</th>
            <th>No. of Units</th>
            <th>Dimensions in metres</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.no}</td>
              <td>{item.name}</td>
              <td>{item.units}</td>
              <td>{item.dimensions}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
    </>
  )
}
