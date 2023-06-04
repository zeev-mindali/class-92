import { NavLink } from "react-router-dom";
import Router from "../Router/Router";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">

            <nav>
                <h1>Northwind Traders</h1>
                
                <NavLink to="/products">Products</NavLink>
                <span> | </span>
                <NavLink to="/products/new">Add Product</NavLink>
                
                <hr />
            </nav>

            <main>
                <Router />
            </main>

        </div>
    );
}

export default Layout;
