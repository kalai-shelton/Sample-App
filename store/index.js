import { configureStore } from "@reduxjs/toolkit";
import sideMenuSlice from "../components/SideMenu/store/sideMenu-slice";

const store = configureStore({
    reducer: {
        sideMenu:sideMenuSlice.reducer
    },
});

export default store;