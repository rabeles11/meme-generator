import "./Meme.css";
import React from "react";
function Meme() {
  const [memelink, setmemelink] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState([]);


  React.useEffect(function() {
    fetch(`https://api.imgflip.com/get_memes`)
        .then(res => res.json())
        .then(data => setAllMemeImages(data))
  }, [])



  function onClickGenerateMeme() {
    const number = Math.floor(Math.random() * allMemeImages.data.memes.length);
    setmemelink((prev) => ({
      ...prev,
      randomImage: allMemeImages.data.memes[number].url,
    }));
  }

      
  function handleChange(event) {
    const {name, value} = event.target
    setmemelink(prevMeme => ({
        ...prevMeme,
        [name]: value
    }))
}


  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" value={memelink.topText}
          onChange={handleChange} name="topText" />
        <input type="text" placeholder="Bottom text" className="form--input" value={memelink.bottomText}
          onChange={handleChange} name="bottomText" />
        <button className="form--button" onClick={onClickGenerateMeme}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={memelink.randomImage} className="meme--image" />
        <h2 className="meme--text top">{memelink.topText}</h2>
        <h2 className="meme--text bottom">{memelink.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;
