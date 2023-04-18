export const INITIAL_STATE = {
  loading: false,
  songData: {},
  error: false,
  songInfo: {},
  songImg: {},
  songTitle: "",
  songURL: "",
};

export const ACTION_TYPES = {
  FETCH_START: "FETCH_START",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETCH_ERROR",
};

const songReducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_START:
      return {
        ...state,
        loading: true,
        error: false,
        songData: {},
      };
    case ACTION_TYPES.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        songData: {},
      };
    case ACTION_TYPES.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        songData: {},
      };
    default:
      return state;
  }

  //   if (action.type === "FETCH_START") {
  //     return {
  //       ...state,
  //       loading: true,
  //       error: false,
  //       post: {},
  //     };
  //   } else if (action.type === "FETCH_SUCCESS") {
  //     return {
  //       ...state,
  //       loading: false,
  //       error: false,
  //       post: action.payload,
  //     };
  //   } else if (action.type === "FETCH_ERROR") {
  //     return {
  //       ...state,
  //       loading: false,
  //       error: true,
  //       post: {},
  //     };
  //   }
};

export default songReducer;
