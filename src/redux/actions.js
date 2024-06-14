import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllNotes, getNoteById, createNote as createNoteApi, updateNote as updateNoteApi, deleteNote as deleteNoteApi } from '../api';

export const fetchNotes = createAsyncThunk('notes/fetchNotes', async () => {
  return await getAllNotes();
});

export const fetchNoteById = createAsyncThunk('notes/fetchNoteById', async (id) => {
  return await getNoteById(id);
});

export const createNote = createAsyncThunk('notes/createNote', async (note) => {
  return await createNoteApi(note);
});

export const updateNote = createAsyncThunk('notes/updateNote', async ({ id, note }) => {
  return await updateNoteApi(id, note);
});

export const deleteNote = createAsyncThunk('notes/deleteNote', async (id) => {
  await deleteNoteApi(id);
  return id;
});
