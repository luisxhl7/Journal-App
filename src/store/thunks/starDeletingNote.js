import { deleteDoc, doc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../fireBase/config";
import { deleteNoteById } from "../slices/journalSlice";

export const starDeletingNote = () => {
    return async( dispatch, getState) => {
        const { uid } = getState().auth
        const { active:note } = getState().journal
        // console.log(note.id);

        const docRef = doc( FirebaseDB, `/${uid}/journal/notes/${note.id}`)
        await deleteDoc( docRef )

        dispatch(deleteNoteById(note.id))
    }
}
