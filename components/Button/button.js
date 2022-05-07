import React from "react";
import styled from "styled-components";

// create styles using styled components
const ButtonCallToAction = styled.button`
  background: #4e89fc;
  height: 50px;
  padding: 13px 41px;
  border-radius: 8px;
  color: "red";
  border: none;
  color: white;
  font-size: 16px;
`;

const Button = ({ props }) => {
  return <ButtonCallToAction>Call now</ButtonCallToAction>;
};

export default Button;
