import usersReducer from "../users/usersSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
reducer: {
users: usersReducer
}
});

export default store