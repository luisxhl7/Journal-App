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
            state.messageSaved = ''
        },
        setNotes : ( state, action ) => {
            state.notes = action.payload
        },
        setSaving: ( state ) => {
            state.isSaving = true
            state.messageSaved = ''
        },
        uptadeNote: ( state, action ) => {
            state.isSaving = false
            state.notes = state.notes.map( note => {
                if (note.id === action.payload.id) {
                    return action.payload
                }
                return note
            })
            state.messageSaved = `${action.payload.title}, actualizada correctamente`
        },
        setPhotosActiveNote: ( state, action ) => {
            state.isSaving = false
            state.active.imageUrls =[ ...state.active.imageUrls, ...action.payload]
        },
        // deleteNoteById: ( state, action ) => {
        //     state.counter += 1
        // }
    },
})

export const { addNewEmpyNote, setActiveNote, setNotes, setSaving, uptadeNote, deleteNoteById, creatingNewNote, setPhotosActiveNote } = journalSlice.actions;

export default journalSlice.reducer;