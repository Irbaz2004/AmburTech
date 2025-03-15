import React from "react";
import styled from "styled-components";

import Slider from "react-slick";
import { BreadCrumb } from "../../Components/BreadCrumb";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PTS01 from "../../assets/PTS01.jpg";
import PTS02 from "../../assets/PTS02.jpg";
import PTS03 from "../../assets/PTS03.jpg";
import PTS04 from "../../assets/PTS04.jpg";
import PTS05 from "../../assets/PTS05.jpg";
import PTS06 from "../../assets/PTS06.jpg";

// Wrapper Div
const AboutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0vw;
  flex-wrap: wrap;
  margin:0 20px;

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
  }
`;
const Title = styled.h1`
  padding: 20px 5vw;
  font-size: 1.6rem;
  font-family: "Gantari", serif;
  position: relative;

  hr {
    width: 170px;
    border: 2px solid red;
    margin-top: 5px;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-top: 60px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-top: 30px;
    padding:1rem 0.5rem ;
    hr{
    width: 100px;}
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  font-family: "Gantari", serif;
  color: gray;
  line-height: 1.6;
  padding: 0 80px;
  margin-bottom:10px;

  @media (max-width: 768px) {
 font-size: .8rem;
 padding: 0 10px;
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

const List = styled.ul`
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
  margin-bottom: 15px;
`;
const Strong = styled.strong`
  font-size: 1rem;
  font-family: "Gantari", serif;
  color: black;
`;
  
export default function Pretreatmentsystem() {
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
      <BreadCrumb
        title="Pre-Treatment System"
        path="/servicepage/pretreatmentsystem"
      />
      
      <AboutContainer>
        <AboutContent>
        <Title>
        Pre-Treatment System
        <hr />
      </Title>
          <Paragraph>
          Before discharge of effluent to the sewer system, each tannery carries out the following activities.
          </Paragraph>

          <Paragraph>
          1.  All trade effluent undergoes Screening and Sedimentation in a Pre-Treatment Unit (PTU) before discharge into the CETP sewer line.
          </Paragraph> 
        </AboutContent>

        <SliderContainer>
          <Slider {...settings}>
            {[PTS01,PTS02,PTS03,PTS04,PTS05,PTS06].map((img, index) => (
              <div key={index}>
                <SlideImage src={img} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </SliderContainer>

    

      </AboutContainer>
      <Paragraph>
        This PTU consists of the following:
        </Paragraph>

        <List>
        <ListItem>
        <Strong>Oil and Grease Trap</Strong>: The floating matters like fat and proteins present in the effluent are removed.
      </ListItem>
      <ListItem>
        <Strong>Bar Screen Chamber</Strong>: Major particles in the effluent are removed by the PVC/SS type rigid, non-corrosive, fixed bar screens with 5mm spacing provided.
      </ListItem>
      <ListItem>
        <Strong>Raw Effluent Collection Tank</Strong>: The screened effluent is collected in this tank before being pumped into the Overhead Sedimentation Tanks.
      </ListItem>
      <ListItem>
        <Strong>Pre-Settlers</Strong>: Two settlers of overhead type are provided for sedimentation of coarse solids in the effluent. These settlers have valves at the bottom for withdrawal of sludge to the Sludge Drying Beds/Filter Press.
      </ListItem>
      <ListItem>
        <Strong>Final Collection Tank</Strong>: The overflow from these Sedimentation Tanks is collected in this tank before being pumped to the CETP Sewer Network through a Flow Metering System.
      </ListItem>
      <ListItem>
        <Strong>Sludge Drying Beds</Strong>: Sludge from the sedimentation tanks is discharged into the drying beds with filter media for solar drying. The dried sludge is transported to the Secure Landfill (SLF) of the CETP.
      </ListItem>
      <ListItem>
        <Strong>Filter Press</Strong>: Wherever Filter Press is installed, the sludge from the sedimentation tanks is fed to the same for quick drying of sludge with less moisture content for disposing to the SLF.
      </ListItem>
      <ListItem>
        <Strong>Flow Metering System</Strong>: A skid-mounted unit comprising of an Electromagnetic Flow Meter with flow Indicator and Totalizer with a pump is installed in each tannery. The effluent from the Collection Tank is pumped through the flow meter to the CETP Sewer Network. The quantity of effluent discharged is recorded in the flow meter. The flow metering system is housed in a sealed close room with an opening to switch ON/OFF the pump. The room key is in the custody of the CETP.
      </ListItem>
        </List>

        <Title>
        Chrome Recovery Units
        <hr />
      </Title>
      <Paragraph>
      Tanneries doing Chrome Tanning Process have installed Chrome Recovery Units in their premises. These tanneries segregate the chrome liquor and collect in a tank for precipitation of the chrome by adding magnesium oxide solution. The precipitated chrome slurry is added with sulfuric acid to regenerate chrome and filled in carboys. Thus the chrome is recovered and mixed with fresh basic chromium sulphate for re-use in the tanning process.        </Paragraph>
    </>
  );
}
