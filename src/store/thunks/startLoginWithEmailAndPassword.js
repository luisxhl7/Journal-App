import { loginWithEmailAndPassword } from "../../fireBase/providers"
import { checkingCredentials, login, logout } from "../slices/authSlice"

export const startLoginWithEmailAndPassword = ({email, password}) => {
    return async(dispatch) => {
        dispatch( checkingCredentials() )

        const result = await loginWithEmailAndPassword({email, password})

            console.log(result);
            if (!result.ok) {
                return dispatch( logout(result.errorMessage) )
            }

            dispatch(login(result))
    }
}