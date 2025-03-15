import React from 'react';
import styled from "styled-components";
import { BreadCrumb } from "../../Components/BreadCrumb";

const Title = styled.h1`
  padding: 20px 5vw;
  font-size: 1.6rem;
  font-family: "Gantari", serif;
  position: relative;
  top: 130px;

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
    font-size: 1rem;
    hr{
    width: 120px;
    }
  }
`;

const TableContainer = styled.div`
  margin: 80px 5vw;
  position: relative;
  top: 10vh;
  max-height: 80vh;
  overflow-x: auto;

  @media (max-width: 768px) {
    margin: 0px 5vw;
  }
`;
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #f4f4f4;
  font-size: 14px;

  th, td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
  }

  th {
    background: red;
    color: white;
  }

  tr:nth-child(even) {
    background: white;
  }

  tr:hover {
    background: black; /* Light greenish-blue shade */
    transition: background 0.3s ease-in-out;
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const data = {
    headers: [
      "QUANTITY",
      "2023-2024",
      "2022-2023",
      "2021-2022",
      "2020-2021",
      "2019-2020",
      "2018-2019",
      "2017-2018",
      "2016-2017",
      "2015-2016",
      "2014-2015",
      "2013-2014"
    ],
    rows: [
      ["TOTAL FLOW (M3/Year)", 238570, 219902, 210840, 180283, 244807, 246440, 247470, 242338, 245419, 253272, 307441],
      ["AVERAGE FLOW (M3/day)", 653, 602, 577, 494, 670, 675, 678, 664, 672, 694, 842],
      ["Total Suspended Solid (mg/l)", "Inlet", 3337, 3497, 3163, 3520, 3582, 3409, 4159, 3506, 3757, 3909, 2854],
      ["", "Outlet", "BDL", "BDL", "BDL", "BDL", "BDL", "BDL", "BDL", "BDL", "BDL", "BDL", "BDL"],
      ["", "Removed", 3337, 3497, 3163, 3520, 3582, 3409, 4159, 3506, 3757, 3909, 2854],
      ["BOD 27˚C (mg/l)", "Inlet", 1717, 1807, 1743, 1732, 1790, 1806, 1739, 1630, 1615, 1677, 920],
      ["", "Outlet", "BDL", "BDL", "BDL", "BDL", "BDL", "BDL", "BDL", "BDL", "BDL", "BDL", "BDL"],
      ["", "Removed", 1717, 1807, 1743, 1732, 1790, 1806, 1739, 1630, 1615, 1677, 920],
      ["COD (mg/l)", "Inlet", 5070, 5345, 4530, 4595, 5371, 5714, 4995, 4772, 5400, 5020, 3162],
      ["", "Outlet", "BDL", "BDL", "BDL", "BDL", "BDL", "BDL", "BDL", "BDL", "BDL", "BDL", "BDL"],
      ["", "Removed", 5070, 5345, 4530, 4595, 5371, 5714, 4995, 4772, 5400, 5020, 3162],
      ["Sludge Produced (DRY Tonnes/annum)", 613, 573.5, 571, 623, 1042.1, 499.91, 3072, 1478, 2718, 3516, 1042],
      ["Salt Produced (DRY Tonnes/annum)", 1682, 1054, 1024, 1067, 1406, 1321, 1326, 1352, 711, 885, 954],
      ["EFFECTIVENESS MEASURES", "Flow Treated", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
      ["", "TSS Removed", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
      ["", "BOD Removed", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
      ["", "COD Removed", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
      ["EFFICIENCY MEASURES", "Power Consumption (kWh)", 2815454, 2259111, 2433774, 2230940, 2933425, 3662360, 4258590, 4212130, 4177008, 3311128, 1316964],
      ["", "Power Consumed (kWh) Per m3 treated", 11.80, 10.27, 11.54, 12.37, 11.98, 14.86, 17.20, 17.38, 17.0, 13, 4.28],
      ["", "Power Consumed (kWh) Per tonne of BOD Removed", 1639.75, 1250, 1396, 1288, 1638, 2027, 1739, 2584, 2586, 1974, 1431.4]
    ]
  };
  

export default function Treatmentplantdata() {
  return (
    <>
      <BreadCrumb title="Treatment Plant Data" path="/about/treatmentplantdata" />
      <Title>Treatment Plant Data
        <hr />
      </Title>
      <TableContainer>
        <StyledTable>
          <thead>
            <tr>
              {data.headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </TableContainer>
    </>
  );
}
