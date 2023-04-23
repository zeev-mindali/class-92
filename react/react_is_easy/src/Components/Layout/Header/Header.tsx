import { subscribe } from "diagnostics_channel";
import { youtube } from "../../Redux/Store";
import "./Header.css";
import { useEffect, useState } from "react";

function Header(): JSX.Element {
  const [totalSongs, setTotal] = useState(
    youtube.getState().songs.allSongs.length
  );
  const [totalCategories, setCategoriesTotal] = useState(
    youtube.getState().category.categories.length
  );

  youtube.subscribe(() => {
    setTotal(youtube.getState().songs.allSongs.length);
    setCategoriesTotal(youtube.getState().category.categories.length);
  });

  return (
    <div className="Header">
      <h1>Class 92</h1>
      total songs: {totalSongs}
      <br />
      total categories:{totalCategories}
    </div>
  );
}

export default Header;
