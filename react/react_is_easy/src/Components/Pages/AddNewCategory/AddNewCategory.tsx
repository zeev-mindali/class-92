import { SyntheticEvent, useState } from "react";
import "./AddNewCategory.css";

function AddNewCategory(): JSX.Element {
    const [category,setCategory] = useState("");

    const myCategory = (args:SyntheticEvent)=>{
        let value = (args.target as HTMLInputElement).value;
        setCategory(value);
    }

    const addNewCat = ()=>{
        if (localStorage.getItem("category")){
            console.log("true");
        } else {
           //if i don't have any categories....
           let categories = [];
           categories.push(category)
           localStorage.setItem("Categories",JSON.stringify(categories));
        }
    }

    return (
        <div className="AddNewCategory">
			<div className="Box">
                <input placeholder="Category name..." onKeyUp={(args)=>{setCategory(args.currentTarget.value)}}/>
                <input type="submit" value="add" onClick={addNewCat}/>
            </div>
        </div>
    );
}

export default AddNewCategory;
