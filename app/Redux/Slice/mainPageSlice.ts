import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
   kukaNotVisible: boolean
   linesVisibility: boolean
   isFirstAction: boolean
   isSecondAction: boolean
   isThirdAction: boolean
   isNewestVisible: boolean
}

const initialState: initialStateType = {
   kukaNotVisible: false,
   linesVisibility: false,
   isFirstAction: false,
   isSecondAction: false,
   isThirdAction: false,
   isNewestVisible: false
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
      },
      firstAction: (state, action: PayloadAction<boolean>) => {
         state.isFirstAction = action.payload
      },
      secondAction: (state, action: PayloadAction<boolean>) => {
         state.isSecondAction = action.payload
      },
      thirdAction: (state, action: PayloadAction<boolean>) => {
         state.isThirdAction = action.payload
      },
      newestVisible: (state, action: PayloadAction<boolean>) => {
         state.isNewestVisible = action.payload
      }
   }
})

export const {changeKukaStatus, setVisibleLines, firstAction, secondAction, thirdAction, newestVisible} = mainPageSlice.actions;
export default mainPageSlice.reducer;