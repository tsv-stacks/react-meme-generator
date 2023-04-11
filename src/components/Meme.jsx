import React, { useState } from "react";
import "../styles/Meme.css";
import memesData from "../assets/memesData";

export default function Meme() {
  const meme = {
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  };

  const [memeImage, setMemeImage] = React.useState(meme);
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: memesArray[randomNumber].url,
      };
    });
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
      <div className="meme">
        <img
          className="meme--image"
          src={memeImage.randomImage}
          alt="meme image template"
        />
        <h2 className="meme--text top">One does not simply</h2>
        <h2 className="meme--text bottom">Walk into Mordor</h2>
      </div>
    </section>
  );
}
