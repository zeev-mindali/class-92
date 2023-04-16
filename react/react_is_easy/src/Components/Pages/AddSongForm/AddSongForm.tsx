import { useState } from "react";
import "./AddSongForm.css";

function AddSongForm(): JSX.Element {
    const [songURL,setURL] = useState("");
    const apiKey = "AIzaSyC89Q2JGf-GbWN25SGjoW69l4VnDTHlzXY";
    const apiURL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&key=${apiKey}&id=`;
    const searchSong = ()=>{
        
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
