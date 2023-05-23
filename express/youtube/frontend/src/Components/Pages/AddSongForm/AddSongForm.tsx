import { useState } from "react";
import "./AddSongForm.css";
import axios from "axios";
import Song from "../../modal/Song";
import { useNavigate } from "react-router-dom";
import { youtube } from "../../Redux/Store";
import { addSongAction } from "../../Redux/SongReducer";

function AddSongForm(): JSX.Element {
  //demo song=> https://www.youtube.com/watch?v=Ggafij3sZ1g
  const [songURL, setURL] = useState("");
  const [songTitle, setTitle] = useState("");
  const [songDesc, setDesc] = useState("");
  const [songImg, setImage] = useState("");

  const navigate = useNavigate();

  const apiKey = "AIzaSyCrVV4Z7MrPNrwYCauxAwuWEY7A4HCZatU";
  const apiURL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&key=${apiKey}&id=`;
  const searchSong = () => {
    //console.log(songURL.split("=")[1]);
    const songID = songURL.split("=")[1];
    axios.get(apiURL + songID).then((response) => {
      //console.log(response.data.items[0].snippet.title);
      setTitle(response.data.items[0].snippet.channelTitle);
      setDesc(response.data.items[0].snippet.title);
      setImage(response.data.items[0].snippet.thumbnails.medium.url);
    });
  };

  const addNewSong = async () => {
    //let allSongs = JSON.parse(localStorage.getItem("songs") as any);

    let newSong = new Song(
      songDesc,
      songImg,
      songTitle,
      songURL,
      youtube.getState().songs.allSongs.length + 1,
      1
    );
    //we need to send a command to backend :) says elena
    const id = (
      await axios.post("http://localhost:4000/api/v1/songs/addSong", newSong)
    ).data;
    newSong.id = +id;
    console.log(newSong);
    //why is allSongs is empty for god bless you
    //allSongs.push(newSong);
    //localStorage.setItem("songs", JSON.stringify(allSongs));

    youtube.dispatch(addSongAction(newSong));
    navigate("/");
  };

  return (
    <div className="AddSongForm">
      <h1>add new song</h1>
      <hr />
      <input
        type="url"
        onKeyUp={(args) => {
          setURL(args.currentTarget.value);
          // console.log("my songs",songURL);
        }}
      />
      <input type="submit" value="search" onClick={searchSong} />
      <hr />
      <img src={songImg} />
      <br />
      <h2>{songTitle}</h2>
      <br />
      <hr />
      <h3>{songDesc}</h3>
      <br />
      <hr />
      <input type="submit" value="add song" onClick={addNewSong} />
    </div>
  );
}

export default AddSongForm;
