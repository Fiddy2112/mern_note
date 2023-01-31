import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  padding: 5px;
  margin: 10px 5px;
`;

const CardName = styled.h2`
  color: #636e72;
  font-size: 15px;
  font-weight: bold;

  // background-color: red;
  padding: 5px;
  &:hover {
    color: #b2bec3;
    border-left: 4px solid #b2bec3;
  }
`;

function Card({ children }) {
  return (
    <CardContainer>
      <CardName>{children}</CardName>
    </CardContainer>
  );
}

export default Card;
