import React from "react";
import styled from "styled-components";
import { BreadCrumb } from "../../Components/BreadCrumb";



const TableContainer = styled.div`
  margin: 80px 5vw;
  position: relative;
  top: 10vh;
  max-height: 80vh;
 

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
    width: 670px;
    border: 2px solid #00911a;
    margin-top: 5px;
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
      top: 60px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    hr{
    width: 200px;}
  }
`;

const Par = styled.p`
    font-size: .9rem;
    font-family: "Gantari", serif;
    padding: 10px 0;
    color:gray;
    @media (max-width: 768px) {
    font-size: .7rem;
    width: 500%;
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

export const Statisticalprofile = () => {
  return (
    <>
      <BreadCrumb title="Statistical Profile" path="/about/statisticalprofile" />
      <Title>Statistical Profile of Tanning Industry in Amburtec (Thuthipet CETP)
        <hr />
      </Title>
      <TableContainer>
        <StyledTableWrapper>
          <StyledTable>
          <thead>
  <tr>
    <th>S.No</th>
    <th>Type of Product</th>
    <th>No. of Units</th>
    <th>No. of Workers Employed</th>
    <th>Estimated Annual Export Turnover (Rs. in Crores)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>1</td>
    <td>Raw to Finish</td>
    <td>21</td>
    <td>313</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Raw to Semi-Finish</td>
    <td>18</td>
    <td>235</td>
    <td>2914.00</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Semi-Finish to Finish</td>
    <td>8</td>
    <td>152</td>
  </tr>
  <tr>
    <td></td>
    <td>Total</td>
    <td>47</td>
    <td>700</td>
    <td>2914.00</td>
  </tr>
  <tr>
    <Par>*The Data excludes Units in Ambur Industrial</Par>
  </tr>
</tbody>


          </StyledTable>
        </StyledTableWrapper>
      </TableContainer>
    </>
  );
};
