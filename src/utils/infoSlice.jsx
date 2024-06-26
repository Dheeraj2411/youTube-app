import { createSlice } from "@reduxjs/toolkit";

const infoSlice = createSlice({
  name: "videoInfo",
  initialState: {},
  reducers: {
    watchVideoInfo: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { watchVideoInfo } = infoSlice.actions;
export default infoSlice.reducer;
