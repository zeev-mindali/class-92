import { Navigate, Route, Routes } from "react-router-dom";
import AddProduct from "../../ProductsArea/AddProduct/AddProduct";
import ProductList from "../../ProductsArea/ProductList/ProductList";

function Router(): JSX.Element {
    return (
        <div className="Router">
			<Routes>
                <Route path="/products" element={<ProductList />} />
                <Route path="/products/new" element={<AddProduct />} />
                <Route path="/" element={<Navigate to="/products" />} />
                <Route path="*" element={<Navigate to="/products" />} />
            </Routes>
        </div>
    );
}

export default Router;
