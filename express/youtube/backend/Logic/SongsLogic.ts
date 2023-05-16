//add song, update song, delete song, getSongById, getAllSongs

import dal_mysql from "../Utils/dal_mysql";

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

export { getAllSongs, getSongById };
