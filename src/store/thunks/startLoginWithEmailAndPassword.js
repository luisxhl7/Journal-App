import { checkingCredentials } from "../slices/authSlice"

export const startLoginWithEmailAndPassword = (email, password) => {
    return async(dispatch) => {
        dispatch( checkingCredentials() )
    //     const result = await sigInWithEmail({email, password, displayName})

    //     console.log(result);
    //     if (!result.ok) {
    //         return dispatch( logout(result.errorMessage) )
    //     }

    //     dispatch(login(result))
    }
}