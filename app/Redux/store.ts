import { configureStore } from "@reduxjs/toolkit";
import asideReducer from './Slice/asideMenuSlice';

const store = configureStore({
   reducer: {
      asideReducer,
   }
})
export type RootState = ReturnType<typeof store.getState>
export default store;