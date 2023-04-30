import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
  return (
    <div className="Menu">
      Main Menu
      <hr />
      <NavLink to="/">
        <div className="MenuItems">Home Page</div>
      </NavLink>
      <NavLink to="/addCategory">
        <div className="MenuItems">Category Management</div>
      </NavLink>
      <div className="MenuItems">Add Photo</div>
      <div className="MenuItems">Login/Logout</div>
    </div>
  );
}

export default Menu;
