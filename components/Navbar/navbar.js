import React from "react";
import styled from "styled-components";
import Button from "../Button/button";
import seplomLogo from "../.././assets/seplom-logo.svg";
import Image from "next/image";
import Link from "next/link";

const ContainerNav = styled.nav`
  display: flex;
  align-items: center;
  padding: 20px 40px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const NavAncors = styled.div`
  display: flex;
  ul {
    display: flex;
    list-style: none;
  }
  ul li {
    margin: 0 20px;

  }
`;

const Navbar = () => {
  return (
    <ContainerNav>
      <div>
        <Image src={seplomLogo} alt="Seplom Logo"></Image>
      </div>
      <NavAncors>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="#">
              <a>Services</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#">
              <a>Careers</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#">
              <a>About us</a>
            </Link>
          </li>
        </ul>
      </NavAncors>
      <div>
        <Button>Ahora sadsddddddddddd</Button>
      </div>
    </ContainerNav>
  );
};

export default Navbar;
