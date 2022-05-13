import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import mockedData from '../data/mockedData';

export interface Note {
  id: string;
  title: string;
  category: string;
  date: Date;
  content: string;
}

export interface NoteState {
  notes: Note[];
}

const initialState: NoteState = {
  notes: mockedData,
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
    },
  },
});

export const { addNote } = notesSlice.actions;

export default notesSlice.reducer;