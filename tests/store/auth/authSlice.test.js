import authSlice from "../../../src/store/slices/authSlice"
import { initialState } from "../../fixtures/authFixtures"

describe('Pruebas de authSlice', () => { 

    test('debe de regresar el estado inicial y llamarse "auth"', () => {
        const state = authSlice.reducer( initialState, {})

        expect( state ).toEqual( initialState)
        expect(authSlice.name).toBe('auth')
    })
})