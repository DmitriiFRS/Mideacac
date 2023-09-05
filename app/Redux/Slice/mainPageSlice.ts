import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
   kukaNotVisible: boolean
   linesVisibility: boolean
   isFirstAction: boolean
   isSecondAction: boolean
   isThirdAction: boolean
   isNewestVisible: boolean
   even: boolean,
   odd: boolean
}

const initialState: initialStateType = {
   kukaNotVisible: false,
   linesVisibility: false,
   isFirstAction: false,
   isSecondAction: false,
   isThirdAction: false,
   isNewestVisible: false,
   even: false,
   odd: false,
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
         state.isFirstAction = action.payload;
      },
      secondAction: (state, action: PayloadAction<boolean>) => {
         state.isSecondAction = action.payload;
      },
      thirdAction: (state, action: PayloadAction<boolean>) => {
         state.isThirdAction = action.payload;
      },
      newestVisible: (state, action: PayloadAction<boolean>) => {
         state.isNewestVisible = action.payload;
      },
      referenceEven: (state, action: PayloadAction<boolean>) => {
         state.even = action.payload;
      },
      referenceOdd: (state, action: PayloadAction<boolean>) => {
         state.odd = action.payload;
      }
   }
})

export const {changeKukaStatus, setVisibleLines, firstAction, secondAction, thirdAction, newestVisible, referenceEven, referenceOdd} = mainPageSlice.actions;
export default mainPageSlice.reducer;