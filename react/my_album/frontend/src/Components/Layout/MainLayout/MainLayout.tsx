import { useEffect, useState } from "react";
import MainRoutes from "../../Routes/MainRoutes/MainRoutes";
import Categories from "../Categories/Categories";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import "./MainLayout.css";
import { store } from "../../redux/Store";
import { downloadCategoriesAction } from "../../redux/CategoriesReducer";
import { downloadPhotoAction } from "../../redux/PhotosReducer";

function MainLayout(): JSX.Element {
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    if (store.getState().category.categories.length < 1) {
      if (localStorage.getItem("categories")) {
        store.dispatch(
          downloadCategoriesAction(
            JSON.parse(localStorage.getItem("categories") as any)
          )
        );
        setRefresh(!refresh);
      }
    }
    if (store.getState().photos.allPhotos.length < 1) {
      if (localStorage.getItem("photos")) {
        store.dispatch(
          downloadPhotoAction(JSON.parse(localStorage.getItem("photos") as any))
        );
        setRefresh(!refresh);
      }
    }
  }, []);
  return (
    <div className="MainLayout">
      <header>
        <Header />
      </header>
      <div className="categories">
        <Categories />
      </div>
      <aside>
        <Menu />
      </aside>
      <main>
        <MainRoutes />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MainLayout;
