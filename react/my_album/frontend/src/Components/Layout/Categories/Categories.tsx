import { NavLink } from "react-router-dom";
import { store } from "../../redux/Store";
import "./Categories.css";
import { useState } from "react";

function Categories(): JSX.Element {
  const [refresh, setRefresh] = useState(false);
  store.subscribe(() => {
    setRefresh(!refresh);
  });
  return (
    <div className="Categories">
      {store.getState().category.categories.map((item) => (
        <NavLink to={`/cat/${item.name}`}>{item.name} | </NavLink>
      ))}
    </div>
  );
}

export default Categories;
