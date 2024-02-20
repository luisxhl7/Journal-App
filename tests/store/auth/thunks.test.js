import { loginWithEmailAndPassword, logoutFirebase, sigInWithEmail, sigInWithGoogle } from "../../../src/fireBase/providers"
import { checkingCredentials, login, logout } from "../../../src/store/slices/authSlice"
import { clearNoteLogout } from "../../../src/store/slices/journalSlice"
import { chekingAuthentication } from "../../../src/store/thunks/chekingAuthention"
import { startEmailSignIn } from "../../../src/store/thunks/startEmailSignin"
import { startGoogleSignIn } from "../../../src/store/thunks/startGoogleSignIn"
import { startLoginWithEmailAndPassword } from "../../../src/store/thunks/startLoginWithEmailAndPassword"
import { startLogout } from "../../../src/store/thunks/startLogout"
import { demoUser } from "../../fixtures/authFixtures"

jest.mock('../../../src/fireBase/providers')

describe('Pruebas en AuthThunks', () => {
    const dispatch = jest.fn()

    beforeEach(() => jest.clearAllMocks())

    test('Debe de invocar el checkingCredentials', async() => {
        
        await chekingAuthentication()(dispatch)

        expect( dispatch ).toHaveBeenCalledWith(checkingCredentials())
    })
    test('startGoogleSignIn debe de invocar el checkingCredentials y login - exito', async() => {
        
        const loginData = { ok: true, ...demoUser}
        await sigInWithGoogle.mockResolvedValue( loginData )
        await startGoogleSignIn()(dispatch)

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() )
        expect( dispatch ).toHaveBeenCalledWith( login(loginData) )
    })
    test('startGoogleSignIn debe de invocar el checkingCredentials y logout - error', async() => {
        
        const loginData = { ok: false, errorMessage: 'hubo un error'}
        await sigInWithGoogle.mockResolvedValue( loginData )
        await startGoogleSignIn()(dispatch)

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() )
        expect( dispatch ).toHaveBeenCalledWith( logout(loginData.errorMessage) )
    })
    test('startLoginWithEmailAndPassword debe de invocar el checkingCredentials y login - exito', async() => {
        const LoginWithEmailAndPassword = {email: 'luis@gmail.com', password: 'luis123' }

        const loginData = { ok: true, ...demoUser}
        
        await loginWithEmailAndPassword.mockResolvedValue( loginData )
        await startLoginWithEmailAndPassword(LoginWithEmailAndPassword)(dispatch)

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() )
        expect( dispatch ).toHaveBeenCalledWith( login(loginData) )
    })
    test('startLoginWithEmailAndPassword debe de invocar el checkingCredentials y logout - error', async() => {
        const LoginWithEmailAndPassword = {email: 'luis@gmail.com', password: 'luis123' }

        const loginData = { ok: false, errorMessage: 'datos incorrectos'}
        
        await loginWithEmailAndPassword.mockResolvedValue( loginData )
        await startLoginWithEmailAndPassword(LoginWithEmailAndPassword)(dispatch)

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() )
        expect( dispatch ).toHaveBeenCalledWith( logout(loginData.errorMessage) )
    })
    test('startLoginWithEmailAndPassword debe de invocar el checkingCredentials y login - exito', async() => {
        const createUserWithEmailAndPassword = {email: 'luis@gmail.com', password: 'luis123', displayName: 'lucho' }

        const loginData = { ok: true, ...demoUser}
        
        await sigInWithEmail.mockResolvedValue( loginData )
        await startEmailSignIn(createUserWithEmailAndPassword)(dispatch)

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() )
        expect( dispatch ).toHaveBeenCalledWith( login(loginData) )
    })
    test('startLoginWithEmailAndPassword debe de invocar el checkingCredentials y logout - error', async() => {
        const createUserWithEmailAndPassword = {email: 'luis@gmail.com', password: 'luis123', displayName: 'lucho' }

        const loginData = { ok: false, errorMessage: 'usuario ya existente'}
        
        await sigInWithEmail.mockResolvedValue( loginData )
        await startEmailSignIn(createUserWithEmailAndPassword)(dispatch)

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() )
        expect( dispatch ).toHaveBeenCalledWith( logout(loginData.errorMessage) )
    })

    test('startLogout debe de invocar el clearNoteLogout y logout', async() => {

        
        await startLogout()(dispatch)

        expect( logoutFirebase ).toHaveBeenCalled()
        expect( dispatch ).toHaveBeenCalledWith( clearNoteLogout() )
        expect( dispatch ).toHaveBeenCalledWith( logout('') )
    })


})