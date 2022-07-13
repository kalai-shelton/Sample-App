import { createSlice } from "@reduxjs/toolkit";
import { sideMenuState} from "./sideMenu-state";

export const initialState = {
  ...sideMenuState,
};

const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    setMenu: (state, action) => {
      state.isSideMenu = action.payload;
    },
 
   
  },
});
export const sideMenuActions = sideMenuSlice.actions;
export default sideMenuSlice;