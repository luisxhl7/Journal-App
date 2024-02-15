import { setActiveNote } from "../slices/journalSlice"


export const startViewNote = ({id, title, body, date, imageUrls}) => {
    return async(dispatch) => {
        dispatch(setActiveNote({id, title, body, date, imageUrls}))
    }
}
