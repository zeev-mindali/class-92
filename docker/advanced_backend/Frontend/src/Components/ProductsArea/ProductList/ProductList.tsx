import axios from "axios";
import { useEffect, useState } from "react";
import ProductModel from "../../../Models/ProductModel";
import appConfig from "../../../Utils/AppConfig";
import "./ProductList.css";

function ProductList(): JSX.Element {

    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get<ProductModel[]>(appConfig.productsUrl);
                setProducts(response.data);
            }
            catch (err: any) {
                alert(err.message);
            }
        })();
    }, []);

    return (
        <div className="ProductList">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(p => <tr key={p.id}>
                        <td>{p.name}</td>
                        <td>{p.price}</td>
                        <td>{p.stock}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
}

export default ProductList;
