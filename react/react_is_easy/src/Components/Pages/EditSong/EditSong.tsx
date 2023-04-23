import { useParams } from "react-router-dom";
import "./EditSong.css";
import { useEffect, useState } from "react";
import Song from "../../modal/Song";
import { youtube } from "../../Redux/Store";
import { Button, ButtonGroup, TextField, Typography } from "@mui/material";
import { Cancel, Send } from "@mui/icons-material";

function EditSong(): JSX.Element {
  const params = useParams();
  const [refresh, setRefresh] = useState(false);
  if (params.id) {
    var songNum: number = +params.id | 0;
    console.log(songNum);
  }
  const [song, setSong] = useState<Song>(
    youtube.getState().songs.allSongs.filter((item) => item.id === songNum)[0]
  );

  return (
    <div className="EditSong">
      <div className="Box" style={{ width: 300 }}>
        <Typography variant="h3" className="HeadLine">
          Edit song
        </Typography>
        <hr />
        {/*song title
        <input type="text" value={song?.title} />
        */}

        <TextField name="song title" variant="outlined" className="TextBox" />
        <br />
        {/*        
        song description
        <br />
        <input type="text" value={song?.descption} />
        <br />
        */}
        <TextField
          name="song description"
          variant="outlined"
          className="TextBox"
        />
        <br />

        <br />
        {/*
        song image
        <br />
        <input type="text" value={song?.img} />
        <br />
        */}
        <TextField
          name="song image"
          variant="outlined"
          className="TextBox"
          type="url"
        />
        <br />
        <br />
        {/*
        <br />
        <input type="submit" />
        <input type="reset" />
        */}
        <ButtonGroup variant="contained" fullWidth>
          <Button color="primary" startIcon={<Send />}>
            Update
          </Button>
          <Button color="secondary" startIcon={<Cancel />}>
            Cancel
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default EditSong;
