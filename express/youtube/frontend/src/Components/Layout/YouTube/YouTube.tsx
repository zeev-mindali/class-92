import { useNavigate } from "react-router-dom";
import SingleItem from "./SingleItem/SingleItem";
import "./YouTube.css";
import { useEffect, useState } from "react";
import { youtube } from "../../Redux/Store";
import { downloadSongsAction } from "../../Redux/SongReducer";

function YouTube(): JSX.Element {
  //const [songs,setSongs] = useState<Song[]>([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    if (youtube.getState().songs.allSongs.length < 1) {
      //setSongs(JSON.parse(localStorage.getItem("songs") as any))
      youtube.dispatch(
        downloadSongsAction(JSON.parse(localStorage.getItem("songs") as any))
      );
      setRefresh(true);
    }
  }, []);

  /*
  const songs = [
    {
      id: 1,
      url: "https://www.youtube.com/watch?v=R0ebIzABQm0",
      title: "In The Shadows of Ukraine",
      descption:
        "Combining the legendary rock song with the unique sound of Ukrainian folk, we created ",
      img: "https://i.ytimg.com/vi/R0ebIzABQm0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBsne6G4S3bSWQPzdARU4IvvcGNtw",
    },
    {
      id: 2,
      url: "https://www.youtube.com/watch?v=Z8Z51no1TD0",
      title:
        "I once dedicated this song to my mother, and when the war broke out, the song took on a lot of new meanings. Although there is ...",
      descption:
        "I once dedicated this song to my mother, and when the war broke out, the song took on a lot of new meanings. Although there is ...",
      img: "https://i.ytimg.com/vi/Z8Z51no1TD0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgYixmKoouc157asiighUKvnjDaw",
    },
    {
      id: 3,
      url: "https://www.youtube.com/watch?v=U5HAEzEk8QM",
      title:
        "The Director's Cut of RAMMSTEIN: PARIS, an unparalleled concert-film by Jonas Åkerlund, is out now! “Rammstein: Paris” is ...",
      descption:
        "The Director's Cut of RAMMSTEIN: PARIS, an unparalleled concert-film by Jonas Åkerlund, is out now! “Rammstein: Paris” is ...",
      img: "https://i.ytimg.com/vi/W3q8Od5qJio/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCZDa4rTaZKPSiZdzz_dQ6sdTu4eg",
    },
    {
      id: 4,
      url: "https://www.youtube.com/watch?v=LZQdWd_vdoM",
      title: "Blue Man Group - part 01",
      descption: "o show é legalzinho...",
      img: "https://i.ytimg.com/vi/LZQdWd_vdoM/hqdefault.jpg?sqp=-oaymwE2COADEI4CSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gSAAuADigIMCAAQARgdIDgofzAP&rs=AOn4CLBM2bHa4irDZ4tUuLqGCOltOYrkqg",
    },
    {
      id: 5,
      url: "https://www.youtube.com/watch?v=E_hzOuAK5gY",
      title: "עקב שוואקי - ישתבח שמו",
      descption:
        "עקב שוואקי - ישתבח שמו Yaakov Shwekey - Yishtabach Shemo Lyrics by Miriam Israeli Composed by Yitzy Waldner Arranged by ...",
      img: "https://i.ytimg.com/vi/E_hzOuAK5gY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCmYI2j_1OiiVPS_QMPdas6oRHX-Q",
    },
  ];

  localStorage.setItem("songs", JSON.stringify(songs));
  */
  return (
    <div className="YouTube">
      {youtube.getState().songs.allSongs.map((item) => (
        <SingleItem
          key={item["id"]}
          url={item["url"]}
          title={item["title"]}
          descrption={item["descption"]}
          img={item["img"]}
          id={item["id"]}
        />
      ))}
    </div>
  );
}

export default YouTube;
