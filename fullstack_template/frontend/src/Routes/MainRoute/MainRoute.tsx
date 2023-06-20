import { Route, Routes } from "react-router-dom";
import "./MainRoute.css";
import MainLayout from "../../Components/Layout/MainLayout/MainLayout";
import Page404 from "../../Components/pages/Page404/Page404";

function MainRoute(): JSX.Element {
  return (
    <div className="MainRoute">
      <Routes>
        <Route path="/" element={<MainLayout />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default MainRoute;
