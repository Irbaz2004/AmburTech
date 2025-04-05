import React from 'react'
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
    font-size:.8rem;
  }
`;

export default function Processdescription() {
  return (
    <>
      <BreadCrumb title="Process Description" path="/servicepage/processdescription" />
      <Title>
      Process Description
        <hr />
      </Title>
      <SubTitle>
      Treatment Methodology
      </SubTitle>
      <Para>
      The raw effluent received from the member tanneries containing pollutant load expressed in terms of pH, TSS, BOD, COD and TDS. This needs to be treated for the removal of objectionable pollutants as prescribed by the Tamil Nādu Pollution Control Board.
      </Para>
      <Para>
      The treatment scheme involves combination of physical and chemical treatment process in the primary system, biological treatment with Activated Biological System followed by UF system and RO process for recovering good water and evaporator for the treatment of reject drawn from the RO. A brief description of the process is as follows.
      </Para>

        <SubTitle>
            Primary Treatment
      </SubTitle>
      <Para>
      Effluent is received from the member tanners and is collected in a collection tank. The primary system comprises screening, equalization, neutralization, flocculation, settling using Clariflocculator and sludge removal. This primary system includes components like collection tank, drum screen, equalization tank, chemical dosing system, clariflocculator. In this process pH and TSS are brought under the limit; but still BOD, COD and TDS levels are higher than the norms prescribed by TNPCB. Hence the effluent is treated with biological system in the subsequent process.
      </Para>
      <SubTitle>
      Filterpress
      </SubTitle>
        <Para>
        Sludge drawn from Clariflocculator and pre settler is dewatering in Filterpress and the collected cakes are dumped in SLF.
        </Para>
        <SubTitle>
        Aeration Tank
        </SubTitle>
        <Para>
        In the aeration tank, wastewater is mixed with micro organisms in presence of dissolved oxygen. The mixed liquor suspended solids concentration is maintained at levels of 5,000 mg/l – 7,000 mg/l. The floor of the aeration tank is covered with submerged fine bubble disk type air diffusers. Compressed air is supplied through two positive displacements (roots type) air blowers (Six duty + one standby) located outside the tank. The submerged air diffusers will provide the oxygen required by the microorganisms and keep the solids well mixed. The blower is sized to maintain dissolved oxygen level of approximately 1.5 - 2.0 mg/l in the bioreactor tank. The microorganisms will assimilate organic impurities and reduce the BOD and COD in the wastewater. The aerobic tank is sized in order to both oxidize the organic pollutants and nitrify the ammonia present in the wastewater.

        </Para>
        <SubTitle>
        Activated Sludge Process (ASP)
        </SubTitle>
        <Para>
        Aerated effluent taken to Secondary Clarifier for the Separation of the clear effluent from the biomass and settled MLSS recycled back to Aeration tank with pumps.
        </Para>
        <Para>
        Reactor Clarifier for the fine tuning of clarity using bio flocculants, Multimedia filters, Softener resins for the removal hardness and UF membranes for the finer filtration. Here TSS and BOD are controlled to fit RO, but the TDS value still remains untreated and is higher than the limit prescribed by the TNPCB. Hence the next process Reverse Osmosis helps to bring down TDS value less than 500 ppm.
        </Para>
        <SubTitle>
            Reverse Osmosis
        </SubTitle>
        <Para>
        The RO system includes feed tank, cartridge filter, pH correction, anti scalant dosing, and high pressure pumps. The effluent passes through two stage RO system comprising spiral wound membranes with inter stage turbocharger for pressure recovery. 70% of good quality water called permeate is recovered and is redistributed to member tanners.
        </Para>
        <SubTitle>
        Reject RO
        </SubTitle>
        <Para>
        The Reject water from RO Second Stage collected in the 3rd Stage RO Feed Tank is drawn by horizontal pumps having a capacity 48 m3/hr @ 40 meter head is passed through Cartridge filter having capacity of 42 m3/hr.
        </Para>
        <Para>
        Hydrochloric acid is being injected to the feed stream to maintain the feed water LSI and to minimize the scaling on the tail-end elements due to reject concentration of salts.
        </Para>
        <Para>
        Membrane manufacturer recommended Antiscalant is being injected to the feed stream to obtain a maximum recovery of 30%.
        </Para>
        <SubTitle>
        Evaporator
        </SubTitle>
        <Para>
        The reject of the RO is concentrated with pollutant loads and need to be treated with evaporator system. The Multiple effect Evaporator Comprises of 7 effect calandrias 3 Falling Film and 4 forced Circulation for concentrating the reject water and thereby recovering condensate water of good quality. The liquor is further concentrated with centrifuge followed by ATFD., thereby achieving Zero Liquid Discharge.
        </Para>
    </>
  )
}
