export const initialState = {
    status: 'checking', // 'not-authenticated', 'authenticated', 'checking'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
}

export const authenticatedState = {
    status: 'authenticated', // 'not-authenticated', 'authenticated', 'checking'
    uid: '123ABC',
    email: 'luis.gmail.com',
    displayName: 'luis',
    photoURL: 'http://demo.jpg',
    errorMessage: null,
}

export const notAuthenticatedState = {
    status: 'not-authenticated', // 'not-authenticated', 'authenticated', 'checking'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
}

export const demoUser = {
    status: 'authenticated', // 'not-authenticated', 'authenticated', 'checking'
    uid: '123ABC',
    email: 'luis.gmail.com',
    displayName: 'luis',
    photoURL: 'http://demo.jpg',
    errorMessage: null,
}