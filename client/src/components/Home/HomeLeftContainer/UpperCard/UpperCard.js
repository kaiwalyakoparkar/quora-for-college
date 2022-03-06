//Importing external modules/files
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

//Importing internal files
import user_1 from '../../../../data/images/Mountain1.jpg'
import user_2 from '../../../../data/images/Mountain2.jpeg'
import user_3 from '../../../../data/images/Mountain3.jpg'
import user_4 from '../../../../data/images/Mountain4.jpg'

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

export default function UpperCard () {

    const classes = customStyle();

    return (
        <Box
            sx={{
                borderRadius: 5,
                boxShadow: 5
            }}
            className={classes.root}
        >
            <Box sx={{mb: 1}}>
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

            <Box>
                <div>
                    
                <List sx={{ width: '100%', maxWidth: 350, bgcolor: 'background.paper', borderRadius: 5 }}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar alt="Kaiwalya Koparkar" src={user_1} />
                        </ListItemAvatar>
                        <ListItemText primary="Kaiwalya Koparkar"/>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar alt="Vadanya Wabale" src={user_2} />
                        </ListItemAvatar>
                        <ListItemText primary="Vadanya Wabale" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar alt="Pragati More" src={user_3} />
                        </ListItemAvatar>
                        <ListItemText primary="Pragati More" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar alt="Mrunaal Chincholikar" src={user_4} />
                        </ListItemAvatar>
                        <ListItemText primary="Mrunaal Chincholikar"/>
                    </ListItem>
                </List>

                </div>
            </Box>

        </Box>
    )
}