import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
   kukaNotVisible: boolean
   linesVisibility: boolean
   isFirstAction: boolean
   isSecondAction: boolean
   isThirdAction: boolean
   isFourthAction: boolean
}

const initialState: initialStateType = {
   kukaNotVisible: false,
   linesVisibility: false,
   isFirstAction: false,
   isSecondAction: false,
   isThirdAction: false,
   isFourthAction: false
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
      fourthAction: (state, action: PayloadAction<boolean>) => {
         state.isFourthAction = action.payload
      }
   }
})

export const {changeKukaStatus, setVisibleLines, firstAction, secondAction, thirdAction, fourthAction} = mainPageSlice.actions;
export default mainPageSlice.reducer;