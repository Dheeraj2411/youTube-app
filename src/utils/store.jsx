import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import infoSlice from "./infoSlice";
import videoSlice from "./videoSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    videoInfo: infoSlice,
    video: videoSlice,
  },
});

export default store;
