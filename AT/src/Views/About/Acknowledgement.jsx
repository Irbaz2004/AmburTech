import React from "react";
import styled from "styled-components";
import { BreadCrumb } from "../../Components/BreadCrumb";

const Title = styled.h1`
  padding: 20px 5vw;
  font-size: 1.6rem;
  font-family: "Gantari", serif;
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
    font-size: 1.3rem;
  }
`;
const Para = styled.p`
  font-size: 1rem;
  font-family: "Gantari", serif;
  padding: 10px 80px;
  color: gray;
  position: relative;
  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 10px 20px;
  }
`;

export default function Acknowledgement() {
  return (
    <>
      <BreadCrumb title="Acknowledgement" path="/about/acknowledgement" />
      <Title>
        Acknowledgement
        <hr />
      </Title>
      <Para>
        The CETP Management wishes to thank the various Institutes and Agencies
        involved in its development.
      </Para>
      <Para>
        The CETP wishes to acknowledge the technical support received from the
        Central Leather Research Institute (CLRI), AMBUR ECONOMIC DEVELOPMENT
        ORGANIZATION (AEDOL), Chennai Environmental Management Company of
        Tanners (CEMCOT), Indian Leather Industry Foundation (ILIFO) and Several
        Other Organizations.
      </Para>
      <Para>
        The CETP also thanks the Ministry of Commerce and Industry (MoC&I),
        Department of Industrial Policy and Promotions (DIPP), Govt. of India,
        and Govt. of Tamilnadu, Council for Leather Exports (CLE), All India
        Skin and Hide Tanners and Merchants Association (AISHTMA) and South
        India Tanners and Dealers Association (SITDA) for their continued
        support.
      </Para>
    </>
  );
}
