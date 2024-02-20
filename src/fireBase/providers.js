import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider()


export const sigInWithGoogle = async() => {
    try {
        
        const result = await signInWithPopup(FirebaseAuth, googleProvider)
        
        // const credentials = GoogleAuthProvider.credentialFromResult(result)
        // const user = result.user
        // console.log(user);
        
        const {displayName, email, photoURL, uid} = result.user
        
        return {
            ok:true,
            displayName,
            email,
            photoURL,
            uid
        }
    } catch (error) {
        const errorMessage = error.message
        return {
            ok: false,
            errorMessage
        }
    }
}

export const sigInWithEmail = async({email, password, displayName}) => {
    try {
        
        const result = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
        // console.log(result);
        const {photoURL, uid} = result.user
        
        await updateProfile( FirebaseAuth.currentUser, { displayName } )

        return {
            ok:true,
            displayName,
            email,
            photoURL,
            uid
        }
    } catch (error) {
        const errorMessage = error.message
        return {
            ok: false,
            errorMessage
        }
    }
}

export const loginWithEmailAndPassword = async({email, password}) => {
    try {
        const result = await signInWithEmailAndPassword(FirebaseAuth, email, password)
        const {displayName, photoURL, uid} = result.user

        return {
            ok:true,
            displayName,
            email,
            photoURL,
            uid
        }
    
    } catch (error) {
        const errorMessage = error.message
        return {
            ok: false,
            errorMessage
        }
    }
}

export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut()
}