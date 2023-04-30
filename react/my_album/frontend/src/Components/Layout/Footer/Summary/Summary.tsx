import { useState } from "react";
import "./Summary.css";
import { store } from "../../../redux/Store";

function Summary(): JSX.Element {
  const [setCategoryTotal, setCatTotal] = useState(0);
  store.subscribe(() => {
    setCatTotal(store.getState().category.categories.length);
  });
  return (
    <div className="Summary">
      Total Categories : {setCategoryTotal} | Total Images : 0
    </div>
  );
}

export default Summary;
