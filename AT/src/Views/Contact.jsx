import React from 'react'
import styled from 'styled-components';
import { BreadCrumb } from '.././Components/BreadCrumb';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe, FaClock,FaFacebookF, FaGoogle, FaYoutube  } from "react-icons/fa";


const Title = styled.h1`
  padding: 20px 5vw;
  font-size: 1.6rem;
  font-family: 'Gantari', serif;
  position: relative;
  margin-top: 130px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-top: 60px;
  }


  hr {
    width: 100px;
    border: 2px solid #00911a;
    margin-top: 5px;
  }
    
  @media (max-width: 480px) {
    font-size: 1rem;
    hr{
      width: 50px;}
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 30px;
  max-width: 1200px;
  margin: auto;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// Map Styling
const MapContainer = styled.div`
  width: 100%;
  height: 350px;
  margin-bottom: 20px;
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 10px;
  }
`;

const FormContainer = styled.div`
  flex: 1;
  min-width: 300px;
  padding-right: 20px;

  h2 {
    font-size: 24px;
    color: #000;
    margin-bottom: 10px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  input,
  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }

  textarea {
    height: 100px;
  }

  button {
    background-color: #00911a;
    color: white;
    padding: 10px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    border-radius: 3px;

    &:hover {
      background-color: darkred;
    }
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  min-width: 300px;
  padding-left: 20px;

  @media (max-width: 768px) {
    padding-left: 0;
    margin-top: 20px;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  svg {
    color: #00911a;
    margin-right: 30px;
    font-size: 25px;
  }

  span {
    font-size: 16px;
    color: #333;
    line-height: 2.2;
  }
`;

const FooterContainer = styled.footer`
  background-color: black;
  color: white;
  padding: 40px 5vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: start;
margin:20px 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin:20px;
  }
`;

const Section = styled.div`
  flex: 1;
  min-width: 280px;
  margin-bottom: 20px;
`;

const Titleh3 = styled.h3`
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: bold;
  position: relative;
  text-transform: uppercase;

  &::after {
    content: "";
    display: block;
    width: 50px;
    height: 3px;
    background: #00911a;
    margin-top: 5px;
  }
`;

// Latest News Section
const NewsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const DateBox = styled.div`
  background: white;
  color: black;
  text-align: center;
  width: 50px;
  padding: 10px;
  margin-right: 10px;
  border-radius: 5px;
  font-weight: bold;
      font-size: 13px;


  span {
    display: block;
    font-size: 12px;
    background: #00911a;
    padding: 2px;
    color:White;
          margin-top:5px;


  }
`;

const NewsText = styled.div`
  p {
    margin: 5px 0;
    color: #ccc;
    font-size: 13px;
  }
`;

// Social Media Icons
const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  font-size: 13px;

  svg {
    width: 35px;
    height: 35px;
    padding: 8px;
    background: white;
    border-radius: 5px;
    color: black;
    cursor: pointer;
    transition: 0.3s;
    margin-bottom:10px;


    &:hover {
      background: #00911a;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

// Contact Section
const ContactInfo = styled.div`
  p {
    margin: 5px 0;
    color: #ccc;
    font-size: 13px;
    line-height: 1.8;
  }
  strong {
    color: white;
  }
`;


export default function Contact() {
  return (
    <>
      <BreadCrumb title="Contact Us" path="/contact" />
      <Title>
        Contact Us
        <hr />
      </Title>
      
      {/* Embedded Google Map */}
      <MapContainer>
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.509283138342!2d78.71204767454414!3d12.810332918394472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad09121342bc79%3A0xfdec2eb3dee8ee9d!2sAmburtec%20CETP!5e0!3m2!1sen!2sin!4v1741945216869!5m2!1sen!2sin"
  style={{ width: "100%", height: "100%", border: "none", borderRadius: "10px" }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
      </MapContainer>

      <ContactContainer>
        <FormContainer>
          <Form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Message" required></textarea>
            <button type="submit">SEND</button>
          </Form>
        </FormContainer>

        <InfoContainer>
          <InfoItem>
            <FaMapMarkerAlt />
            <span>Thuthipet sector, Periyavarikkam, Ambur, Tamil Nadu - 635811</span>
          </InfoItem>
          <InfoItem>
            <FaPhone />
            <span>+91 9150148628</span>
          </InfoItem>
          <InfoItem>
            <FaEnvelope />
            <span>info@amburtec.com</span>
          </InfoItem>
          <InfoItem>
            <FaGlobe />
            <span>www.amburtec.com</span>
          </InfoItem>
          <InfoItem>
            <FaClock />
            <span>Monday - Friday: 9.30 AM to 5.30 PM</span>
          </InfoItem>
          <InfoItem>
            <FaClock />
            <span>Saturday: 9.30 AM to 2 PM</span>
          </InfoItem>
        </InfoContainer>
      </ContactContainer>

      <FooterContainer>
      {/* Latest News Section */}
      <Section>
        <Titleh3>Latest News</Titleh3>
        <NewsContainer>
          <DateBox>
            05 <span>APR</span>
          </DateBox>
          <NewsText>
            <strong>Website Launch</strong>
            <p>
              Our website has been launched successfully, taking another step
              towards technology and business.
            </p>
          </NewsText>
        </NewsContainer>
      </Section>

      {/* Social Media & Office Hours */}
      <Section>
        <Titleh3>Our Social Medias</Titleh3>
        <SocialIcons>
          <FaFacebookF />
          <FaGoogle />
          <FaYoutube />
        </SocialIcons>

        <Titleh3>Office Hours</Titleh3>
        <p><strong>Monday - Saturday:</strong> 9:30 AM to 5:30 PM</p>
        <p><strong>Sunday:</strong> Closed</p>
      </Section>

      {/* Contact & Location */}
      <Section>
        <Titleh3>Locate Us</Titleh3>
        <ContactInfo>
          <p>
          Thuthipet sector, Periyavarikkam, Ambur, Tamil Nadu - 635811
          </p>
          <p><strong>Contact Person:</strong>: D.B. Riyaz Ahmed (Assistant Manager)</p>
          <p><strong>Phone Number:</strong>+91 9150148628</p>
          <p><strong>Email:</strong>: info@amburtec.com</p>
          <p><strong>Website:</strong> www.amburtec.com</p>
        </ContactInfo>
      </Section>
    </FooterContainer>
    </>
  )
}
