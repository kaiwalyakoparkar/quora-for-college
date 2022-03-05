//External module imports
import {createTheme, ThemeProvider} from '@mui/material/styles';

//File Imports
import Navbar from "../Navbar/Navbar";

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
            {/*Rendering the Navbar function*/}
            <Navbar />

            {/*The application vody will fall under this div*/}
            <div>
                <h1>Frontend development</h1>
            </div>
        </ThemeProvider>
    )
}