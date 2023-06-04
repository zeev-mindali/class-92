import "./AddProduct.css";
import { useForm } from "react-hook-form";
import ProductModel from "../../../Models/ProductModel";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import appConfig from "../../../Utils/AppConfig";

function AddProduct(): JSX.Element {

    const navigate = useNavigate();
    const { register, handleSubmit, formState } = useForm<ProductModel>();

    async function submit(product: ProductModel) {
        try {
            const response = await axios.post<ProductModel>(appConfig.productsUrl, product);
            alert("Product has been added. ID: " + response.data.id);
            navigate("/products");
        }
        catch (err: any) {
            alert(err.message);
        }
    }

    return (
        <div className="AddProduct Box">

            <form onSubmit={handleSubmit(submit)}>

                <label>Name:</label>
                <input type="text" autoFocus {...register("name", {
                    required: true,
                    minLength: 3
                })} />
                {formState.errors.name?.type === "required" && <span>Missing name</span>}
                {formState.errors.name?.type === "minLength" && <span>Name too short</span>}

                <label>Price:</label>
                <input type="number" step="0.01" {...register("price", {
                    required: { value: true, message: "Missing price" },
                    min: { value: 0, message: "Price can't be negative" }
                })} />
                <span>{formState.errors.price?.message}</span>

                <label>Stock:</label>
                <input type="number" {...register("stock", {
                    required: { value: true, message: "Missing stock" },
                    min: { value: 0, message: "Stock can't be negative" }
                })} />
                <span>{formState.errors.stock?.message}</span>

                <button>Add</button>

            </form>
        </div>
    );
}

export default AddProduct;