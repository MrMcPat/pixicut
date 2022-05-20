import { configureStore } from "@reduxjs/toolkit";

import selfSlice from "./self-slice";
import usersSlice from "./users-slice";

const store = configureStore({
  reducer: {
    self: selfSlice.reducer,
    users: usersSlice.reducer,
  },
});

export default store;
