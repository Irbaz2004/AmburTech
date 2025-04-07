import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 1400px;
    margin: 0 auto;
  padding: 50px 5vw;
  margin-top: 10px;
  background:rgb(0, 0, 0);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 30px 4vw;
    margin-top: 60px;
  }
`;

const Title = styled.h2`
  font-size: 2.4rem;
  font-family: "Gantari", serif;
  color: white;
  font-weight: 600;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Highlight = styled.span`
  font-weight: 600;
  color: #00911a;
  font-style: italic;
  font-size: 1.3rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  font-family: "Questrial", sans-serif;
  color: white;
  line-height: 1.8;
  max-width: 1400px;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export default function Author() {
  return (
    <Container>
      <Title>Founder Of AMBURTEC</Title>
      <Description>
        <Highlight>Late Mr. N. Mohammed Sayeed Sahib</Highlight> , a distinguished leader in the leather industry,
        was a visionary with exceptional practical knowledge and foresight. His relentless dedication, perseverance,
        and unwavering commitment played a pivotal role in the establishment of the state-of-the-art Zero Liquid Discharge
        (ZLD) Plant at this AMBURTEC THUTHIPET CETP. His contributions remain an enduring testament to his leadership
        and forward-thinking approach, leaving an indelible mark on the industry and the community.
      </Description>
    </Container>
  );
}
