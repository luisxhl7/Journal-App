import { checkingCredentials } from "../slices/authSlice"

export const chekingAuthentication = () => {
    return async(dispatch) => {

        dispatch(checkingCredentials())
    
    }
}