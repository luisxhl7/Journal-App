import { collection, doc, setDoc } from "firebase/firestore/lite"
import { addNewEmpyNote, creatingNewNote, setActiveNote } from "../slices/journalSlice"
import { FirebaseDB } from "../../fireBase/config"

export const startNewNote = () => {
    return async(dispatch, getState) => {
        const { uid } = getState().auth

        dispatch( creatingNewNote() )

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
            imageUrls: []
        }

        const newDoc = doc( collection( FirebaseDB, `/${uid}/journal/notes` ) )
        await setDoc(newDoc, newNote)

        newNote.id = newDoc.id

        dispatch( addNewEmpyNote( newNote ))
        dispatch( setActiveNote( newNote ) )
    
    }
}
