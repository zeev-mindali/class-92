import "./SingleItem.css";

interface itemProps {
  url: string;
  title: string;
  descrption: string;
  img: string;
}
function SingleItem(props: itemProps): JSX.Element {
  return (
    <div className="SingleItem">
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
