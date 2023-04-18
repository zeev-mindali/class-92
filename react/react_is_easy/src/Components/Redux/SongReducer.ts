import Song from "../modal/Song";

//state of songs
export class SongState {
  public songs: Song[] = [];
}

//what action i will use....
export enum SongActionType {
  addSong = "addSong",
  deleteSong = "deleteSong",
  searchSong = "searchSong",
}

//action data structure
export interface SongAction {
  type: SongActionType;
  payload?: any;
}

//which function i will dispatch
export function addSongAction(newSong: Song): SongAction {
  return { type: SongActionType.addSong, payload: newSong };
}

export function deleteSongAction(songName: string): SongAction {
  return { type: SongActionType.deleteSong, payload: songName };
}

export function searchSongAction(songName: string): SongAction {
  return { type: SongActionType.searchSong, payload: songName };
}

//reducer - we must use the function signature
export function SongReducer(
  currentState: SongState = new SongState(),
  action: SongAction
): SongState {
  const newState = { ...currentState };

  switch (action.type) {
    case SongActionType.addSong:
      newState.songs.push(action.payload);
      break;

    case SongActionType.deleteSong:
      newState.songs = newState.songs.filter(
        (item) => item.title != action.payload
      );
      break;

    case SongActionType.searchSong:
      newState.songs = newState.songs.filter((item) =>
        item.title.includes(action.payload)
      );
      break;
  }
  return newState;
}
