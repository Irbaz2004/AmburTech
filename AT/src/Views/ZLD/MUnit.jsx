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
       background: #00911a;
    color: white;
  }
 td:hover {
    background: black; /* Light greenish-blue shade */
    transition: background 0.3s ease-in-out;
    color: white;
}
`;

export default function MUnit() {
  const data = [
    {no:1, name:"MEE + ATFD Building", units: 1, dimensions: "34.5m x 9m x 22m"},
    { no: 2, name: "MEE Panel Room", units: 1, dimensions: "10m x 8m x 4m" },
    { no: 3, name: "MEE Feed Tank", units: 1, dimensions: "10.35m x 12m x 3.3m" },
    { no: 4, name: "Condensate Storage Tank", units: 1, dimensions: "13.45m x 3.5m x 3.3m" },
    { no: 5, name: "Cooling Tower", units: 1, dimensions: "7.7m x 10.29m x 2.06m" },
    { no: 6, name: "Multiple Effect Evaporator (7 Effect (3FF+4FC))", units: 1, dimensions: "700 KLD" },
    { no: 7, name: "ATFD", units: 1, dimensions: "1.0 KL/Hr" },
    { no: 8, name: "ATFD Feed Tank", units: 1, dimensions: "Inner dia-1750 mm - Height 2100mm" },
    { no: 9, name: "RCC Acid Tank", units: 1, dimensions: "6.5m x 4.3m x 3.3m" },
    { no: 10, name: "RCC Alkali Tank", units: 1, dimensions: "6.5m x 4.3m x 3.3m" },
    { no: 11, name: "RCC CIP Tank", units: 1, dimensions: "6.5m x 4m x 3.3m" },
    { no: 12, name: "Boiler Feed Water Tank", units: 1, dimensions: "20 KL" },
    { no: 13, name: "Boiler Shed", units: 1, dimensions: "21.45m x 12m x 11m" },
    { no: 14, name: "Coal Yard Shed", units: 1, dimensions: "10m x 10.75m x 5.5m" },
    { no: 15, name: "Salt Godown", units: 1, dimensions: "30.5m x 15.2m x 4.0m" }
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
