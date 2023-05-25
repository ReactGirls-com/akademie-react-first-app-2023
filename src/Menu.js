import React from "react";
import { Button } from "./Button";

export const Menu = ({ menu, nadpis }) => {
  // Desctructuring

  // const { menu, nadpis } = props;

  //   const menu = props.menu;
  //   const nadpis = props.nadpis;

  //   const menu = [];

  //   if (menu.length === 0) {
  //     return <p>Menu je prázdné</p>;
  //   }

  const handleDeleteMenu = () => {
    console.log("Smazal jsi menu");
  };

  const handleAddMenu = () => {
    console.log("Přidal jsi menu");
  };

  return (
    <nav>
      <h1>{nadpis}</h1>
      {menu.length === 0 ? (
        <p>Menu je prázdné</p>
      ) : (
        <ul>
          {menu.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
      <div className="buttons-wrapper">
        <Button className="primary" onClick={handleDeleteMenu}>
          Tlačítko 1
        </Button>
        <Button className="secondary" onClick={handleAddMenu}>
          Tlačítko 2
        </Button>
      </div>
    </nav>
  );
};
