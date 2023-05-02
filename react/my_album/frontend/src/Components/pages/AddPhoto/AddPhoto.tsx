import { useEffect, useState } from "react";
import { store } from "../../redux/Store";
import "./AddPhoto.css";
import { useForm } from "react-hook-form";
import { Photo } from "../../Modal/Photo";
import { addPhotoAction } from "../../redux/PhotosReducer";

function AddPhoto(): JSX.Element {
  //URL, descrption, category, current date (disabled), time (disabled)
  const [clock, setClock] = useState("");

  //form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Photo>();

  const send = (data: Photo) => {
    data.id = store.getState().photos.allPhotos.length + 1;
    data.time = new Date().toLocaleTimeString();
    data.date = new Date().toDateString();
    //console.log(data);
    store.dispatch(addPhotoAction(data));
    //console.log(store.getState().photos.allPhotos);
    localStorage.setItem(
      "photos",
      JSON.stringify(store.getState().photos.allPhotos)
    );
  };

  useEffect(() => {
    setInterval(() => {
      setClock(new Date().toLocaleTimeString());
      //console.log(new Date().toLocaleTimeString());
    }, 900);
  }, []);

  const myDesign = { marginTop: 50, width: 300 };

  return (
    <div className="AddPhoto Box" style={myDesign}>
      <form onSubmit={handleSubmit(send)}>
        <h3>Add Photo</h3>
        <hr />
        <input type="url" placeholder="enter image url" {...register("URL")} />
        <br />
        <input
          type="text"
          placeholder="enter image description"
          {...register("description")}
        />
        <br />
        <select {...register("category")}>
          <option disabled>Choose Category</option>
          {store.getState().category.categories.map((item) => (
            <option>{item.name}</option>
          ))}
        </select>
        <br />
        {new Date().toDateString()} <br />
        {clock}
        <br />
        <button>Add Photo</button>
      </form>
    </div>
  );
}

export default AddPhoto;
