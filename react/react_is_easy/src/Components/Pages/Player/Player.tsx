import { useParams } from "react-router-dom";
import "./Player.css";

function Player(): JSX.Element {
    const params = useParams();

    return (
        <div className="Player">
            <h1>{params.title}</h1><hr /><br /><br />
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${params.url}?autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>        </div>
    );
}

export default Player;

//http://localhost:3000/player/In%20The%20Shadows%20of%20Ukraine/R0ebIzABQm0
// player/:title/:url