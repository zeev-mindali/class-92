//add song, update song, delete song by id, getSongById, getAllSongs

import dal_mysql from "../Utils/dal_mysql";
import Song from "../Models/Song";
import { OkPacket } from "mysql";

const getAllSongs = async () => {
  const SQLcmd = "SELECT * FROM songs";
  const data = await dal_mysql.execute(SQLcmd);
  return data;
};

const getSongById = async (id: number) => {
  const SQLcmd = `SELECT * FROM songs WHERE id=${id}`;
  const data = await dal_mysql.execute(SQLcmd);
  return data;
};

const deleteSongById = async (id: number) => {
  console.log(`delete song id ${id}`);
  const SQLcmd = `DELETE FROM songs WHERE id=${id}`;
  await dal_mysql.execute(SQLcmd);
};

const addSong = async (newSong: Song) => {
  const SQLcmd = `
        INSERT INTO songs
        (description, img, title, url)
        VALUES
        ('${newSong.description}','${newSong.img}','${newSong.title}','${newSong.url}')
    `;
  console.log(SQLcmd);
  const result: OkPacket = await dal_mysql.execute(SQLcmd);
  return result.insertId;
};

export { getAllSongs, getSongById, deleteSongById, addSong };
