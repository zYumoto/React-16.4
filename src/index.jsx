import React from "react";
import ReactDOM from "react-dom";

import Pai from "./Components/Pai";
import Filho from "./Components/Filho";
// import Primary from "./Components/Primary";
// import BomDia from "./Components/BomDia";

// import Multi, { BoaNoite } from "./Components/Multiplos";
import Saudacao from "./Components/Saudacao";


ReactDOM.render(
  <div>
    {/*  <Multi.BoaTarde name="Pedro" />
    <BoaNoite name="Gabriela" /> */}
    {/* <Saudacao tipo="Bom dia" nome="Joao" /> */}
    <Pai nome="pedro" sobrenome="venchiarutti">
      <Filho nome="Pedro" />
      <Filho nome="Paulo" />
      <Filho nome="Carla" />
    </Pai>
  </div>,
  document.getElementById("root")
);