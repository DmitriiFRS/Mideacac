import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
   kukaNotVisible: boolean
}

const initialState: initialStateType = {
   kukaNotVisible: false
}

const mainPageSlice = createSlice({
   name: 'mainPage',
   initialState,
   reducers: {
      changeKukaStatus: (state, action: PayloadAction<boolean>) => {
         state.kukaNotVisible = action.payload;
      }
   }
})

export const {changeKukaStatus} = mainPageSlice.actions;
export default mainPageSlice.reducer;