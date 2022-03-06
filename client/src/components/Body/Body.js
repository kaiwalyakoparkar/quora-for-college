//Importing external files/modules
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';

//Creating styles
const customStyle = makeStyles({
    section: {
        mr: 2
    }
})

export default function Body () {

    const classes = customStyle();

    return (
        <div>
            {/* <h1>Hello</h1> */}
            <Box 
                sx={{ 
                    flexGrow: 1,
                    mt:3
                }}
            >
                <Grid container spacing={5}>
                    <Grid item xs={2.5} className={classes.section}>
                        <Typography
                            variant="h5" 
                            component="h5"
                            align="center"
                        >
                            Left
                        </Typography>
                    </Grid>
                    <Grid item xs={7} className={classes.section}>
                        <Typography
                            variant="h5" 
                            component="h5"
                            align="center"
                        >
                            Center
                        </Typography>
                    </Grid>
                    <Grid item xs={2.5} className={classes.section}>
                        <Typography
                            variant="h5" 
                            component="h5"
                            align="center"
                        >
                            Right
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}