import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./slices/postSlices";
import roomReducer from "./slices/roomSlices";

export default configureStore({
  reducer: {
    data: postReducer,
    rooms: roomReducer,
  },
});
