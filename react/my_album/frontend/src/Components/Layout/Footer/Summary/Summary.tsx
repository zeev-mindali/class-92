import { useState } from "react";
import "./Summary.css";
import { store } from "../../../redux/Store";

function Summary(): JSX.Element {
  const [setCategoryTotal, setCatTotal] = useState(0);
  const [totalImages, setTotalImages] = useState(0);

  store.subscribe(() => {
    setCatTotal(store.getState().category.categories.length);
    setTotalImages(store.getState().photos.allPhotos.length);
  });
  return (
    <div className="Summary">
      Total Categories : {setCategoryTotal} | Total Images : {totalImages}
    </div>
  );
}

export default Summary;
