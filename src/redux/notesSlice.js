import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "notes",
  initialState: {
    items: [],
  },

  reducers: {
    addNotes(state, action) {
      state.items.push(action.payload);
    },
    deleteNotes(state, action) {
      state.items = state.items.filter((value) => {
        return value.id !== action.payload;
      });
    },
  },
});

export const { addNotes, deleteNotes } = slice.actions;
export const notesReducer = slice.reducer;
