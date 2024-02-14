import { sigInWithGoogle } from "../../fireBase/providers"
import { checkingCredentials, login, logout } from "../slices/authSlice"

export const startGoogleSignIn = () => {
    return async(dispatch) => {
        dispatch( checkingCredentials() )

        const result = await sigInWithGoogle()

        if (!result.ok) {
            return dispatch( logout(result.errorMessage) )
        }

        dispatch(login(result))
    }

}