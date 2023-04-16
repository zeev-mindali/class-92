import { NavLink } from "react-router-dom";
import "./Menu.css";
import { useEffect, useState } from "react";

function Menu(): JSX.Element {
    const [categories,setCategories] = useState([]);

    useEffect(()=>{
        setCategories(JSON.parse(localStorage.getItem("Categories") as any));
    },[]);

    return (
        <div className="Menu">
            <h2>Main Menu</h2>
            <hr />
            <NavLink to="/">All Songs</NavLink><br /><br />
            <NavLink to="/addSong">Add Song</NavLink><br /><br />
            <NavLink to="/addCategory">Add Category</NavLink><br/><br/>
            <NavLink to="/search">Song Search</NavLink><br /><br />
            <NavLink to="/favorites">Favorites</NavLink><br /><br />
            <NavLink to="/about">About Us</NavLink>
            <hr/>
            {categories.map(item=>{return <h3>{item}</h3>})}
        </div>
    );
}

export default Menu;
