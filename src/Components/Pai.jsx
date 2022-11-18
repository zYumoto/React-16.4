import React from "react";

import {childrenWithProp} from "./utils/utils";


export default (props) => {
  return (
    <div>
      <h1>
        {props.nome} {props.sobrenome}
      </h1>
      <h2>Filhos</h2>
      <ul>{childrenWithProp(props)}</ul>
    </div>
  );
};