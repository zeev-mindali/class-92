import { useState } from "react";
import "./AddSongForm.css";
import axios from "axios";

function AddSongForm(): JSX.Element {
    //demo song=> https://www.youtube.com/watch?v=Ggafij3sZ1g
    const [songURL,setURL] = useState("");
    const apiKey = "AIzaSyC89Q2JGf-GbWN25SGjoW69l4VnDTHlzXY";
    const apiURL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&key=${apiKey}&id=`;
    const searchSong = ()=>{
        //console.log(songURL.split("=")[1]);
        const songID = songURL.split("=")[1];
        axios.get(apiURL+songID)
        .then(response=>{
            console.log(response);
        })
    }

    return (
        <div className="AddSongForm">
            <h1>add new song</h1><hr />
            <input type="url" onKeyUp={(args)=>{
                setURL(args.currentTarget.value);
                // console.log("my songs",songURL);
                }}/>
            <input type="submit" value="search" onClick={searchSong}/>
            <hr/>

        </div>
    );
}

export default AddSongForm;
