//Importing external files/modules
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';

//Defining Styles
const customStyle = makeStyles({
    root: {
        width: "17.8vw", 
        height: 320,
        backgroundColor: '#ffffff'
    },
    list: {
        mr: 2
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
                    width: "17.4vw",
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

                <Stack 
                    direction="row" 
                    spacing={2}
                    sx={{
                        backgroundColor: "secondary.main",
                        color: "#ffffff",
                        fontWeight: 600,
                        height: 40,
                        pt: 2,
                        pl: 3,
                        borderRadius: 5
                    }}
                >
                    
                    <OutlinedFlagIcon />
                
                    <Typography>
                        Topics
                    </Typography>
                    
                </Stack>
                
                <List sx={{ width: '93%', maxWidth: 350, bgcolor: 'background.paper', borderRadius: 5, color: "secondary.main", pl:2,fontWeight: 600 }}>
                    <ListItem>
                        <MenuBookOutlinedIcon sx={{mr: 2}} />
                        <ListItemText primary="Courses"/>
                    </ListItem>
                    <ListItem>
                        <BusinessCenterOutlinedIcon sx={{mr: 2}} />
                        <ListItemText primary="Jobs & Placements" />
                    </ListItem>
                    <ListItem>
                        <SportsBasketballOutlinedIcon sx={{mr: 2}} />
                        <ListItemText primary="Sports" />
                    </ListItem>
                    <ListItem>
                        <PeopleAltOutlinedIcon sx={{mr: 2}} />
                        <ListItemText primary="Events"/>
                    </ListItem>
                    <ListItem>
                        <ArchiveOutlinedIcon sx={{mr: 2}} />
                        <ListItemText primary="Other"/>
                    </ListItem>
                </List>
            </Box>
        </div>
    )
}