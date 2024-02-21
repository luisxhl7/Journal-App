import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';

import { LoginPage } from '../../../src/auth/pages/LoginPage';
import { notAuthenticatedState } from '../../fixtures/authFixtures';
import authSlice from '../../../src/store/slices/authSlice';


const mockStartGoogleSignIn = jest.fn();
const mockStartLoginWithEmailPassword = jest.fn();

jest.mock('../../../src/store/thunks/startGoogleSignIn', () => ({
    startGoogleSignIn: () => mockStartGoogleSignIn,
    startLoginWithEmailPassword: ({ email, password }) => {
        return () => mockStartLoginWithEmailPassword({ email, password });
    },
}));

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => (fn) => fn(),
}));



const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
    preloadedState: {
        auth: notAuthenticatedState
    }
})



describe('Pruebas en <LoginPage />', () => {

    beforeEach(() => jest.clearAllMocks() );


    test('debe de mostrar el componente correctamente', () => {
        
        render(
            <Provider store={ store }>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );

        // screen.debug()
        expect( screen.getAllByText('Login').length ).toBeGreaterThanOrEqual(1);


    });


    test('boton de google debe de llamar el startGoogleSignIn', () => { 

        render(
            <Provider store={ store }>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );

        const googleBtn = screen.getByLabelText('google-btn');
        fireEvent.click( googleBtn );
        expect( mockStartGoogleSignIn ).toHaveBeenCalled();

    });


    // test('submit debe de llamar startLoginWithEmailPassword', () => {

    //     const email = 'bruce.wayne@gmail.com';
    //     const password = '123456';
 
    //     render(
    //         <Provider store={ store } >
    //             <MemoryRouter>
    //                     <LoginPage />
    //             </MemoryRouter>
    //         </Provider>
    //     );
        
    //     const emailField = screen.getByPlaceholderText('Correo@google.com');
        
    //     fireEvent.change( emailField, { target: { name: 'email', value: email } } );
 
    //     const passwordField = screen.getByPlaceholderText('Contraseña');
 
    //     fireEvent.change( passwordField, { target: { name: 'password', value: password } } );
 
    //     const loginForm = screen.getByLabelText('login-form');
 
    //     fireEvent.submit(loginForm);
 
    //     expect( mockStartLoginWithEmailPassword ).toHaveBeenCalledWith( {email, password} );


    // });

    
});