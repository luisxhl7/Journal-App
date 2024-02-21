import { sigInWithEmail } from "../../fireBase/providers"
import { checkingCredentials, login, logout } from "../slices/authSlice"

export const startEmailSignIn = ({email, password, displayName}) => {
    return async(dispatch) => {
        dispatch( checkingCredentials() )
        const result = await sigInWithEmail({email, password, displayName})

        // console.log(result);
        if (!result.ok) {
            return dispatch( logout(result) )
        }

        dispatch(login(result))
    }

}