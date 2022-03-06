import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';


//Defining Styles
const customStyle = makeStyles({
    root: {
        width: 270,
        height: 300,
        backgroundColor: '#ffffff',
    },
    icons: {
        '& svg': {
            fontSize: 32
        }
    }
})

export default function MerchCard () {

    const classes = customStyle();

    return (
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
    )
}