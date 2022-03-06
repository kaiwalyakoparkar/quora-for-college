//Importing external files/modules
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';



const customStyle = makeStyles({
    root: {
        width: 270,
        height: 300,
        backgroundColor: '#ffffff',
    },
    icons: {
        '& svg': {
            fontSize: 32
        },
        // color:'#6563ff'
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
                <Box>
                    <Paper
                        component="form"
                        sx={{ 
                            p: '2px 4px', 
                            display: 'flex', 
                            alignItems: 'center', 
                            borderRadius: 5, 
                            color: 'secondary'
                        }}
                        >
                        
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search Top Student"
                            textColor="secondary"
                            inputProps={{ 'aria-label': 'search top students' }}
                            />
                        <IconButton 
                            color="secondary" 
                            type="submit" 
                            sx={{ p: '10px' }} 
                            aria-label="search"
                            className={classes.icons}
                            >
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </Box>

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