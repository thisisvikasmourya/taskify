import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { viewReducer } from "@/store/viewSlice";
import { opentabReducer } from "@/store/newTabSlice";
import { authReducer } from "./authSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "auth",
  storage: storage,
  whitelist: [
    "authState",
    "user",
    "name",
    "companyId",
    "timer",
    "token",
    "workSpaceId",
    "isVerified",
    "tempCreate",
    "subscription",
    "mode",
    "tempInvoice",
    "resultData",
  ],
};

const viewPersistConfig = {
  key: "view",
  storage: storage,
  whitelist: ["selectedView", "navOpen","configure"],
};
const previewPersistConfig = {
  key: "opentab",
  storage: storage,
  whitelist: ["newOpen", "documentOpen"],
};



const rootReducer = combineReducers({
  view: persistReducer(viewPersistConfig, viewReducer),
  opentab: persistReducer(previewPersistConfig, opentabReducer),
  auth: persistReducer(authPersistConfig, authReducer), // Add auth reducer

});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
