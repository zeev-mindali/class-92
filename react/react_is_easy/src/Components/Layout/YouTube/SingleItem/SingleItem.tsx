import { useNavigate } from "react-router-dom";
import "./SingleItem.css";

interface itemProps {
    url: string;
    title: string;
    descrption: string;
    img: string;
}
function SingleItem(props: itemProps): JSX.Element {
    const navigate = useNavigate();
    return (
        <div className="SingleItem" onClick={() => { navigate(`/player/${props.title}/${props.url.split('=')[1]}`) }}>
            <div className="Box" style={{ width: "95%" }}>
                <div className="Grid-Parent">
                    <div className="Grid-Child">
                        <img src={props.img} width={200} />
                    </div>
                    <div className="Grid-Child">
                        {props.title}
                        <hr />
                        {props.descrption}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleItem;
