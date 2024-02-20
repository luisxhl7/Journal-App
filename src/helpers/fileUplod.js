
export const fileUplod = async(file) => {
    if (!file) {
        // throw new Error('no tenemos ningun archivo')
        return null
    }
    const cloudUrl = 'https://api.cloudinary.com/v1_1/dzrlynr7g/upload'

    const formData = new FormData()
    formData.append('upload_preset', 'journalApp')
    formData.append('file', file)

    try {
        
        const result = await fetch(cloudUrl, {
            method: 'POST',
            body:formData
        })

        if (!result.ok) {
            throw new Error('No se pudo subir la imagen')
        }

        const cloudResp = await result.json()

        return cloudResp.secure_url

    } catch (error) {
        // throw new Error(error.message);
        return null
    }
}
