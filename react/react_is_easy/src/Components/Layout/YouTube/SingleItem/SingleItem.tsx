import { useNavigate } from "react-router-dom";
import "./SingleItem.css";
import { youtube } from "../../../Redux/Store";
import { deleteSongAction } from "../../../Redux/SongReducer";

interface itemProps {
  url: string;
  title: string;
  descrption: string;
  img: string;
  id: number;
}
function SingleItem(props: itemProps): JSX.Element {
  const navigate = useNavigate();
  return (
    <div className="SingleItem">
      <div className="Box" style={{ width: "95%" }}>
        <div className="Grid-Parent">
          <div
            className="Grid-Child"
            onClick={() => {
              navigate(`/player/${props.title}/${props.url.split("=")[1]}`);
            }}
          >
            <img src={props.img} width={200} />
          </div>
          <div className="Grid-Child">
            {props.title}
            <hr />
            {props.descrption}
            <hr />
            <button
              onClick={() => {
                youtube.dispatch(deleteSongAction(props.id));
                navigate(`/deleteSong/${props.title}`);
              }}
            >
              Delete item
            </button>{" "}
            <button
              onClick={() => {
                ///editSong/:id/:title/:desc/:img/:url"
                navigate(`/editSong/${props.id}`);
              }}
            >
              Edit item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleItem;
