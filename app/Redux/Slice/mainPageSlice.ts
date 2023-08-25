import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
   kukaNotVisible: boolean
   linesVisibility: boolean
}

const initialState: initialStateType = {
   kukaNotVisible: false,
   linesVisibility: false
}

const mainPageSlice = createSlice({
   name: 'mainPage',
   initialState,
   reducers: {
      changeKukaStatus: (state, action: PayloadAction<boolean>) => {
         state.kukaNotVisible = action.payload;
      },
      setVisibleLines: (state, action: PayloadAction<boolean>) => {
         state.linesVisibility = action.payload;
      }
   }
})

export const {changeKukaStatus, setVisibleLines} = mainPageSlice.actions;
export default mainPageSlice.reducer;