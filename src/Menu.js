import React from "react";
import { useState } from "react";
import { Button } from "./Button";

export const Menu = (props) => {
  return (
    <nav>
      <h1>{props.nadpis}</h1>
      {props.menu.length === 0 ? (
        <p>Menu je prázdné</p>
      ) : (
        <ul>
          {props.menu.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
      <div className="buttons-wrapper">
        <Button className="primary" onClick={props.handleDeleteMenu}>
          Tlačítko 1
        </Button>
        <Button className="secondary" onClick={props.handleAddMenu}>
          Tlačítko 2
        </Button>
      </div>
    </nav>
  );
};
