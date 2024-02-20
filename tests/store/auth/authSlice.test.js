import authSlice, { checkingCredentials, login, logout } from "../../../src/store/slices/authSlice"
import { initialState, authenticatedState, demoUser } from "../../fixtures/authFixtures"

describe('Pruebas de authSlice', () => { 

    test('debe de regresar el estado inicial y llamarse "auth"', () => {
        const state = authSlice.reducer( initialState, {})

        expect( state ).toEqual( initialState)
        expect(authSlice.name).toBe('auth')
    })
    test('debe de rrealizar la authenticacion', () => {
        const state = authSlice.reducer( initialState, login(demoUser))

        expect( state ).toEqual({
            status: 'authenticated',
            uid: demoUser.uid,
            email: demoUser.email,
            displayName: demoUser.displayName,
            photoURL: demoUser.photoURL,
            errorMessage: null,
        })
    })
    test('debe de realizar el logout sin argumentos', () => {
        const state = authSlice.reducer( authenticatedState, logout())

        expect( state ).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: undefined,
        })
    })
    test('debe de realizar el logout y mostrar mensaje de error', () => {
        const state = authSlice.reducer( authenticatedState, logout('credenciales no son correctas'))

        expect( state ).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: 'credenciales no son correctas',
        })
    })
    test('debe de cambiar el estado a cheking', () => {
        const state = authSlice.reducer( authenticatedState, checkingCredentials())
        console.log(state);
        expect( state.status ).toBe( 'checking' )
    }) 
})