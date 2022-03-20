//Importing external files/modules
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';


//Importing internal files/modules
import qdata from '../../../data/dev-data/questions.json';
import QACard from '../../QACard/QACard';

//Main container function
export default function HomeCenterContainer () {
    // console.log(qdata[0])
    return (
        <div>
            <Stack >
                {
                    qdata.map(ele => (
                        <QACard
                            title={ele.questionTitle}
                            desc={ele.questionDescription}
                            upv={ele.upvotes}
                            downv={ele.downvotes}
                            ans={ele.answers}
                            usr={ele.userQuestioner}
                        />
                    ))
                }
            </Stack>
        </div>
    )
}