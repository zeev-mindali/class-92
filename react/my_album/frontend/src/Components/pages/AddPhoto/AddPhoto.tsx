import { useEffect, useState } from "react";
import { store } from "../../redux/Store";
import "./AddPhoto.css";
import { useForm } from "react-hook-form";
import { Photo } from "../../Modal/Photo";
import { addPhotoAction } from "../../redux/PhotosReducer";
import { useNavigate } from "react-router-dom";

function AddPhoto(): JSX.Element {
  //URL, descrption, category, current date (disabled), time (disabled)
  const [clock, setClock] = useState("");
  const [imageURL, setURL] = useState("");
  const navigate = useNavigate();
  const previewStyle = {
    width: 300,
    margin: 10,
  };
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
    navigate("/");
  };

  useEffect(() => {
    setInterval(() => {
      setClock(new Date().toLocaleTimeString());
      //console.log(new Date().toLocaleTimeString());
    }, 900);
  }, []);

  const myDesign = { marginTop: 50, width: 300 };

  return (
    <div
      style={{ display: "flex", justifyContent: "center" }}
      className="AddPhoto"
    >
      <div className="Box" style={myDesign}>
        <form onSubmit={handleSubmit(send)}>
          <h3>Add Photo</h3>
          <hr />
          <input
            type="url"
            placeholder="enter image url"
            {...register("URL")}
            onBlur={(e) => setURL(e.target.value)}
          />
          <br />
          {/* <input
            type="text"
            placeholder="enter image description"
            {...register("description")}
          /> */}
          <textarea
            placeholder="enter image description"
            rows={3}
            style={{ width: 300 }}
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
      <div className="Box" style={myDesign}>
        {imageURL && (
          <div>
            <h3>Image Preview</h3>
            <img src={imageURL} alt={imageURL} style={previewStyle} />
          </div>
        )}
      </div>
    </div>
  );
}

export default AddPhoto;
