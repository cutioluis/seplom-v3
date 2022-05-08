import React from "react";
import Button from "../Button/button";
import Image from "next/image";
import styled from "styled-components";
import seplomHeader from "../../assets/seplom-header.png";

const ContainerHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 50px 0;
  justify-content: space-between;
`;

const HeaderLeft = styled.div`
  width: 60%;
  margin: 0 auto;
  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 61px;
  }

  span {
    background-color: #4e89fc;
    border-radius: 5px;
    padding: 2px;
  }
  p{
    width: 40%;
  }
`;

const HeaderRight = styled.div``;

const Header = () => {
  return (
    <ContainerHeader>
      <HeaderLeft>
        <h1>
          Plomeria <span>Inmediata</span> <br /> Eficiente, Rapida <br /> y
          Confiable
        </h1>
        <p>
          Envianos um mensaje con tu problema y te contactaremos de inmediato
          para resolver tu problema los mas rapido
        </p>
        <Button />
      </HeaderLeft>
      <HeaderRight>
        <Image src={seplomHeader} alt="Seplom header llaves"></Image>
      </HeaderRight>
    </ContainerHeader>
  );
};

export default Header;
