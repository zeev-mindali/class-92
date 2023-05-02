import { useParams } from "react-router-dom";
import "./Photos.css";
import { store } from "../../redux/Store";

function Photos(): JSX.Element {
  const params = useParams();
  const photoStyle = {
    width: 200,
    height: 200,
  };

  const showAll = () => {
    return store.getState().photos.allPhotos.map((item) => (
      <div className="Box" style={{ width: 200, height: 230 }}>
        <img src={item.URL} style={photoStyle} />
        <br />
        {item.description}
        <br />
        {item.date}
      </div>
    ));
  };

  const showCat = () => {
    const filtredPhoto = store
      .getState()
      .photos.allPhotos.filter((item) => item.category == params.catName);
    console.log(filtredPhoto);
    return filtredPhoto.map((item) => (
      <div className="Box" style={{ width: 200, height: 230 }}>
        <img src={item.URL} style={photoStyle} />
        <br />
        {item.description}
        <br />
        {item.date}
      </div>
    ));
  };

  return (
    <div className="Photos">
      {params.catName}
      <hr />
      {params.catName ? showAll() : showCat()}
    </div>
  );
}

export default Photos;
