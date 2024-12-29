import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ExecOptionsWithStringEncoding } from "child_process";
export interface IAuthState {
  authState: boolean;
  user: any;
  name: string;
  companyId: string;
  token: any;
  timer: any;
  isOtpSend: any;
  workSpace: string;
  isVerified: boolean;
  workSpaceId: string;
  tempCreate: boolean;
  subscription: any;
  mode: string;
  tempInvoice: any;
}

const initialState: IAuthState = {
  authState: false,
  user: {},
  name: "",
  companyId: "",
  token: null,
  timer: 0,
  isOtpSend: false,
  workSpace: "",
  isVerified: false,
  workSpaceId: "",
  tempCreate: false,
  subscription: {},
  mode: "",
  tempInvoice: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<boolean>) => {
      state.authState = action.payload;
    },
    setUser: (state, action: PayloadAction<any>) => {
      // Adjust type if you have a user type
      state.user = action.payload;
    },
    setName: (state, action: PayloadAction<any>) => {
      state.name = action.payload;
    },
    setCompanyId: (state, action: PayloadAction<any>) => {
      state.companyId = action.payload;
    },
    setToken: (state, action: PayloadAction<any>) => {
      // Adjust type if you have a token type
      state.token = action.payload;
    },
    logout: (state) => {
      state.authState = false;
      state.user = null;
      state.companyId = "";
      state.token = null;
      state.isVerified = false;
      state.workSpaceId = "";
      state.subscription = {};
      state.mode = "";
    },
    setOtpTimer: (state, action: PayloadAction<any>) => {
      state.timer = action.payload;
    },
    setIsOtpSend: (state, action: PayloadAction<any>) => {
      state.isOtpSend = action.payload;
    },
    setWorkSpaceList: (state, action: PayloadAction<any>) => {
      state.workSpace = action.payload;
    },
    setIsVerified: (state, action: PayloadAction<any>) => {
      state.isVerified = action.payload;
    },
    setWorkSpaceId: (state, action: PayloadAction<any>) => {
      state.workSpaceId = action.payload;
    },
    setTempCreate: (state, action: PayloadAction<any>) => {
      state.tempCreate = action.payload;
    },
    setSubscription: (state, action: PayloadAction<any>) => {
      state.subscription = action.payload;
    },
    setMode: (state, action: PayloadAction<any>) => {
      state.mode = action.payload;
    },
    setTempInvoice: (state, action: PayloadAction<any>) => {
      state.tempInvoice = action.payload;
    },
    setUserFirstName: (state, action: PayloadAction<string>) => {
      if (state.user) {
        state.user.first_name = action.payload;
      }
    },
    setUserLastName: (state, action: PayloadAction<string>) => {
      if (state.user) {
        state.user.last_name = action.payload;
      }
    },
  },
});

export const {
  setAuthState,
  setUser,
  setName,
  setCompanyId,
  setToken,
  logout,
  setOtpTimer,
  setWorkSpaceList,
  setIsVerified,
  setWorkSpaceId,
  setTempCreate,
  setSubscription,
  setMode,
  setTempInvoice,
  setUserFirstName,
  setUserLastName,
} = authSlice.actions;
export const authReducer = authSlice.reducer;
