import { createSlice } from '@reduxjs/toolkit'

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null
    },
    reducers: {
        creatingNewNote: (state) => {
            state.isSaving =true
        },
        addNewEmpyNote: ( state, action ) => {
            state.notes.push(action.payload)
            state.isSaving = false
        },
        setActiveNote: ( state, action ) => {
            state.active = action.payload
        },
        setNotes : ( state, action ) => {
            state.notes = action.payload
        },
        setSaving: ( state, action ) => {
            state.counter += 1
        },
        uptadeNote: ( state, action ) => {
            state.counter += 1
        },
        deleteNoteById: ( state, action ) => {
            state.counter += 1
        }
    },
})

export const { addNewEmpyNote, setActiveNote, setNotes, setSaving, uptadeNote, deleteNoteById, creatingNewNote } = journalSlice.actions;

export default journalSlice.reducer;