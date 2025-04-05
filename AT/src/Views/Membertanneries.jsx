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
background: #00911a;
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
    { id: 4, name: "AMJAD ARSHAD & CO 'B' UNIT", location: "S. NO. 297/2, PERIYAVARIKKAM VILLAGE, AMBUR - 635 811" },
    { id: 5, name: "ANFA TANNING CO", location: "S. NO. 297/2, PERIYAVARIKKAM VILLAGE, AMBUR - 635 811" },
    { id: 6, name: "AQEEL LEATHERS TANNERY", location: "S.NO. 28, 29, 30/1, THUTHIPET, AMBUR - 635 811" },
    { id: 7, name: "C.ABDUL RAHMAN 'B' TANNERY", location: "S. NO. 280/2 & 283, VENKATASAMUDIRAM, THUTHIPET - 635 811" },
    { id: 8, name: "DELTA LEATHERS", location: "VENKATASAMUDIRAM ROAD, THUTHIPET - 635 811" },
    { id: 9, name: "DECCON TANNING COMPANY", location: "THUTHIPET, AMBUR - 635 802" },
    { id: 10, name: "DEVI LEATHERS", location: "S. NO. 172, CHINNAVARIKAM VILLAGE, THUTHIPET - 635 811" },
    { id: 11, name: "ESAAR TANNING CO", location: "S. NO. 91,92/2B, GUDIYATHAM ROAD, PERIYAVARIKAM, THUTHIPET - 635 811" },
    { id: 12, name: "FARIDA LEATHER CO (T.AZEEZUR RAHMAN)", location: "GUDIYATHAM ROAD, PERIYAVARIKAM, THUTHIPET - 635 811" },
    { id: 13, name: "HINDUSTAN SKINS TANNING CO", location: "S.NO. 82, 83, THUTHIPET, AMBUR - 635 811" },
    { id: 14, name: "KENZA TANNERS", location: "PERIYAVARIKAM, THUTHIPET - 635 811" },
    { id: 15, name: "KKSK HIDES PRIVATE LIMITED", location: "S. NO. 102, GUDIYATHAM ROAD, THUTHIPET - 635 811" },
    { id: 16, name: "K2 INTERNATIONAL", location: "S. NO. 2/150, PERIYAVARIKKAM, THUTHIPET POST, AMBUR - 635 811" },
    { id: 17, name: "MIDDLE EAST TANNING CO", location: "S. NO. 12/1, L. MANKUPPAM, DEVALAPURAM, THUTHIPET - 635 811" },
    { id: 18, name: "N.ABDUL WAJID & CO", location: "S. NO. 301/1, PERIYAVARIKKAM, THUTHIPET - 635 811" },
    { id: 19, name: "N.K.G.LEATHERS", location: "299, PERIYAVARIKKAM, AMBUR - 635 811" },
    { id: 20, name: "N.M.JAFFAR TANNING IND", location: "317, EIDGAH ROAD, L. MANGKUPPAM, AMBUR - 635 802" },
    { id: 21, name: "N.M.HASIM & CO WET UNIT", location: "S. NO. 79/2A 2, GUDIYATHAM ROAD, THUTHIPET - 635 811" },
    { id: 22, name: "N.M.H LEATHERS LLP", location: "S. NO. 76/1, THUTHIPET VILLAGE, GUDIYATHAM ROAD, AMBUR - 635 811" },
    { id: 23, name: "NADEEM LEATHERS", location: "S. NO. 101, 100/2, 89 & 92, GUDIYATHAM ROAD, THUTHIPET - 635 811" },
    { id: 24, name: "NATIONAL LEATHERS", location: "S. NO. 292, 213 & 291/3, VENKATASAMUDIRAM ROAD, THUTHIPET - 635 811" },
    { id: 25, name: "PERFECT SHOE FABRIC", location: "S. NO. 142 & 143/3, KANDRAMPALLI ROAD, THUTHIPET" },
    { id: 26, name: "PRAKASH IMPEX (OKB)", location: "S.NO. 25/2 & 26/2, THUTHIPET VILLAGE, AMBUR - 635 811" },
    { id: 27, name: "RAAFI LEATHER 'A' TANNERY", location: "299, PERIYAVARIKKAM, AMBUR - 635 811" },
    { id: 28, name: "R.B.TANNING COMPANY", location: "S. NO. 90/4, CHINNAVARIKAM VILLAGE, THUTHIPET - 635 811" },
    { id: 29, name: "R.N. LEATHERS", location: "S. NO. 293/2, 300/5, PERIYAVARIKKAM VILLAGE, THUTHIPET - 635 811" },
    { id: 30, name: "SYED LEATHERS", location: "S. NO. 81/1,THUTHIPET - 635 811" },
    { id: 31, name: "THABASIYA TANNING IND", location: "S.NO. 92/A,93,94,76/1,77/1,78/1,2A & 79/1, THUTHIPET - 635 811" },
    { id: 32, name: "V.MOHAMMED FASIULLAH & CO", location: "S. NO. 149/2, PERIYAVARIKKAM VILLAGE, THUTHIPET, AMBUR - 635 811" },
    { id: 33, name: "ZIA ENTERPRISES", location: "S. NO. 64/3, 63/1 & 62/1, THUTHIPET VILLAGE, GUDIYATHAM ROAD, AMBUR - 635 811" },
    { id: 34, name: "ZUBAIDA TANNING INDUSTRY", location: "S. NO. 64/3, 63/1 & 62/1, THUTHIPET VILLAGE, GUDIYATHAM ROAD, AMBUR - 635 811" },
    { id: 35, name: "NAPS India Foot ware Division", location: "S.F No.281/2B 1A part, 280/2B part Thuthipet Village Ambur-635811" },
    { id: 36, name: "S.G.R INTERNATIONAL", location: "SF NO.300/8B & 284/2, PERIYAVARIKKAM VILLAGE, AMBUR - 635 811" },
    { id: 37, name: "THE PREMIER TANNERY", location: "S.F. NO. 173, PERIYAVARIKKAM, THUTHIPET, AMBUR - 635 811" },
    { id: 38, name: "THIRUMALAI TANNERS", location: "S.F. NO. 172/3, PERIYAVARIKKAM, THUTHIPET, AMBUR - 635 811" },
    { id: 39, name: "O.K LEATHER EXPORT", location: "KANDRAMPALLI ROAD,AMBUR - 635 811" },
    { id: 40, name: "IRBAZ LEATHERS CO. LTD.", location: "NO. SF - 83, GUDIYATHAM ROAD, CHINNAVARIKAM, AMBUR - 635 811" },
    { id: 41, name: "M.M ANWARULLAH 'B'TANNERY", location: "L.MANGKUPPAM -635 811" },
    { id: 42, name: "M.MD. HABIBULLAH & CO", location: "S. NO. 14 & 16/1, VENKATASAMUDIRAM VILLAGE, THUTHIPET - 635 811" },
    { id: 43, name: "NAZEER BASHEER & CO", location: "S. NO. 22/1 B, L. MANKUPPAM, THUTHIPET - 635 811" },
    { id: 44, name: "S.ABDUL SALAM SAHIB & CO", location: "L.MANGKUPPAM -635 811" },
    { id: 45, name: "N.M.A LEATHERS", location: "SF.No. 288/2,291/A, Periyavarikkam Village Ambur- 635811" },
    { id: 46, name: "VENTURE INDIA & CO", location: "SF NO. 291/1B,Periyavarikkam Village Ambur - 635811" },
    { id: 47, name: "A.S.NISAR AHMED & CO", location: "S. NO. 1, VENKATASAMUDIRAM ROAD, THUTHIPET - 635 811" }
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
