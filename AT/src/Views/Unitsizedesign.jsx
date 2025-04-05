import React from 'react'
import styled from 'styled-components';
import { BreadCrumb } from '.././Components/BreadCrumb';


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
       background: #00911a;
    color: white;
  }
 td:hover {
    background: black; /* Light greenish-blue shade */
    transition: background 0.3s ease-in-out;
    color: white;
}
`;

export default function Unitsizedesign() {
    const data = [
        { no: 1, name: "Bar Screen", units: 1, dimensions: "3.0m x 1.5m x 0.5m + 3.05m" },
        { no: 2, name: "Collection Tank", units: 1, dimensions: "12.0m dia x 2.45m + 4.38m" },
        { no: 3, name: "Drum Screen", units: 2, dimensions: "120m3/hr Dia x 1500mm" },
        { no: 4, name: "Pre Settler", units: 1, dimensions: "6.0m x 6.0m x 3.0m" },
        { no: 5, name: "Equalization Tank", units: 1, dimensions: "36.0m X 17.8m X 2.3m +0.7m" },
        { no: 6, name: "Equalization Tank OHR", units: 68, dimensions: "0.2 Dia" },
        { no: 7, name: "Equalization Tank OHR Blower", units: 2, dimensions: "75kW" },
        { no: 8, name: "Chemical House", units: 1, dimensions: "11.0m x 7.0m (G + F)" },
        { no: 9, name: "PAC Tanks", units: 2, dimensions: "1.75m x 1.75m x 2.0m + 0.3m" },
        { no: 10, name: "Lime Tanks", units: 2, dimensions: "1.75m x 1.75m x 2.0m + 0.3m" },
        { no: 11, name: "Polyelectrolyte Dosing Tank", units: 1, dimensions: "1000 Litre Sintex" },
        { no: 12, name: "HCL Storage Tank", units: 1, dimensions: "15KL" },
        { no: 13, name: "PAC Storage Tank", units: 1, dimensions: "20KL" },
        { no: 14, name: "Flash Mixer", units: 1, dimensions: "1.5m x 1.5m x 2.0m + 0.5m" },
        { no: 15, name: "Primary Clariflocculator", units: 1, dimensions: "12.2m dia x 4.1m + 0.4m" },
        { no: 16, name: "Filter Press Sludge Feed Tank", units: 1, dimensions: "5.0m x 5.0m x 3.0m" },
        { no: 17, name: "Filterate Holding Tank", units: 1, dimensions: "5m x 5m x 3m" },
        { no: 18, name: "Filter Press", units: 1, dimensions: "1200x1200 (Plate 93Nos)" },
        { no: 19, name: "Filter Press", units: 1, dimensions: "915x915 (Plate 93Nos)" },
        { no: 20, name: "Filter Press Sludge Feed Tank", units: 1, dimensions: "6.5m x 7.4m x 4.5m" },
        { no: 21, name: "Filterate Holding Tank", units: 1, dimensions: "5m x 5m x 4m" },
        { no: 22, name: "Filter Press III", units: 1, dimensions: "1200x1200 (Plate 93Nos)" },
        { no: 23, name: "Filter Press IV", units: 1, dimensions: "1200x1200 (Plate 93Nos)" },
        { no: 24, name: "Leachate Collection", units: 1, dimensions: "5.0m x 5.0m x 3.0m" },
        { no: 25, name: "Aeration Blowers", units: 6, dimensions: "75kW" },
        { no: 26, name: "Aeration Tank Diffusers", units: 2100, dimensions: "6.6 cu.m/Diffuser" },
        { no: 27, name: "Aeration Tank", units: 2, dimensions: "40m x 12m x 5.5m" },
        { no: 28, name: "Secondary Clarifier", units: 1, dimensions: "16m Dia x 2.75m + 0.5m" },
        { no: 29, name: "Secondary Outlet Tank", units: 1, dimensions: "8.5m x 8.5m x 3m" },
        { no: 30, name: "Tertiary Feed Tank", units: 1, dimensions: "6.0m x 6.0m x 6.0m" },
        { no: 31, name: "Tertiary Clarifier", units: 1, dimensions: "12m Dia x 3.75m x 0.5m" },
        { no: 32, name: "Tertiary Outlet Tank", units: 1, dimensions: "8.5m x 8.5m x 3m" },
        { no: 33, name: "Chemical Preparation Tank", units: 3, dimensions: "2.0m x 2.0m x 2.5m" },
        { no: 34, name: "Flash Mixer", units: 1, dimensions: "2.0m x 2.0m x 2.0m" },
        { no: 35, name: "Reactive Clarifier", units: 1, dimensions: "12m Dia x 3.5m" },
        { no: 36, name: "Dual Media Filter", units: 1, dimensions: "2.5m x 2.5m" },
        { no: 37, name: "Dual Media Filter", units: 2, dimensions: "3.0m x 3.0m" },
        { no: 38, name: "DMF Feed Tank", units: 1, dimensions: "6.0m x 6.0m x 6.0m" },
            { no: 39, name: "Hardness Removal Feed Tank", units: 1, dimensions: "5.0m x 5.0m x 4.5m" },
            { no: 40, name: "Hardness Removal Product Tank", units: 1, dimensions: "2.5m x 5m x 4m" },
                    
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
