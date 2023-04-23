import { useNavigate, useParams } from "react-router-dom";
import "./deleteSong.css";
import { useEffect } from "react";

function DeleteSong(): JSX.Element {
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    navigate("/");
  }, []);

  return (
    <div className="deleteSong">{params.title} was deleted successfully</div>
  );
}

export default DeleteSong;
