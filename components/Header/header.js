import React from "react";
import Button from "../Button/button";
import Image from "next/image";
import seplomHeader from "../../assets/seplom-header.png";

const Header = () => {
  return (
    <section>
      <div>
        <h1>
          Plomeria <span>Inmediata</span> Eficiente, Rapida y Confiable
        </h1>
        <p>
          Envianos um mensaje con tu problema y te contactaremos de inmediato
          para resolver tu problema los mas rapido
        </p>
        <Button />
      </div>
      <div>
        <Image src={seplomHeader} alt="Seplom header llaves"></Image>
      </div>
    </section>
  );
};

export default Header;
