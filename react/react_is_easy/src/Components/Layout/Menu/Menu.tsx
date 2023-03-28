import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <h2>Main Menu</h2>
            <hr />
            <NavLink to="/">All Songs</NavLink><br /><br />
            <NavLink to="/addSong">Add Songs</NavLink><br /><br />
            <NavLink to="/search">Song Search</NavLink><br /><br />
            <NavLink to="/favorites">Favorites</NavLink><br /><br />
            <NavLink to="/about">About Us</NavLink>
        </div>
    );
}

export default Menu;
