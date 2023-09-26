import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
   isFixedEventActive: boolean
   linesVisibility: boolean
   scrollRate: number | null
   isNewestVisible: boolean
   even: boolean
   odd: boolean
   isSidemenuVisible: boolean
}

const initialState: initialStateType = {
   isFixedEventActive: false,
   linesVisibility: false,
   scrollRate: null,
   isNewestVisible: false,
   even: false,
   odd: false,
   isSidemenuVisible: true
}

const mainPageSlice = createSlice({
   name: 'mainPage',
   initialState,
   reducers: {
      changeEventStatus: (state, action: PayloadAction<boolean>) => {
         state.isFixedEventActive = action.payload;
      },
      setVisibleLines: (state, action: PayloadAction<boolean>) => {
         state.linesVisibility = action.payload;
      },
      scrollPosition: (state, action: PayloadAction<number>) => {
         state.scrollRate = action.payload
      },
      newestVisible: (state, action: PayloadAction<boolean>) => {
         state.isNewestVisible = action.payload;
      },
      referenceEven: (state, action: PayloadAction<boolean>) => {
         state.even = action.payload;
      },
      referenceOdd: (state, action: PayloadAction<boolean>) => {
         state.odd = action.payload;
      },
      setSidemenuVisible: (state, action: PayloadAction<boolean>) => {
         state.isSidemenuVisible = action.payload
      }
   }
})

export const {changeEventStatus, setVisibleLines, scrollPosition, newestVisible, referenceEven, referenceOdd, setSidemenuVisible} = mainPageSlice.actions;
export default mainPageSlice.reducer;