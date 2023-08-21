import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { goodsObjType, subMenuGoods } from '@/app/GoodsData/SubMenuGoods';


type initialStateType = {
   isSidebarOpen: boolean
   translateWindow: null | string
   isTransition: boolean
   mainMenuList: Array<mainMenuListType> 
   subMenuActive: Array<goodsObjType>
}
type mainMenuListType = {
   title: string
   href: null | string
   isActive: boolean
   id: number
   isOpened: boolean
}

const initialState: initialStateType = {
   isSidebarOpen: false,
   translateWindow: 'translateX(-110%)',
   isTransition: false,
   mainMenuList: [
      {
         title: 'Оборудование',
         href: null,
         isActive: true,
         id: 0,
         isOpened: false
      },
      {
         title: 'Логистика',
         href: null,
         isActive: false,
         id: 1,
         isOpened: false
      },
      {
         title: 'Монтаж и ПНР',
         href: null,
         isActive: false,
         id: 2,
         isOpened: false
      },
      {
         title: 'Проектирование и что-то еще',
         href: null,
         isActive: false,
         id: 3,
         isOpened: false
      },
      {
         title: 'И еще что-то',
         href: null,
         isActive: false,
         id: 4,
         isOpened: false
      },
      {
         title: 'Возможно еще что-то?',
         href: null,
         isActive: false,
         id: 5,
         isOpened: false
      },
   ],
   subMenuActive: subMenuGoods[0]
}

const sidebarSlice = createSlice({
   name: 'sidebar',
   initialState,
   reducers: {
      toggleSidebar: (state, action: PayloadAction<boolean>) => {
         state.isSidebarOpen = action.payload;
      },
      transformWindow: (state, action: PayloadAction<string>) => {
         state.translateWindow = action.payload
      },
      setActiveMenuItem: (state, action: PayloadAction<Array<mainMenuListType>>) => {
         state.mainMenuList = action.payload
      },
      isTransitionAside: (state, action: PayloadAction<boolean>) => {
         state.isTransition = action.payload
      },
      setActiveSubMenu: (state, action: PayloadAction<number>) => {
         state.subMenuActive = subMenuGoods[action.payload]
      },
      setTransitionMenu: (state, action) => {
         
      }
   }
})
export const {toggleSidebar, transformWindow, setActiveMenuItem, isTransitionAside, setActiveSubMenu, setTransitionMenu} = sidebarSlice.actions;
export default sidebarSlice.reducer;