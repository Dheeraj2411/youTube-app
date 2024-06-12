import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import infoSlice from "./infoSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    videoInfo: infoSlice,
  },
});

export default store;
