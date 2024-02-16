import { logoutFirebase } from "../../fireBase/providers"
import { logout } from "../slices/authSlice"
import { clearNoteLogout } from "../slices/journalSlice"

export const startLogout = () => {
    return async(dispatch) => {
        await logoutFirebase()
        dispatch(clearNoteLogout())
        dispatch(logout(''))
    }
}