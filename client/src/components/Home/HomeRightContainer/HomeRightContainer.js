//Importing external files/modules
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

//Defining Styles
const customStyle = makeStyles({
    root: {
        width: 250,
        height: 300,
        backgroundColor: '#ffffff',
    }
})

export default function HomeRightContainer () {

    const classes = customStyle();

    return (
        <div>
            <Button 
                variant="contained" 
                startIcon={<AddIcon size="large"  style={{ fontSize: 40 }} />}
                sx={{
                    backgroundColor: 'secondary.main',
                    width: "17vw",
                    height: 50,
                    borderRadius: 3,
                    fontWeight: 600
                }}
                style={{color:"#ffffff"}}
            >
                <Typography
                    variant="h6" 
                    component="h6"
                >
                    Ask New Topic
                </Typography>
            </Button>

            <Box
                sx={{
                    mt: 3,
                    borderRadius: 5,
                    boxShadow: 5
                }}
                className={classes.root}
            >
                
            </Box>
        </div>
    )
}