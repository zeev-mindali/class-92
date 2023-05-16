//add song, update song, delete song by id, getSongById, getAllSongs

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

const deleteSongById = async (id: number) => {
  console.log(`delete song id ${id}`);
  const SQLcmd = `DELETE FROM songs WHERE id=${id}`;
  await dal_mysql.execute(SQLcmd);
};

export { getAllSongs, getSongById, deleteSongById };
