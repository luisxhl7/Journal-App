import { Alert, Button, Grid, TextField, Typography } from "@mui/material"
import { Link as LinkRouterDom } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import { Link } from "react-router-dom"
import { useForm } from "../../hooks"
import { useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startEmailSignIn } from "../../store/thunks/startEmailSignin"

const formValidations = {
  email: [(value)=> value.includes('@'), 'el correo debe de tener un @'],
  password: [(value)=> value.length >= 6, 'el password debe de tener mas de 6 letras'],
  displayName: [(value)=> value.length >= 1, 'el nombre es obligatorio'],
}

const formData = {
  displayName: '',
  email: '',
  password: '',
}

export const RegisterPage = () => {
  const dispatch = useDispatch()
  const {status, errorMessage} = useSelector( state => state.auth)
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status])
  const { displayName, email, password, onInputChange, isFormValid, displayNameValid, passwordValid, emailValid} = useForm(formData, formValidations)
  const [formSubmitted, setFormSubmitted] = useState(false)

  
  const onsubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    
    if (isFormValid) {
      dispatch(startEmailSignIn({displayName, email, password}))
    }
  }

  return (
    <AuthLayout title="Register">
      <form onSubmit={onsubmit}>
        <Grid container>
          <Grid item xs={ 12 } sx={{mt: 2}}>
            <TextField
              label='Nombre Completo'
              type="text"
              placeholder="Nombre completo"
              fullWidth
              name='displayName'
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid>

          <Grid item xs={ 12 } sx={{mt: 2}}>
            <TextField
              label='Correo'
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            />
          </Grid>

          <Grid item xs={ 12 } sx={{mt: 2}}>
            <TextField
              label='Contraseña'
              type="password"
              placeholder="Contraseña"
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>

          <Grid container spacing={2} sx={{mb:2, mt:2}}>
              <Grid item xs={12} display={ errorMessage ? '' : 'none'}>
                <Alert severity="error">{errorMessage}</Alert>
              </Grid>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth type="submit" disabled={isCheckingAuthentication}>
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
