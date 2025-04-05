import React from "react";
import styled from "styled-components";
import { BreadCrumb } from ".././Components/BreadCrumb";

const Title = styled.h1`
  padding: 20px 5vw;
  font-size: 1.6rem;
  font-family: "Gantari", serif;
  position: relative;
  margin-top: 130px;

  hr {
    width: 70px;
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
      width: 40px;}
  }
`;

const SubTitle = styled.h2`
  text-decoration: underline;
  padding: 20px 5vw;
  font-size: 1.2rem;
  font-family: "Gantari", serif;
  position: relative;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: .8rem;
  }
`;

const List = styled.ol`
  padding: 10px 80px;
  font-size: 1rem;
  font-family: "Gantari", serif;
  color: black;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 10px 20px;
  }
`;

const ListItem = styled.li`
  margin-bottom: 5px;
`;

export default function Projects() {
  return (
    <>
      <BreadCrumb title="Projects" path="/projects" />
      <Title>
        Projects <hr />
      </Title>

      <SubTitle>IFLADP - 2018</SubTitle>
      <List>
        <ListItem>1. Modification in collection and conveyance system</ListItem>
        <ListItem>2. Manhole Jetting & Suction machine with portable power</ListItem>
        <ListItem>3. Mechanical screen at raw effluent inlet X 2No's.</ListItem>
        <ListItem>4. OHR Mixer in Equalization tank X 68No's.</ListItem>
        <ListItem>5. Primary Clari-flocculator in SS.</ListItem>
        <ListItem>6. New Filter Presses in CETP(3ton) X 2no's</ListItem>
        <ListItem>7. Aeration and Secondary Clarifier system</ListItem>
        <ListItem>8. Tertiary Treatment system</ListItem>
        <ListItem>9. Disc Screen before UF-RO</ListItem>
        <ListItem>10. Installation of New UF</ListItem>
        <ListItem>11. New RO for 1 MLD</ListItem>
        <ListItem>12. Energy Recovery Devices for RO systems - 2.2MLD</ListItem>
        <ListItem>13. New Softening system prior to third stage RO</ListItem>
        <ListItem>14. Third Stage RO</ListItem>
        <ListItem>15. MEE with accessories(Boiler, Cooling Tower, etc)</ListItem>
        <ListItem>16. Additional Laboratory Instruments</ListItem>
        <ListItem>17. Transformer and DG for additional capacity</ListItem>
        <ListItem>18. 2 MW Solar Power Plant</ListItem>
      </List>

      <SubTitle>IIUS – 2008</SubTitle>
      <List>
        <ListItem>1. Primary treatment</ListItem>
        <ListItem>2. Secondary treatment (Pre aeration - 450 kLD, Anoxic tank – 1.2 MLD, Aeration tank – 2.2 MLD)</ListItem>
        <ListItem>3. MBR Plant – 2.2 MLD</ListItem>
        <ListItem>4. RO Plant – 2.2 MLD</ListItem>
        <ListItem>5. MVRE – 500 kLD</ListItem>
        <ListItem>6. Secure Land Fill (SLF)</ListItem>
      </List>

      <SubTitle>Establishment of CETP – 1995</SubTitle>
      <List>
        <ListItem>1. Pipelines conveyance</ListItem>
        <ListItem>2. Pump station and Pump well</ListItem>
        <ListItem>3. Pretreatment</ListItem>
        <ListItem>4. Chemical treatment</ListItem>
        <ListItem>5. Aeration tank</ListItem>
        <ListItem>6. Secondary treatment</ListItem>
      </List>

      <SubTitle>Proposal under STEP Scheme – 2025</SubTitle>
      <List>
        <ListItem>1. 1000 kg/hr Paddle dryer</ListItem>
        <ListItem>2. OCEMS at 8TPH Boiler stack</ListItem>
        <ListItem>3. 500 kVAR X 2 APFC Panel with 300A X 2 Harmonic Filter Unit</ListItem>
        
      </List>
    </>
  );
}
