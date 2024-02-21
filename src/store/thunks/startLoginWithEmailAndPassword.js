import { loginWithEmailAndPassword } from "../../fireBase/providers"
import { checkingCredentials, login, logout } from "../slices/authSlice"

export const startLoginWithEmailAndPassword = ({email, password}) => {
    return async(dispatch) => {
        dispatch( checkingCredentials() )
        console.log('QUE RABIA!!!!!!!!!!!', email, password);
        const result = await loginWithEmailAndPassword({email, password})

        // console.log(result);
        if (!result.ok) {
            return dispatch( logout(result) )
        }

        dispatch(login(result))
    }
}