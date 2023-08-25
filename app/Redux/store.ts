import { configureStore } from "@reduxjs/toolkit";
import asideReducer from './Slice/asideMenuSlice';
import mainPageReducer from './Slice/mainPageSlice';

const store = configureStore({
   reducer: {
      asideReducer,
      mainPageReducer
   }
})
export type RootState = ReturnType<typeof store.getState>
export default store;