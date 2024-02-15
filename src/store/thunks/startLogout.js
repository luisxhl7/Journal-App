import { logoutFirebase } from "../../fireBase/providers"
import { logout } from "../slices/authSlice"

export const startLogout = () => {
    return async(dispatch) => {
        await logoutFirebase()
        dispatch(logout(''))
    }
}