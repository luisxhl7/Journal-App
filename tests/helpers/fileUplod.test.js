import { fileUplod } from "../../src/helpers/fileUplod"
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({ 
    cloud_name: 'dzrlynr7g', 
    api_key: '252666553999421', 
    api_secret: '989xTYAodpMAGW0jtVZh-DNfLQU',
    secure: true
});

describe('pruebas en fileUplod', () => {
    test('debe subir el archivo correctamente a cloudinary', async() =>{
        //tener en cuenta que si se usa una imagen de la web no todas permiten su uso con temas de headers de la peticion
        const imageUrl = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80';
        
        const resp = await fetch( imageUrl )

        const blob = await resp.blob()

        const file = new File([blob], 'foto.jpg')

        const url = await fileUplod( file )
        const segments = url.split('/')
        const imageId = segments[segments.length - 1].replace('.jpg','')

        //en caso de estar en un folder se debe de especificar un poco mas donde se aloja la imagen
        await cloudinary.api.delete_resources(['journalApp-folder/' + imageId]);

        expect(typeof url).toBe('string')

    })
    test('debe retornal null', async() =>{

        const file = new File([], 'foto.jpg')

        const url = await fileUplod( file )

        expect(url).toBe(null)

    })
})