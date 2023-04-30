import "./Menu.css";

function Menu(): JSX.Element {
  return (
    <div className="Menu">
      Main Menu
      <hr />
      <div className="MenuItems">Category Management</div>
      <div className="MenuItems">Add Photo</div>
      <div className="MenuItems">Login/Logout</div>
    </div>
  );
}

export default Menu;
