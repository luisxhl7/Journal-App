import { collection, getDocs } from "firebase/firestore/lite"
import { FirebaseDB } from "../../fireBase/config"
import { setNotes } from "../slices/journalSlice"

export const startLoadingNotes = () => {
    return async(dispatch, getState) => {
        const { uid } = getState().auth
        const notes = []

        if (!uid) throw Error('El UID del usuario no existe')

        const collectionRef = collection(FirebaseDB, `/${uid}/journal/notes`)

        const docs = await getDocs(collectionRef)

        docs.forEach( doc =>{
            // console.log(doc.data());
            notes.push({
                id: doc.id,
                ...doc.data()
            })
        } )
        
        dispatch(setNotes(notes))
    }
}
