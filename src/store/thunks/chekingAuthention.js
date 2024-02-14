import { checkingCredentials } from "../slices/authSlice"

export const chekingAuthentication = (email, Password) => {
    return async(dispatch) => {
        console.log(email,Password);
        dispatch(checkingCredentials())
    }
}