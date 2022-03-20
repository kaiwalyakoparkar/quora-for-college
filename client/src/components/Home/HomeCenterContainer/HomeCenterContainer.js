//Importing external files/modules
import Typography from '@mui/material/Typography';

//Importing internal files/modules
import qdata from '../../../data/dev-data/questions.json';
import QACard from '../../QACard/QACard';

//Main container function
export default function HomeCenterContainer () {
    // console.log(qdata)
    return (
        <div>
            <QACard/>
        </div>
    )
}