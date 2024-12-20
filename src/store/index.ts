import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { viewReducer } from "@/store/viewSlice";
import { opentabReducer } from "@/store/newTabSlice";
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

const listPersistConfig = {
  key: "list",
  storage: storage,
  whitelist: ["list"],
};

const docTypePersistConfig = {
  key: "docType",
  storage: storage,
  whitelist: [
    "docType",
    "docProperties",
    "whereToSave",
    "formBuilder",
    "draftSteps",
    "folderEditId",
    "treeFolder",
    "breadCrumb",
    "configure",
  ],
};
const masterPersistConfig = {
  key: "master",
  storage: storage,
  whitelist: [
    "master",
    "whereToSave",
    "formBuilder",
    "folderEditId",
    "treeFolder",
    "breadCrumb",
    "primaryKeylist",
    "configure",
  ],
};

const quickSearchPersistConfig = {
  key: "quicksearch",
  storage: storage,
  whitelist: ["searchdata", "mailseting", "resultData"],
};

const formElementsPersistConfig = {
  key: "formElements",
  storage: storage,
  whitelist: ["elements"],
};

const configurationPersistConfig = {
  key: "configuration",
  storage: storage,
  whitelist: ["configList", "makerCheckerStatus"],
};

const authorizationPersistConfig = {
  key: "authorization",
  storage: storage,
  whitelist: ["authorizationList", "allRights"],
};

const advancedSearchPersistConfig = {
  key: "advancedSearch",
  storage: storage,
  whitelist: ["advancedSearchId", "configColumn"],
};

const rootReducer = combineReducers({
  view: persistReducer(viewPersistConfig, viewReducer),
  opentab: persistReducer(previewPersistConfig, opentabReducer),

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
