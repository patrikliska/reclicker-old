import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Header from './components/Header';
import MainPage from './pages/MainPage';

const App = () => {
  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Dosis',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div className='innerContainer' style={{ padding: 20 }}>
        <MainPage />
      </div>
    </ThemeProvider>
  );
};

export default App;
