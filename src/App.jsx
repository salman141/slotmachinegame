import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SlotM from "./SlotM";

const App = () => {
  return (
    <>
      <h1 className="heading_style">
        {" "}
        🎰 Welcome to{" "}
        <span style={{ fontWeight: "bold" }}>Slot machine game</span> 🎰{" "}
      </h1>
      <div className="slotM">
        <div style={{ backgroundColor: "Red" }}>
          <SlotM x="😄" y="😄" z="🎅" />
        </div>
        <hr />
        <div style={{ backgroundColor: "lightgreen" }}>
          <SlotM x="🎅" y="🎅" z="🎅" />
        </div>
        <hr />
        <div style={{ backgroundColor: "lightgreen" }}>
          <SlotM x="🍎" y="🍎" z="🍎" />
        </div>
        <hr />
        <div style={{ backgroundColor: "Red" }}>
          <SlotM x="🍎" y="🍎" z="🍌" />
        </div>
      </div>
    </>
  );
};

export default App;
