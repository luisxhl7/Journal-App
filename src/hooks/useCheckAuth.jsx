import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login, logout } from "../store/slices/authSlice"
import { FirebaseAuth } from "../fireBase/config"
import { startLoadingNotes } from "../store/thunks/startLoadingNotes"

export const useCheckAuth = () => {
    const { status } = useSelector( state => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, async(user) => {
        if (!user) {
            return dispatch( logout())
        }else{
            const {uid, email, displayName, photoURL} = user
            dispatch(login({uid, email, displayName, photoURL}))
            dispatch(startLoadingNotes())
        }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return {
        status
    }
}
