import React from "react";

export default (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
      <p>Passando operador ternario </p>
      {props.value
        ? "Ola pedro(? = verificação)"
        : "Xau pedro(: = se nao else)"}
    </div>
  );
};