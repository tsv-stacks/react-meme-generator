import React from "react";
import logo from "/spongebob.png";
import "../styles/Header.css";

export default function Header() {
  return (
    <header>
      <div className="logo--text">
        <img src={logo} className="logo--image"></img>
        <h1>Meme Generator</h1>
      </div>
      <h3>React Course - Project 3</h3>
    </header>
  );
}
