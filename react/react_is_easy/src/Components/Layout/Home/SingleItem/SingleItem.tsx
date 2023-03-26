import "./SingleItem.css";

interface userProps {
  id: number;
  name: string;
  age: number;
  openToLove: boolean;
}

function SingleItem(props: userProps): JSX.Element {
  return (
    <div className="SingleItem Box" style={{ width: "95%" }}>
      <h2>{props.id}</h2>
      <hr />
      <h3>{props.name}</h3>
      <h3>{props.age}</h3>
      <h2>{props.openToLove ? "❤" : "🚻"}</h2>
    </div>
  );
}

export default SingleItem;
