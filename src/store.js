import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/home/usersSlice";

export default configureStore({
  reducer: {
    users: usersReducer,
  },
});
