import React from 'react'
import styled from 'styled-components';
import Slider from "react-slick";
import { BreadCrumb } from '../../Components/BreadCrumb';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import a1 from "../../assets/AT01.jpg";
import a2 from "../../assets/AT02.jpg";
import a3 from "../../assets/AT03.jpg";
import a4 from "../../assets/AT04.jpg";
import a7 from "../../assets/AT07.jpg";
import a6 from "../../assets/AT06.jpg";

const Title = styled.h1`
  padding: 20px 5vw;
  font-size: 1.6rem;
  font-family: 'Gantari', serif;
  position: relative;
  margin-top: 130px;
  margin-left: -70px;


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

const Paragraph = styled.p`
  font-size: 1rem;
  font-family: "Gantari", serif;
  color: gray;
  line-height: 1.6;
  text-align: start;

  @media (max-width: 768px) {
 font-size: .8rem;
     }
`;

const SliderContainer = styled.div`
  flex: 1;
  max-width: 50%;
  position: relative;
  margin-top: 120px;

  @media (max-width: 1024px) {
    max-width: 100%;
    margin-top: 20px;
  }
`;

const SlideImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;

  @media (max-width: 768px) {
    height: 250px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;
const AboutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  // align-items: center;
  padding: 40px 5vw;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const AboutContent = styled.div`
  flex: 1;
  max-width: 50%;
  padding-right: 20px;

  @media (max-width: 1024px) {
    max-width: 100%;
    padding-right: 0;
    text-align: center;
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
const ListContainer = styled.div`
  padding: 0px 4vw;
  font-size: 1rem;
  list-style-type: disc;
  font-family: 'Gantari', serif;
  position: relative;

  margin-top: 0px;
  margin-left: 20px;
  line-height: 1.6;
  `;
const ListItem = styled.li`
  margin-bottom: 10px;
  font-size: 1rem;
  font-family: 'Gantari', serif;
  position: relative;
  margin-left: 20px;
  line-height: 1.6;
  color: gray;
  list-style-type: disc;
  `;

  const DiffList = styled.div`
  padding: 0px 3vw;
  font-size: 1rem;
  list-style-type: disc;
  font-family: 'Gantari', serif;
  position: relative;
  margin-top: 40px;
  margin-left: 20px;
  line-height: 1.6;
  color: black;
  `;
  const ListItem1 = styled.li`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 1rem;
  font-family: 'Gantari', serif;
  position: relative;
  margin-left: 20px;
  line-height: 1.6;
  color: black;
  list-style-type: disc;
  font-weight: 400;
  }
`;
export default function UniquefeaturesoftheCETP() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  };
  return (
    <>
                <BreadCrumb title="Unique Features of the CETP" path="/about/uniquefeaturesofthecetp" />
      <AboutContainer>
        <AboutContent>
          <Title>Unique Features of the CETP
          <hr />
          </Title>
          <Paragraph>
          The plant is designed to handle about 2219 Cum/day of effluent, making it one of the reputed Common Effluent Treatment Plant (CETP) for tannery wastewater in the country. Since its establishment in the year 1995, the CETP has been constantly upgraded with either partial assistance or matching grant from the Government of India and Tamil nadu.
          </Paragraph>
        </AboutContent>
        <SliderContainer>
          <Slider {...settings}>
            {[a1, a2, a3, a4, a7, a6].map((img, index) => (
              <div key={index}>
                <SlideImage src={img} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </SliderContainer>
      </AboutContainer>

      <SubTitle>Some of the unique features of this treatment facility are</SubTitle>
      <ListContainer>
        <ul>
          <ListItem>  	The formation of Waste Minimization Circles with support of Central Leather Research Institute (CLRI) has created awareness among the CETP member tanners and resulted in reducing the usage of water consumption in the processes of tanning to 30 litres/Kg in compliance to the Corporate Responsibility for Environmental Protection (CREP).</ListItem>
          <ListItem>  	Implementation of Zero Liquid Discharge (ZLD) System of the CETP under the chairmanship of Late Mr.N.Mohammed Sayeed Sahib.</ListItem>
          <ListItem>  	Installation of ZLD System at a cost of Rs.588 million under the Up-gradation and Installation of Infrastructure for Environmental Protection in the Tanning Industry of the Department of Industrial Policy & Promotion (DIPP), Ministry of Commerce and Industry under the IFLDP scheme.</ListItem>
          </ul>
      </ListContainer>
      <SubTitle>	The ZLD System of AMBURTEC CETP consists of the following:</SubTitle>
      <SubTitle>1.Primary Treatment </SubTitle>
      <ListContainer>
        <ul>  
          <ListItem>	Effluent from member tanners is collected in a tank and undergoes screening, equalization, neutralization, flocculation, and settling using a clariflocculator. This reduces pH and TSS, but further treatment is required for BOD, COD, and TDS reduction.</ListItem>
        </ul>
    </ListContainer>
    <SubTitle>2. Filter Press </SubTitle>
      <ListContainer>
        <ul>  
          <ListItem>	Sludge from the clariflocculator is dewatered using a filter press. The collected cakes are disposed of in the Secured Landfill Facility (SLF).</ListItem>
        </ul>
    </ListContainer>
    <SubTitle>3. Aeration Tank </SubTitle>
    <ListContainer>
      <ul>
        <ListItem>	Wastewater is aerated using fine bubble disk diffusers, maintaining dissolved oxygen at 1.5-2.0 mg/l. Microorganisms reduce BOD and COD by consuming organic impurities.</ListItem>
      </ul>
    </ListContainer>
    <SubTitle>4. Activated Sludge Process (ASP) </SubTitle>
    <ListContainer>
      <ul>
        <ListItem>	After aeration, the effluent moves to a secondary clarifier for biomass separation. Bio flocculants, multimedia filters, softener resins, and UF membranes are used for further filtration, making the water suitable for the RO system.</ListItem>
      </ul>
    </ListContainer>
    <SubTitle>5. Reverse Osmosis (RO) </SubTitle>
    <ListContainer>
      <ul>
        <ListItem>o	A two-stage RO system with pH correction, antiscalant dosing, and high-pressure pumps recovers 70% of permeate water of good quality for redistribution to member tanners.</ListItem>
      </ul>
    </ListContainer>
    <SubTitle>6. Reject RO </SubTitle>
    <ListContainer>
      <ul>
        <ListItem>	Reject water from the RO passes through a third-stage RO with cartridge filters and antiscalant dosing. Hydrochloric acid is added to minimize scaling. A maximum recovery of 30% is achieved.</ListItem>
      </ul>
    </ListContainer>
    <SubTitle>7. Evaporator </SubTitle>
    <ListContainer>
      <ul>
        <ListItem>	The remaining reject water is treated in a Multiple Effect Evaporator (MEE) with seven effects (three Falling Film and four Forced Circulation). Condensate water is recovered, and the concentrated liquor is processed using a centrifuge and ATFD to ensure Zero Liquid Discharge (ZLD).</ListItem>
      </ul>
    </ListContainer>


    <ListContainer>
      <ul>
        <ListItem><strong>Salt Disposal Yard:</strong>: Special disposal unit to store generated salt for two years at full capacity.</ListItem>
        <ListItem><strong>Recovered Water Conveyance System:</strong>Over Head Tanks and piping system with metering for conveying the recovered water back to individual tanneries.</ListItem>
 
       </ul>
      
    </ListContainer>
    <DiffList>
    <ListItem1>	Connection of CETP flow meters to the CARE AIR CENTER of Tamilnadu Pollution Control Board (TNPCB) for online monitoring.</ListItem1>
        <ListItem1>	Operation of the plant in the CETP with computerized management system.</ListItem1>
        <ListItem1>	CETP have installed Electromagnetic flow meters in all operating member tanneries and implemented flow based maintenance charges since 2008. This also complies with the Charter for Corporate Responsibility for Environmental Protection (CCREP), 2003</ListItem1>
      <ListItem1>	Construction of a Secure Land Fill System (SLF) with a capacity of 88,000 ton at a cost of Rs.72 million under the ASIDE scheme with the technical assistance from Central Leather Research Institute (CLRI).</ListItem1>
     
    </DiffList>
    </>
  )
}
