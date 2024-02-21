import { collection, deleteDoc, getDocs } from "firebase/firestore/lite"
import { addNewEmpyNote, creatingNewNote, setActiveNote } from "../../../src/store/slices/journalSlice"
import { startNewNote } from "../../../src/store/thunks/startNewNote"
import { FirebaseDB } from "../../../src/fireBase/config"


describe('Pruebas en Journal Thunks', () => {
    
    const dispatch = jest.fn()
    const getState = jest.fn()
    beforeEach( () => jest.clearAllMocks())

    test('startNewNote debe de crear una nueva nota', async() => {
        
        const uid = 'TEST-UID'
        getState.mockReturnValue({auth: { uid: uid}})

        await startNewNote()(dispatch, getState )

        expect( dispatch ).toHaveBeenCalledWith( creatingNewNote() )
        expect( dispatch ).toHaveBeenCalledWith( addNewEmpyNote({
            title: '',
            body: '',
            id: expect.any( String ),
            imageUrls: [],
            date: expect.any( Number ),
        }) )
        expect( dispatch ).toHaveBeenCalledWith( setActiveNote({
            title: '',
            body: '',
            id: expect.any( String ),
            imageUrls: [],
            date: expect.any( Number ),
        }))
        
        //Borrar de fireBase

        const collectionRef = collection(FirebaseDB, `/${uid}/journal/notes`)

        const docs = await getDocs(collectionRef)

        const deletePromises = []
        docs.forEach( doc => deletePromises.push( deleteDoc( doc.ref)))

        await Promise.all( deletePromises )
    })
})