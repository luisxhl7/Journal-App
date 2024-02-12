import { Button, Grid, TextField, Typography } from "@mui/material"
import { Link as LinkRouterDom } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import { Link } from "react-router-dom"

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <form>
        <Grid container>
          <Grid item xs={ 12 } sx={{mt: 2}}>
            <TextField
              label='Nombre Completo'
              type="text"
              placeholder="Nombre completo"
              fullWidth
            />
          </Grid>

          <Grid item xs={ 12 } sx={{mt: 2}}>
            <TextField
              label='Correo'
              type="email"
              placeholder="correo@google.com"
              fullWidth
            />
          </Grid>

          <Grid item xs={ 12 } sx={{mt: 2}}>
            <TextField
              label='Contraseña'
              type="password"
              placeholder="Contraseña"
              fullWidth
            />
          </Grid>

          <Grid container spacing={2} sx={{mb:2, mt:2}}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
                Crear cuenta
              </Button>
            </Grid>
          </Grid>


          <Grid container
            direction='row'
            justifyContent='end'
          >
            <Typography>¿Ya tienes cuenta?</Typography>
            <Link component={LinkRouterDom} color='inherit' to='/auth/login'>
              ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
