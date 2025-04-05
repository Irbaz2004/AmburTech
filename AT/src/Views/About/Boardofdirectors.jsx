import React from 'react';
import styled from 'styled-components';
import { BreadCrumb } from '../../Components/BreadCrumb';

const Title = styled.h1`
  padding: 20px 5vw;
  font-size: 1.6rem;
  font-family: 'Gantari', serif;
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
    font-size: 1rem;
    hr{
    width: 110px;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 20px;
  min-height: 100vh;
`;
const Hexagon = styled.div`
  background: linear-gradient(45deg, #b0b0b0, #2c2c2c, #b0b0b0);
  background-size: 200% 200%; /* Allows animation movement */
  color: #5a2d82;
  font-weight: bold;
  text-align: center;
  font-family: Arial, sans-serif;
  padding: 30px;
  width: 400px;
  clip-path: polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%);
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  transform: translateX(${(props) => (props.align === 'left' ? '-50%' : '50%')});
  animation: steelEffect 2s linear infinite; /* Corrected animation call */

  @media (max-width: 768px) {
    width: 280px;
    padding: 20px;
    transform: translateX(0);
  }

  @media (max-width: 480px) {
    width: 300px;
    padding: 15px;
    font-size: 0.8em;
  }

  @keyframes steelEffect {
    0% { background-position: 0% 0%; }
    50% { background-position: 100% 100%; }
    100% { background-position: 0% 0%; }
  }
`;


const Name = styled.div`
  font-size: 1.2em;
  margin-bottom: 5px;
  color:white;
`;

const Role = styled.div`
  font-size: 1em;
  font-family: 'Gantari', serif;
    color:white;

`;

const Boardofdirectors = () => {
  const directors = [
    { name: 'MR. N.SHAFEEQUE AHMED', role: '(MANAGING DIRECTOR)' },
    { name: 'MR. S.M.FAIYAZ AHMED', role: '(DIRECTOR)' },
    { name: 'MR. M.FAIYAZ AHMED', role: '(DIRECTOR)' },
    { name: 'MR. K.MOHAMMED MOHIBULLAH', role: '(DIRECTOR)' },
    { name: 'MR. N.MOHAMMED ALI', role: '(DIRECTOR)' },
    { name: 'MR. A.R.RAMESH BABU', role: '(DIRECTOR)' }
  ];

  return (
    <>
      <BreadCrumb title='Board of Directors' path='/about/boardofdirectors' />
      <Title>Board of Directors
        <hr />
      </Title>
      <Container>
        {directors.map((director, index) => (
          <Hexagon key={index} align={index % 2 === 0 ? 'left' : 'right'}>
            <Name>{director.name}</Name>
            <Role>{director.role}</Role>
          </Hexagon>
        ))}
      </Container>
    </>
  );
};

export default Boardofdirectors;