
import FieldUiRoot from "./components/FieldUiRoot";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';


const theme = createTheme({
  components: {
    MuiTreeItem: {
      styleOverrides: {
        content: {
          fontSize: '2rem',
          paddingTop: '.5rem',
          paddingBottom: '.5rem',
        },
        label: {
          fontSize: '1.2rem',
        }
      },
    },
  },
});

export default function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme} >
        <Container>
          <FieldUiRoot />
        </Container>
      </ThemeProvider>
    </div>
  );
}
