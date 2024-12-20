import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  master: {},
  whereToSave: {},
  formBuilder: {},
  docProperties: {},
  setSelectedNodeId: "",
  setOpenFolders: null,
  setShowList: null,
  folderEditId: "",
  treeFolder: "",
  selectFolderList: [],
  filter: {},
  configure: {},
  breadCrumb: "",
  primaryKeylist:[]
};
export const master = createSlice({
  name: "createmaster",
  initialState,
  reducers: {
    setMaster: (state, action: PayloadAction<any>) => {
      state.master = action.payload;
    },
    setWhereToSave: (state, action: PayloadAction<any>) => {
      state.whereToSave = action.payload;
    },
    setFormBuilder: (state, action: PayloadAction<any>) => {
      state.formBuilder = action.payload;
    },

    setDocProperties: (state, action: PayloadAction<any>) => {
      state.docProperties = action.payload;
    },

    setClearMaster: (state) => {
      state.master = {};
      state.whereToSave = {};
      state.formBuilder = {};
      state.docProperties = {};
      state.folderEditId = "";
      state.treeFolder = "";
      state.breadCrumb = "";
    },

    setSelectedNodeId: (state, action: PayloadAction<string | null>) => {
      state.selectedNodeId = action.payload;
    },
    setOpenFolders: (state, action: PayloadAction<string[]>) => {
      state.openFolders = action.payload;
    },
    setShowList: (state, action: PayloadAction<any[]>) => {
      state.showList = action.payload;
    },
    setFolderEditId: (state, action: PayloadAction<any>) => {
      state.folderEditId = action.payload;
    },
    setSelectFolderList: (state, action: PayloadAction<any>) => {
      state.selectFolderList = action.payload;
    },

    setTreeFolderCheckbox: (state, action: PayloadAction<any>) => {
      state.treeFolder = action.payload;
    },
    setFilter: (state, action: PayloadAction<any>) => {
      state.filter = action.payload;
    },
    setConfigure: (state, action: PayloadAction<any>) => {
      state.configure = action.payload;
    },
    setBreadCrumb: (state, action: PayloadAction<any>) => {
      state.breadCrumb = action.payload;
    },
    setPrimaryKeylist: (state, action: PayloadAction<any>) => {
      state.primaryKeylist = action.payload;
    },
  },
});

export const {
  setMaster,
  setDocProperties,
  setWhereToSave,
  setFormBuilder,
  setClearMaster,
  setSelectedNodeId,
  setOpenFolders,
  setShowList,
  setFolderEditId,
  setTreeFolderCheckbox,
  setSelectFolderList,
  setFilter,
  setBreadCrumb,
  setPrimaryKeylist,
  setConfigure,
} = master.actions;
export const masterReducer = master.reducer;
