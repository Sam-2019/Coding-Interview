import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./MainApp/features/dataSlice";

export default configureStore({
  reducer: {
    data: dataReducer
  }
});
