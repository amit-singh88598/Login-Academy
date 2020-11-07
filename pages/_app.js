import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import '../styles/globals.css'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#800000",

      light: "#f6f0e2",
      background: "#AE0000"


    },
    secondary: {
      main: '#F2BA49',
      white: "#ffffff"

    }
  },
});

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
<Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp
