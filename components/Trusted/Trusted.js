import React from "react";
import styled from "styled-components";

const ContainerTrusted = styled.div`
  display: flex;
  justify-content: center;
  background-color: #4e89fc;
  padding: 15px 0;
`;

const TrustedBox = styled.div`
  text-align: center;
  border: 1px solid #ffffff;
  width: 700px;
  border-radius: 15px;
`;

const Trusted = () => {
  return (
    <ContainerTrusted>
      <TrustedBox>
        <p>Mas de 15.000 clientes confiaron en Seplom</p>
      </TrustedBox>
    </ContainerTrusted>
  );
};

export default Trusted;
