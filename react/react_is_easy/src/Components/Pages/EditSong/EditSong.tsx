import { useParams } from "react-router-dom";
import "./EditSong.css";
import { useEffect, useState } from "react";
import Song from "../../modal/Song";
import { youtube } from "../../Redux/Store";

function EditSong(): JSX.Element {
  const params = useParams();
  const [refresh, setRefresh] = useState(false);
  if (params.id) {
    var songNum: number = +params.id | 0;
    console.log(songNum);
  }
  const [song, setSong] = useState<Song>(
    youtube.getState().songs.allSongs.filter((item) => item.id === songNum)[0]
  );

  return (
    <div className="EditSong">
      <div className="Box" style={{ width: 300 }}>
        song title
        <br />
        <input type="text" value={song?.title} />
        <br />
        <br />
        song description
        <br />
        <input type="text" value={song?.descption} />
        <br />
        <br />
        song image
        <br />
        <input type="text" value={song?.img} />
        <br />
        <br />
        <input type="submit" />
        <input type="reset" />
      </div>
    </div>
  );
}

export default EditSong;
