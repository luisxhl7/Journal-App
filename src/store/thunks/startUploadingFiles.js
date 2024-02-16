import { fileUplod } from "../../helpers/fileUplod"
import { setPhotosActiveNote, setSaving } from "../slices/journalSlice"

 
export const startUploadingFiles = (files = []) => {
    return async(dispatch) => {
        dispatch(setSaving())

        const fileUplodPromises = []
        for (const file of files) {
            fileUplodPromises.push( fileUplod(file))
        }

        const photosUrl = await Promise.all( fileUplodPromises )
        dispatch(setPhotosActiveNote(photosUrl))
    }
}
 