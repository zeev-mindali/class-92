import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
  return (
    <div className="Menu">
      Main Menu
      <hr />
      <NavLink to="/" className="navlink">
        <div className="MenuItems">Home Page</div>
      </NavLink>
      <NavLink to="/addCategory" className="navlink">
        <div className="MenuItems">Category Management</div>
      </NavLink>
      <NavLink to="/addPhoto" className="navlink">
        <div className="MenuItems">Add Photo</div>
      </NavLink>
      <div className="MenuItems">Login/Logout</div>
    </div>
  );
}

export default Menu;
