import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Meme.css";

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.imgflip.com/get_memes")
      .then((res) => {
        setAllMemes(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleText(event) {
    const { value, name } = event.target;
    setMemeImage((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function getMemeImage() {
    const memesArray = allMemes.data.memes;
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
        <input
          className="form--input"
          placeholder="Top text..."
          type="text"
          name="topText"
          value={memeImage.topText}
          onChange={handleText}
        />
        <input
          className="form--input"
          type="text"
          name="bottomText"
          placeholder="Bottom text..."
          value={memeImage.bottomText}
          onChange={handleText}
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
        <h2 className="meme--text top">{memeImage.topText}</h2>
        <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
      </div>
    </section>
  );
}
