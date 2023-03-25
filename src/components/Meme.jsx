import React from "react";

export default function Meme() {
    return (
        <section className="form--section">
            <div className="form" action="">
                <input className="form--input" placeholder="Top text..." type="text" />
                <input className="form--input" type="text" placeholder="Bottom text..." />
                <button className="form--button">Get a new meme image</button>
            </div>
        </section>
    )
}
