import { SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { ImageGalery } from "./ImageGalery"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "../../hooks/useForm"
import { useEffect, useMemo, useRef } from "react"
import { setActiveNote } from "../../store/slices/journalSlice"
import { startsaveNote } from "../../store/thunks/startsaveNote"
import Swal from "sweetalert2"
import { startUploadingFiles } from "../../store/thunks/startUploadingFiles"

export const NoteView = () => {
    const dispatch = useDispatch()
    const { active:note, messageSaved, isSaving } = useSelector(state => state.journal)
    const {body, title, date, onInputChange, formState} = useForm(note)
    const dateString = useMemo(() => {
        const newDate = new Date( date )
        return newDate.toUTCString()
    }, [date])

    useEffect(() => {
        dispatch(setActiveNote(formState))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formState])

    useEffect(() => {
        if (messageSaved.length > 0) {
            Swal.fire({
                title: 'Nota actualizazda!',
                text: messageSaved,
                icon: 'success',
                confirmButtonText: 'Aceptar'
            })
        }
    }, [messageSaved])
    
    const fileInputRef = useRef()

    const handleSaveNote = () => {
        dispatch(startsaveNote())
    }

    const onfileInputChange = ({target}) => {
        if (target.files === 0) {
            return
        }
        dispatch(startUploadingFiles(target.files))
    }
    
    return (
        <Grid container 
            className="animate__animated animate__fadeIn animate__faster"
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx={{ mb: 1}}
        >
            <Grid item>
                <Typography fontSize={39} fontWeight='light'> {dateString} </Typography>
            </Grid>
            <Grid item>
                <Button color="primary" sx={{p:2}} onClick={handleSaveNote} disabled={isSaving}>
                    <SaveOutlined sx={{fontSize: 30, mr:1}}/>
                    Guardar
                </Button>


                <IconButton color="primary" disabled={isSaving} onClick={ () => fileInputRef.current.click()}>
                    <UploadOutlined/>
                </IconButton>
                <input 
                    type="file" 
                    name="" 
                    id="" 
                    multiple onChange={onfileInputChange} 
                    style={{display: 'none'}} 
                    ref={fileInputRef}
                />
            
            
            </Grid>
            <Grid container>
                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    placeholder='Ingrese un titulo'
                    label='Titulo'
                    sx={{border:'none', mb:1}}
                    name="title"
                    value={title}
                    onChange={onInputChange}
                />

                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    multiline
                    placeholder='¿Que sucedio hoy?'
                    minRows={5}
                    sx={{border:'none', mb:1}}
                    name="body"
                    value={body}
                    onChange={onInputChange}
                />
            </Grid>

            <ImageGalery images={note?.imageUrls}/>
        </Grid>
    )
}
