//Importing external files/modules
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

const customStyle = makeStyles({
    root: {
        width: 270,
        height: 300,
        backgroundColor: '#ffffff',
    }
})

export default function HomeLeftContainer () {

    const classes = customStyle();

    return (
        <div>
            <Box
                sx={{
                    borderRadius: 5,
                    boxShadow: 5
                }}
                className={classes.root}
            >
                <Typography
                    variant="h5" 
                    component="h5"
                >
                    Left
                </Typography>
            </Box>
            <Box
                sx={{
                    mt: 3,
                    borderRadius: 5,
                    boxShadow: 5
                }}
                className={classes.root}
            >
                <Typography
                    variant="h5" 
                    component="h5"
                >
                    Left
                </Typography>
            </Box>
        </div>
    )
}