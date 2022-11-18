import React from "react";
import ReactDOM from "react-dom";

import Multi, { BoaNoite } from "./Components/Multiplos";
import Saudacao from "./Components/Saudacao";

ReactDOM.render(
  <div>
    <Multi.BoaTarde name="Pedro" />
    <BoaNoite name="Gabriela" />
    <Saudacao tipo="Bom dia" nome="Joao" />
  </div>,
  document.getElementById("root")
);