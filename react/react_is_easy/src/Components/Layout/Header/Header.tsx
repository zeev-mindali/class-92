import { subscribe } from "diagnostics_channel";
import { youtube } from "../../Redux/Store";
import "./Header.css";
import { useEffect, useState } from "react";

function Header(): JSX.Element {
  const [totalSongs, setTotal] = useState(
    youtube.getState().songs.allSongs.length
  );
  
  youtube.subscribe(() => {
    setTotal(youtube.getState().songs.allSongs.length);
  });

  return (
    <div className="Header">
      <h1>Class 92</h1>
      total songs: {totalSongs}
    </div>
  );
}

export default Header;
