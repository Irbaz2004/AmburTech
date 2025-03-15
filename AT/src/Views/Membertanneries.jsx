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
    width: 300px;
    border: 2px solid red;
    margin-top: 5px;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-top: 60px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    hr{
    width: 180px;}
  }
`;
const TableContainer = styled.div`
  margin: 10px 5vw;
  position: relative;
  height: 80vh;
  overflow-x: auto; /* Enables horizontal scrolling on small screens */
      font-family: "Gantari", serif;


    @media (max-width: 768px) {
    margin: 0px 5vw;
    font-size: 12px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
`;

const TableHead = styled.thead`
background: red;
    color: white;
    `;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #fff;
  }
  &:nth-child(odd) {
    background-color: #fff;
  }
    :hover {
    background: black; /* Light greenish-blue shade */
    transition: background 0.3s ease-in-out;
    color: white;
}
`;

const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
    border: 1px solid #ddd;
`;

const TableData = styled.td`
  padding: 10px;
    border: 1px solid #ddd;
`;

export default function Membertanneries() {
  const tanneryData = [
    { id: 1, name: "A.C.N.LEATHERS", location: "S. NO. 9/2, VENKATASAMUDIRAM VILLAGE, THUTHIPET - 635 811" },
    { id: 2, name: "ABRAR LEATHER EXPORTS", location: "S. NO. 317/1 A, GUDIYATHAM ROAD, THUTHIPET - 635 811" },
    { id: 3, name: "M.ASLAM AEJAZ & CO (Al AZIZ Tanning)", location: "KANDRAMPALLI ROAD, AMBUR - 635 811" },
    { id: 4, name: "AMJAD ARSHAD &  CO ‘B’ UNIT", location: "S. NO. 297/2, PERIYAVARIKKAM VILLAGE, AMBUR - 635 811" },
    { id: 5, name: "ANFA TANNING CO", location: "S. NO. 297/2, PERIYAVARIKKAM VILLAGE, AMBUR - 635 811" },
    { id: 6, name: "AQEEL LEATHERS TANNERY", location: "S.NO. 28, 29, 30/1, THUTHIPET, AMBUR - 635 811" },
    { id: 7, name: "C.ABDUL RAHMAN 'B' TANNERY", location: "S. NO. 280/2 & 283, VENKATASAMUDIRAM, THUTHIPET - 635 811" },
    { id: 8, name: "DELTA LEATHERS", location: "VENKATASAMUDIRAM ROAD, THUTHIPET - 635 811" },
    { id: 9, name: "DECCON TANNING COMPANY", location: "THUTHIPET, AMBUR - 635 802" },
    { id: 10, name: "DEVI LEATHERS", location: "S. NO. 172, CHINNAVARIKAM VILLAGE, THUTHIPET - 635 811" },
  ];
  return (
    <>
      <BreadCrumb title="Beneficiery List" path="/membertanneries" />
      <Title>Beneficiery Tanneries of the CETP
        <hr />
        </Title> 
      <TableContainer>
      <StyledTable>
        <TableHead>
          <tr>
            <TableHeader>Sl. No.</TableHeader>
            <TableHeader>Name of the Tannery</TableHeader>
            <TableHeader>Location</TableHeader>
          </tr>
        </TableHead>
        <tbody>
          {tanneryData.map((tannery, index) => (
            <TableRow key={tannery.id}>
              <TableData>{index + 1}</TableData>
              <TableData>{tannery.name}</TableData>
              <TableData>{tannery.location}</TableData>
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
    </>
  )
}
