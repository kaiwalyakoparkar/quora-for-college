//Importing external files/modules
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Avatar from '@mui/material/Avatar';
import { makeStyles } from '@mui/styles';

//Creating custom styles
const customStyle = makeStyles({
    root: {
        width: "fillParent",
        height: 200,
        backgroundColor: '#ffffff',
    }
})

//Main QACard function
export default function QACard () {
    const classes = customStyle();
    return (
        <div>
            
            {/* <Typography
                variant="h5" 
                component="h5"
                >
                Lets go
            </Typography> */}

            <Box
                sx={{
                    pr: 2.5,
                    borderRadius: 5,
                    boxShadow: 5
                }}
                className={classes.root}
            >
                
            </Box>
        </div>
    )
}