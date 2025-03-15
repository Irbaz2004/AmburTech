import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BreadcrumbContainer = styled.div`
  font-size: 14px;
  padding: 1rem 5vw; /* More flexible padding */
  color: white;
  background: black;
  width: 100%;
  position: relative;
  top: 130px;
  display: flex;
  flex-wrap: wrap; /* Allows wrapping on small screens */
  gap: 5px; /* Adds spacing between items */

  a {
    text-decoration: none;
    font-family: "Questrial", serif;
    color: white;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 12px 4vw; 
      top: 60px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 12px 17px;
  }
`;

export const BreadCrumb = ({ title, path }) => {
  return (
    <BreadcrumbContainer>
      <Link to="/">Home</Link> / <Link to={path}>{title}</Link>
    </BreadcrumbContainer>
  );
};
