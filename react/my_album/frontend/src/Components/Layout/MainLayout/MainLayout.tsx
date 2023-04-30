import { useEffect } from "react";
import MainRoutes from "../../Routes/MainRoutes/MainRoutes";
import Categories from "../Categories/Categories";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import "./MainLayout.css";
import { store } from "../../redux/Store";
import { downloadCategoriesAction } from "../../redux/CategoriesReducer";

function MainLayout(): JSX.Element {
  useEffect(() => {
    if (store.getState().category.categories.length < 1) {
      if (localStorage.getItem("categories")) {
        store.dispatch(
          downloadCategoriesAction(
            JSON.parse(localStorage.getItem("categories") as any)
          )
        );
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
