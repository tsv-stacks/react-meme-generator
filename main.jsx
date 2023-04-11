import React from "react";
import ReactDOM from "react-dom/client";
import "./src/styles/index.css";
import Header from "./src/components/Header";
import Meme from "./src/components/Meme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Meme />
  </React.StrictMode>
);
