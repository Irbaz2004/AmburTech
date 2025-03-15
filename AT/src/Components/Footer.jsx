import React from "react";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import AT05 from "../assets/AT05.jpg";

const FooterContainer = styled.footer`
  width: 100%;
  background: #fff;
  padding: 50px 20px;
  text-align: center;
  font-family: "Questrial", sans-serif;
`;

const BackgroundImage = styled.div`
  background: url(${AT05}) no-repeat center;
  background-size: cover;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  border-radius: 20px;
  
  h1 {
    font-family: "Gantari", sans-serif;
    font-weight: 400;
    font-size: 36px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.59);
    color: white;
    padding: 30px 50px;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    height: 200px;
    h1 {
      font-size: 22px;
      padding: 20px;
    }
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: "Questrial", sans-serif;

  h2 {
    font-family: "Gantari", sans-serif;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    color: #555;
  }

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const SubscribeSection = styled.div`
  width: 100%;
  max-width: 400px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  background: black;
  overflow: hidden;
  border-radius:30px;

  input {
     flex: 1;
  padding: 20px 55px;
  font-size: 16px;
  border: none;
  background: black;
  color: white;
  outline: none;
  font-family: "Questrial", sans-serif;
  width: 100%;
  max-width: 400px;
  border-radius: 5px;

  @media (max-width: 768px) {
    padding: 17px 20px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 17px 15px;
    font-size: 13px;
  }
  }

  button {
    background: white;
    color: black;
    padding: 12px 15px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border-radius: 50%;
    margin-right: 10px;

    &:hover {
      background-color: black;
      color: white;
      border: 1px solid white;
    }
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    gap: 40px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: start;
  font-family: "Questrial", sans-serif;

  h4 {
    font-family: "Gantari", sans-serif;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  a {
    text-decoration: none;
    color: #333;
    font-size: 14px;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: black;
    }
  }
`;

const Copyright = styled.div`
  margin-top: 30px;
  font-size: 12px;
  color: #888;
  border-top: 1px solid #ddd;
  padding-top: 15px;
  text-align: center;
  font-family: "Questrial", sans-serif;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <BackgroundImage>
        <h1>EVERY DROP COUNTS<br />READY TO JOIN?</h1>
      </BackgroundImage>

      <FooterContent>
        <LeftSection>
          <h2>AMBURTEC</h2>
          <p>Never miss an update by joining our email list.</p>

          <SubscribeSection>
            <input type="email" placeholder="Enter your email address ..." />
            <button>
              <FaArrowRight />
            </button>
          </SubscribeSection>
        </LeftSection>

        <RightSection>
          <LinksContainer>
            <Column>
              <h4>LINKS</h4>
              <a href="#">ABOUT US</a>
              <a href="#">PROJECTS</a>
              <a href="#">SERVICES</a>
              <a href="#">PROCESS</a>
            </Column>

            <Column>
              <h4>SOCIAL MEDIA</h4>
              <a href="#">TWITTER</a>
              <a href="#">INSTAGRAM</a>
              <a href="#">FACEBOOK</a>
              <a href="#">LINKEDIN</a>
            </Column>
          </LinksContainer>
        </RightSection>
      </FooterContent>

      <Copyright>
        COURTESY © 2025. ALL RIGHTS RESERVED. | PRIVACY POLICY | TERMS & CONDITIONS
      </Copyright>
    </FooterContainer>
  );
}
