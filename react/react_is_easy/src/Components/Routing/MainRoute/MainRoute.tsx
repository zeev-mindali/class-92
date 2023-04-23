import { Route, Routes } from "react-router-dom";
import Home from "../../Layout/Home/Home";
import YouTube from "../../Layout/YouTube/YouTube";
import About from "../../Pages/About/About";
import AddSongForm from "../../Pages/AddSongForm/AddSongForm";
import MyFavorites from "../../Pages/MyFavorites/MyFavorites";
import Page404 from "../../Pages/Page404/Page404";
import Player from "../../Pages/Player/Player";
import SongSearch from "../../Pages/SongSearch/SongSearch";
import "./MainRoute.css";
import AddNewCategory from "../../Pages/AddNewCategory/AddNewCategory";
import DeleteSong from "../../Pages/deleteSong/deleteSong";
import EditSong from "../../Pages/EditSong/EditSong";

function MainRoute(): JSX.Element {
  return (
    <div className="MainRoute">
      <Routes>
        <Route path="/" element={<YouTube />} />
        <Route path="/home" element={<YouTube />} />
        <Route path="/about" element={<About />} />
        <Route path="/addSong" element={<AddSongForm />} />
        <Route path="/favorites" element={<MyFavorites />} />
        <Route path="/search" element={<SongSearch />} />
        <Route path="/player/:title/:url" element={<Player />} />
        <Route path="/addCategory" element={<AddNewCategory />} />
        <Route path="/deleteSong/:title" element={<DeleteSong />} />
        <Route path="/editSong/:id" element={<EditSong />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default MainRoute;
