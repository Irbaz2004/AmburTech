import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { BreadCrumb } from "../../Components/BreadCrumb";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import a1 from "../../assets/AT01.jpg";
import a2 from "../../assets/AT02.jpg";
import a3 from "../../assets/AT03.jpg";
import a4 from "../../assets/AT04.jpg";
import a7 from "../../assets/AT07.jpg";
import a6 from "../../assets/AT06.jpg";

// Wrapper Div
const AboutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const Title = styled.h1`
  font-size: 1.8rem;
  font-family: "Gantari", serif;
  margin-bottom: 10px;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
    text-align: start;
  }
  hr {
    width: 200px;
    border: 2px solid #00911a;
    margin-top: 5px;
  }
`;

const Title1 = styled.h1`
  font-size: 1.8rem;
  font-family: "Gantari", serif;
  margin-bottom: 10px;
  margin-top: 130px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
    text-align: start;
  }
  hr {
    width: 200px;
    border: 2px solid #00911a;
    margin-top: 5px;
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  font-family: "Gantari", serif;
  color: gray;
  line-height: 1.6;
  text-align: start;

  @media (max-width: 768px) {
    font-size: 0.8rem;
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
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 90%;
  margin: 50px auto;
  padding: 20px;
  background: #f4f4f4;
  border-radius: 8px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin: 0 auto;
    max-width: 95%;
  }
`;

const LeftDiv = styled.div`
  width: 45%;
  background: black;
  color: white;
  padding: 20px;
  border-radius: 8px;
  font-size: 0.9rem;

  @media (max-width: 1024px) {
    width: 100%;
    text-align: center;
  }
`;

const RightDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1024px) {
    width: 100%;
    align-items: center;
  }
`;

const Policy = styled.div`
  background: black;
  padding: 20px;
  border-radius: 8px;
  color: white;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const Objective = styled.div`
  background: black;
  padding: 20px;
  border-radius: 8px;
  color: white;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const SubPara = styled.div`
  font-size: 1rem;
  font-family: "Gantari", serif;
  color: gray;
  line-height: 1.6;
  text-align: start;

  @media (max-width: 1024px) {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export default function Aboutpage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <>
      <BreadCrumb title="About Us" path="/about/statisticalprofile" />
      <AboutContainer>
        <AboutContent>
          <Title1>
            Welcome To Amburtec
            <hr />
          </Title1>
          <Paragraph>
            Ambur, a key leather cluster in Tamil Nadu, lies between Chennai and
            Bangalore and has seen rapid growth due to the booming leather
            industry. The town's economy is driven by tanneries and leather
            product industries, with an annual turnover of ₹3000 crores. To
            manage industrial wastewater, Ambur Tannery Effluent Treatment
            Company Ltd. (AMBURTEC) established two CETPs. Due to strict Tamil
            Nadu Pollution Control Board (TNPCB) norms, especially for Total
            Dissolved Solids (TDS), a Zero Liquid Discharge (ZLD) system was
            mandated. Implemented by Ambur Economic Development Organization
            (AEDOL) at a cost of ₹29 crores, ZLD ensures water recovery and
            environmental protection. However, high treatment costs challenge
            sustainability. In 2013, due to concentrated effluents and
            operational issues, TNPCB reduced the CETP’s capacity from 2219 KLD
            to 1150 KLD.
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

      <Container>
        <LeftDiv>
          <Title>Environmental Policy</Title>
          <p style={{ textAlign: "initial" }}>
            AMBURTEC commits itself to Environmental projection while delivering
            its services to its customers through;
          </p>

          <SubPara>Process that are environment friendly; </SubPara>
          <SubPara>People who are trained to care for environment; </SubPara>
          <SubPara>
            Enabling to commitments to statutory and regulatory requirements;{" "}
          </SubPara>
          <SubPara>Enabling pollution prevention;</SubPara>
          <SubPara>Pursuit of Waste Minimisation,Recycle,Reuse;</SubPara>
          <SubPara>
            Pursuit of Environmental Ethic of 4Rs - Reduce,Recycle,Recovery and
            Reuse;
          </SubPara>
          <SubPara>Promotion of conservation of resources;</SubPara>
          <SubPara>Continual improvement of the processes.</SubPara>
        </LeftDiv>
        <RightDiv>
          <Policy>
            <Title>Quality Policy</Title>
            <p style={{ textAlign: "initial", lineHeight: "1.3" }}>
              To share the respoonsiblity for environmental protection with our
              customers, by putting every effort as a tream in every process of
              our organization to ensure satisfactory treatment of effluent as
              per statuary requirments.
            </p>
          </Policy>
          <Objective>
            <Title>Quality Objective</Title>
            <p style={{ textAlign: "initial", lineHeight: "1.3" }}>
              To meet the stautory requirements of treated effluent as per plant
              design.
            </p>
            <p style={{ textAlign: "initial", lineHeight: "1.3" }}>
              To Implement a sound quality assurance system and strictly adhere
              to it.
            </p>
            <p style={{ textAlign: "initial", lineHeight: "1.3" }}>
              To ensure efficient operation and maintenance of plant in a cost
              effective manner.
            </p>
            <p style={{ textAlign: "initial", lineHeight: "1.3" }}>
              To educate and encourage the member tanneries to adopt green
              tanning practices
            </p>
          </Objective>
        </RightDiv>
      </Container>

      <Container>
        <LeftDiv>
          <Title>Quality Objectives</Title>

          <SubPara>
            In Q&M activities introduce pollution prevention programmes
          </SubPara>
          <SubPara>Improve Water Management </SubPara>
          <SubPara>Improve Energy Managemen</SubPara>
          <SubPara>Improve Waste Management</SubPara>
          <SubPara>Green Belt</SubPara>
        </LeftDiv>

        <RightDiv>
          <Policy>
            <Title>Latest News</Title>
            <p style={{ textAlign: "initial", lineHeight: "1.3" }}>
              To share the respoonsiblity for environmental protection with our
              customers, by putting every effort as a tream in every process of
              our organization to ensure satisfactory treatment of effluent as
              per statuary requirments.
            </p>
          </Policy>
          <Objective>
            <Title>Quality Objective</Title>
            <p style={{ textAlign: "initial", lineHeight: "1.3" }}>
              To meet the stautory requirements of treated effluent as per plant
              design.
            </p>
            <p style={{ textAlign: "initial", lineHeight: "1.3" }}>
              To Implement a sound quality assurance system and strictly adhere
              to it.
            </p>
            <p style={{ textAlign: "initial", lineHeight: "1.3" }}>
              To ensure efficient operation and maintenance of plant in a cost
              effective manner.
            </p>
            <p style={{ textAlign: "initial", lineHeight: "1.3" }}>
              To educate and encourage the member tanneries to adopt green
              tanning practices
            </p>
          </Objective>
        </RightDiv>
      </Container>
    </>
  );
}
