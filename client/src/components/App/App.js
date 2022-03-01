//File Imports
import Navbar from "../Navbar/Navbar";

//Function handling the App renders
export default function App() {
    return (
        <div>
            {/*Rendering the Navbar function*/}
            <Navbar />

            {/*The application vody will fall under this div*/}
            <div>
                <h1>Frontend development</h1>
            </div>
        </div>
    )
}