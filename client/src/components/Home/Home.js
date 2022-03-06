//Importing external files/modules
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';

//Importing Internal 
import LeftHome from './HomeLeftContainer/HomeLeftContainer';
import CenterHome from './HomeCenterContainer/HomeCenterContainer';
import RightHome from './HomeRightContainer/HomeRightContainer';

//Creating styles
const customStyle = makeStyles({
    section: {
        mr: 2,
        textAlign: 'center'
    }
})

export default function Body () {

    const classes = customStyle();

    return (
        <div>
            <Box 
                sx={{ 
                    flexGrow: 1,
                    mt:4
                }}
            >
                <Grid container spacing={5}>
                    <Grid item xs={2.5} className={classes.section}>
                        <LeftHome />
                    </Grid>
                    <Grid item xs={7} className={classes.section}>
                        <CenterHome />
                    </Grid>
                    <Grid item xs={2.5} className={classes.section}>
                        <RightHome />
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}