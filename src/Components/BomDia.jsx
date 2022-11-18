import React from "react";

export default (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
      <p>Passando operador ternario </p>
      {props.value
        ? "Ola vito(? = verificação)"
        : "Xau vito(: = se nao else)"}
    </div>
  );
};