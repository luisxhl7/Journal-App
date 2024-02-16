import { doc, setDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../../fireBase/config"
import { setSaving, uptadeNote  } from "../slices/journalSlice"

export const startsaveNote = () => {
    return async(dispatch, getState) => {
        
        await dispatch(setSaving())

        const { uid } = getState().auth
        const { active:note } = getState().journal

        const noteToFireStore = {...note}
        delete noteToFireStore.id

        const docRef = doc(FirebaseDB, `/${uid}/journal/notes/${note.id}`)
        await setDoc(docRef, noteToFireStore, {merge: true})

        dispatch(uptadeNote(note))
    }
}
