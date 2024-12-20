import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ViewState {
  selectedView: string;
  navOpen: boolean;
  configure:any
}

const initialState: ViewState = {
  selectedView: "default",
  navOpen: false,
  configure: {},
};

export const selectedView = createSlice({
  name: "view",
  initialState,
  reducers: {
    setSelectedView: (state, action: PayloadAction<string>) => {
      state.selectedView = action.payload;
    },
    setNavOpen: (state, action: PayloadAction<boolean>) => {
      state.navOpen = action.payload;
    },
    setConfigure: (state, action: PayloadAction<any>) => {
      state.configure = action.payload;
    },
    setConfigureClear: (state) => {
      state.configure = {};
    },
  },
});

export const { setSelectedView, setNavOpen, setConfigure, setConfigureClear } =
  selectedView.actions;
export const viewReducer = selectedView.reducer;
