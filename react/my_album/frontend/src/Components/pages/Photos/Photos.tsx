import { useParams } from "react-router-dom";
import "./Photos.css";

function Photos(): JSX.Element {
  const params = useParams();
  return (
    <div className="Photos">
      {params.catName}
      <hr />
    </div>
  );
}

export default Photos;
