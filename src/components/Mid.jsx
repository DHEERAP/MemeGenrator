import React from "react";
import MemeData from "../Memdata";

function Mid() {

  // const [memeImage, setMemeImage] = React.useState("");
  //   let url;

  const [meme, setMeme] = React.useState({
    Toptext : "",
    Bottomtext: "",
    randomImage: "https://i.imgflip.com/1g8my4.jpg"
  });




  function handleChange(event) {
    const {name, value} = event.target;
       
   setMeme(prevMeme => {
    return {
      ...prevMeme,
      [name]: value
    }

   });

  }
  const [allMeme, setAllNewMeme] = React.useState([]);

  React.useEffect(() => {
   fetch("https://api.imgflip.com/get_memes")
   .then(res => res.json())
   .then(data => setAllNewMeme(data.data.memes))

  }, []);


    function handelClick() {
        const memeArr = allMeme;
        const randomNum  = Math.floor(Math.random() * memeArr.length);
        const url = memeArr[randomNum].url;

        setMeme(prevMeme => ({
          ...prevMeme,
          randomImage: url
        }));
    }

return (
  <main>
    <div className="form">
   
        <input placeholder="Top text" type="text" className="form--input" name="Toptext" value={meme.Toptext} onChange={handleChange}/>
        <input type="text" placeholder="Bottom text" className="form--input" name="Bottomtext" value={meme.Bottomtext} onChange={handleChange}/>
        <button onClick={handelClick} className="form--button">Get a new meme image 🖼</button>
        <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.Toptext}</h2>
                <h2 className="meme--text bottom">{meme.Bottomtext}</h2>
            </div>
    </div>
  </main>
);
}

export default Mid;