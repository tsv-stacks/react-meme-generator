import React, { useState } from "react";
import memesData from "../assets/memesData";

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }

  return (
    <section className="form--section">
      <div className="form" action="">
        <input className="form--input" placeholder="Top text..." type="text" />
        <input
          className="form--input"
          type="text"
          placeholder="Bottom text..."
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <div className="meme--image-div">
        <img
          className="meme--image"
          src={memeImage}
          alt="meme image template"
        />
      </div>
    </section>
  );
}
