//External module imports
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Box from '@mui/material/Box';

//File Imports
import Navbar from "../Navbar/Navbar";
import Body from "../Body/Body";

//Creating custom theme for the project
//Creating override object
const customTheme = createTheme({
    palette: {
      //Commented to use other components smoothly
      primary: {
        main: '#fffff'
      },
      secondary: {
        main: '#6563ff'
      }
    }
})

//Function handling the App renders
export default function App() {
    return (
        <ThemeProvider theme={customTheme}>
          <Box
            sx={{ 
              display: 'flex',
              flexDirection: 'column' 
            }}
          >
            {/*Rendering the Navbar function*/}
            <Navbar />

            {/*The application body will fall under this div*/}
            <Body />
          </Box>
        </ThemeProvider>
    )
}