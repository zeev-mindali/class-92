import { useReducer, useState } from "react";
import "./GetSong.css";
import songReducer, { ACTION_TYPES, INITIAL_STATE } from "./SongReducer";

function GetSong(): JSX.Element {
  //loading, songData, error
  //   const [loading, setLoading] = useState(false);
  //   const [songData, setData] = useState({});
  //   const [error, setError] = useState(false);

  const [state, dispatch] = useReducer(songReducer, INITIAL_STATE);
  const handleFetch = () => {
    // setLoading(true);
    // setError(false);
    dispatch({ type: ACTION_TYPES.FETCH_START });
    fetch("url")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // setLoading(false)
        // setData(data);
        dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data });
      })
      .catch((err) => {
        // setloading(false);
        // setError(true);
        dispatch({ type: ACTION_TYPES.FETCH_ERROR });
      });
  };
  return (
    <div className="GetSong">
      <button onClick={handleFetch}>
        {state.loading ? "Fetching Data..." : "Search song data..."}
      </button>
      <div>{state.songData?.title}</div>
      <span>{state.error && "Can not find the specific song...."}</span>
    </div>
  );
}

export default GetSong;
