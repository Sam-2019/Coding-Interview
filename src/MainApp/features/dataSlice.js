import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: [
    {
      id: 0,
      name: "House"
    },
    {
      id: 1,
      name: "Vehicle"
    }
  ],
  reducers: {
    adddata: (state, action) => {
      return state.concat(action.payload);
    },
    removeData: (state, action) => {
      return state.filter((result) => result.id !== action.payload);
    }
  }
});

export const { adddata, removeData } = dataSlice.actions;

export const dataData = (state) => state.data;

export default dataSlice.reducer;
