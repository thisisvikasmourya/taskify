import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface TabDocument {
  tabId: string;
  documentId: string;
  isOpen: boolean;
}
export interface OpenTabState {
  newOpen: boolean;
  documentOpen: string;
  tabDocuments:any[];
}

const initialState: OpenTabState = {
  newOpen: false,
  documentOpen: "",
  tabDocuments:[],
};

export const opentab = createSlice({
  name: "opentab",
  initialState,
  reducers: {
    setNewOpen: (state, action: PayloadAction<boolean>) => {
      state.newOpen = action.payload;
    },
    setDocumentOpen: (state, action: PayloadAction<string>) => {
      state.documentOpen = action.payload;
    },
    setTabDocument: (state, action: PayloadAction<TabDocument>) => {
      const index = state.tabDocuments.findIndex(
        (doc) => doc.tabId === action.payload.tabId
      );
      if (index >= 0) {
        state.tabDocuments[index] = action.payload;
      } else {
        state.tabDocuments.push(action.payload);
      }
    },
  },
});

export const { setNewOpen, setDocumentOpen, setTabDocument } = opentab.actions;
export const opentabReducer = opentab.reducer;
