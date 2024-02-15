import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGalery } from "./ImageGalery"
import { useSelector } from "react-redux"

export const NoteView = () => {

    const {active} = useSelector(state => state.journal)
    console.log(active);
    return (
        <Grid container 
            className="animate__animated animate__fadeIn animate__faster"
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx={{ mb: 1}}
        >
            <Grid item>
                <Typography fontSize={39} fontWeight='light'> 28 de agosto, 2023 </Typography>
            </Grid>
            <Grid item>
                <Button color="primary" sx={{p:2}}>
                    <SaveOutlined sx={{fontSize: 30, mr:1}}/>
                    Guardar
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    placeholder='Ingrese un titulo'
                    label='Titulo'
                    sx={{border:'none', mb:1}}
                />

                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    multiline
                    placeholder='¿Que sucedio hoy?'
                    minRows={5}
                    sx={{border:'none', mb:1}}
                />
            </Grid>

            <ImageGalery/>
        </Grid>
    )
}
