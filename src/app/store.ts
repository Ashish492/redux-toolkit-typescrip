import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter";
import { postReducer } from "../features";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    post:postReducer
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
