import { ThemeProvider } from "@emotion/react"
import PropTypes from "prop-types";
import { CssBaseline } from "@mui/material"
import { purpleTheme } from "./purpleTheme"

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ purpleTheme }>
      <CssBaseline/>
      {children}
    </ThemeProvider>
  )
}

AppTheme.propTypes = {
  children: PropTypes.node.isRequired
};