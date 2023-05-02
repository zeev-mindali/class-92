import { Photo } from "../Modal/Photo";

//initial state
export class PhotosState {
  public allPhotos: Photo[] = [];
}

//action list
export enum PhotoActionType {
  addPhoto = "addPhoto",
  deletePhoto = "deletePhoto",
  updatePhoto = "updatePhoto",
  downloadPhoto = "downloadPhoto",
}

//action data structure
export interface PhotoAction {
  type: PhotoActionType;
  payload?: any;
}

//function
export const addPhotoAction = (newPhoto: Photo): PhotoAction => {
  return { type: PhotoActionType.addPhoto, payload: newPhoto };
};

export const deletePhotoAction = (id: number): PhotoAction => {
  return { type: PhotoActionType.deletePhoto, payload: id };
};

export const updatePhotoAction = (updatedPhoto: Photo): PhotoAction => {
  return { type: PhotoActionType.updatePhoto, payload: updatedPhoto };
};

export const downloadPhotoAction = (photos: Photo[]): PhotoAction => {
  return { type: PhotoActionType.downloadPhoto, payload: photos };
};

//reducer

export const photoReducer = (
  currentState: PhotosState = new PhotosState(),
  action: PhotoAction
): PhotosState => {
  const newState = { ...currentState };

  switch (action.type) {
    case PhotoActionType.addPhoto:
      newState.allPhotos = [...newState.allPhotos, action.payload];
      break;
    case PhotoActionType.deletePhoto:
      break;
    case PhotoActionType.downloadPhoto:
      newState.allPhotos = action.payload;
      break;
    case PhotoActionType.updatePhoto:
      break;
  }

  return newState;
};
