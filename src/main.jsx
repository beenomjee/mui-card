import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    custom: {
      main: 'linear-gradient(160deg, #8e31f4 0%, #4546f7 100%)',
    }
  },
  typography: {
    fontFamily: '"Poppins", sans-serif'
  }
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)
