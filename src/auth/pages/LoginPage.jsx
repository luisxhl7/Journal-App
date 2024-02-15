import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as LinkRouterDom } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"
import { useDispatch, useSelector } from "react-redux"
import { startGoogleSignIn } from "../../store/thunks/startGoogleSignIn"
import { useMemo } from "react"
import { startLoginWithEmailAndPassword } from "../../store/thunks/startLoginWithEmailAndPassword"

export const LoginPage = () => {
  const dispatch = useDispatch()
  const { status, errorMessage } = useSelector( state => state.auth)

  const { email, password, onInputChange} = useForm({
    email: '',
    password: '',
  })
  
  const isAuthenticating = useMemo( () => status === 'checking', [status])
  
  const onsubmit = (e) => {
    e.preventDefault()
    dispatch(startLoginWithEmailAndPassword({email, password}))
  } 

  const onGoogleSigIn = () => {
    dispatch(startGoogleSignIn())
  } 

  return (
    <AuthLayout title="Login">
      <form onSubmit={(e) => onsubmit(e)}>
        <Grid container>
          <Grid item xs={ 12 } sx={{mt: 2}}>
            <TextField
              label='Correo'
              type="email"
              placeholder="Correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={ 12 } sx={{mt: 2}}>
            <TextField
              label='Contraseña'
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container display={ errorMessage ? '' : 'none'} sx={{mt: 1}}>
            <Grid item xs={12} >
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{mb:2, mt:2}}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth type="submit" disabled={isAuthenticating}>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth onClick={ onGoogleSigIn } disabled={isAuthenticating}>
                <Google/>
                <Typography sx={{ml:1}}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container
            direction='row'
            justifyContent='end'
          >
            <Link component={LinkRouterDom} color='inherit' to='/auth/register'>
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
