import React from "react";
import styled from "styled-components";
import { BreadCrumb } from ".././Components/BreadCrumb";
import ATLogo from "../assets/AT-Logo.png"

const Title = styled.h1`
  padding: 20px 5vw;
  font-size: 1.6rem;
  font-family: "Gantari", serif;
  position: relative;
  margin-top: 130px;

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
    font-size: 1.3rem;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  // background-color: #aad9bb;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    height: auto;
    background-color: #fff;
    position: relative;
    top: 20px;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  width: 80%;
  max-width: 1000px;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormSection = styled.div`
  flex: 1;
  padding: 30px;
  text-align: center;
  border-right: ${(props) => (props.right ? "none" : "2px solid #e0e0e0")};

  @media (max-width: 768px) {
    border-right: none;
    border-bottom: ${(props) => (props.right ? "none" : "2px solid #e0e0e0")};
  }
`;

const Logo = styled.img`
  width: 100px;
  margin-bottom: 10px;
`;

const Titleh2 = styled.h2`
  font-size: 22px;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: ${(props) => (props.right ? "#08824b" : "#333")};
  font-weight: ${(props) => (props.right ? "bold" : "normal")};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 5px;
  color: red;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 14px;
  outline: none;
  width: 100%;
`;

const Button = styled.button`
  background: ${(props) => (props.register ? "#00a86b" : "#ff6b6b")};
  color: white;
  font-size: 16px;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: ${(props) => (props.register ? "#008b5e" : "#ff4b4b")};
  }
`;

export default function Annualreturn() {
  return (
    <>
      <BreadCrumb title="Annual Returns" path="/annualreturn" />
      <Title>
        Annual Returns
        <hr />
      </Title>
      <Container>
        <FormWrapper>
          <FormSection>
            <Logo src={ATLogo} alt="Logo" />
            <Titleh2>Welcome back,</Titleh2>
            <Subtitle>Please sign in to your account.</Subtitle>
            <Form>
              <Label>Email</Label>
              <Input type="email" placeholder="Email Here..." />
              <Label>Password</Label>
              <Input type="password" placeholder="Password Here..." />
              <Button>Log In</Button>
            </Form>
          </FormSection>

          {/* Register Section */}
          <FormSection right>
            <Logo src={ATLogo} alt="Logo" />
            <Titleh2>Welcome,</Titleh2>
            <Subtitle right>
              It only takes a <strong>few seconds</strong> to create your
              account.
            </Subtitle>
            <Form>
              <Label>First Name</Label>
              <Input type="text" placeholder="First Name Here..." />
              <Label>Last Name</Label>
              <Input type="text" placeholder="Last Name Here..." />
              <Label>Phone Number</Label>
              <Input type="tel" placeholder="+91 Phone Number Here..." />
              <Label>Email</Label>
              <Input type="email" placeholder="Email Here..." />
              <Label>Password</Label>
              <Input type="password" placeholder="Password Here..." />
              <Label>Confirm Password</Label>
              <Input type="password" placeholder="Confirm Password Here..." />
              <Button register>Register</Button>
            </Form>
          </FormSection>
        </FormWrapper>
      </Container>
    </>
  );
}
