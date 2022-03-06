//Importing external files/modules
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

//Importing internal files/modules
import user_image from '../../data/images/default_user.png';

//Creating styles
const customStyle = makeStyles({
    navbar: {
        borderRadius: 15
    },
    icons: {
        '& svg': {
            fontSize: 32
        }
    }
})

export default function Navbar() {

    const classes = customStyle();

    return (
        <div>
            {/*<h1>This is navbar</h1>*/}
            <AppBar 
                position="static" 
                color="primary"
                className={classes.navbar}
            >
                <Toolbar>
                    <Grid 
                        container 
                        spacing={2}
                        sx={{
                            flexGrow: 1
                        }}
                    >

                        {/*Left side of navbar*/}
                        <Grid item xs={9}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    mr:2
                                }}
                            >
                                <Box 
                                    sx={{
                                        width: 120,
                                        height: 50,
                                        mr:1.5,
                                        mt:0.3,
                                        backgroundColor: 'secondary.main',
                                        borderRadius: 10
                                    }}
                                >
                                    <Typography 
                                        variant="h6" 
                                        component="h6" 
                                        sx={{ 
                                            mt:1.17,
                                            mr:5,
                                            ml:3
                                        }}
                                        color="#ffff"
                                        >
                                        QuFoCo
                                    </Typography>
                                </Box>

                                <IconButton 
                                    color="secondary" 
                                    size="large" 
                                    edge="start" 
                                    aria-label="home" 
                                    component="span"
                                    sx={{
                                        mr:2
                                    }}
                                    className={classes.icons}
                                >
                                    <HomeOutlinedIcon />
                                </IconButton>
                                <IconButton 
                                    color="secondary" 
                                    size="large" 
                                    edge="start" 
                                    aria-label="explore" 
                                    component="span"
                                    sx={{
                                        mr:2
                                    }}
                                    className={classes.icons}
                                >
                                    <ExploreOutlinedIcon />
                                </IconButton>
                                <IconButton 
                                    color="secondary" 
                                    size="large" 
                                    edge="start" 
                                    aria-label="list" 
                                    component="span"
                                    sx={{
                                        mr:2
                                    }}
                                    className={classes.icons}
                                >
                                    <FormatListBulletedOutlinedIcon />
                                </IconButton>
                                <IconButton 
                                    color="secondary" 
                                    size="large" 
                                    edge="start" 
                                    aria-label="chat" 
                                    component="span"
                                    sx={{
                                        mr:2
                                    }}
                                    className={classes.icons}
                                >
                                    <ChatBubbleOutlineIcon />
                                </IconButton>
                            </Box>
                        </Grid>

                        <Grid 
                            item 
                            xs={1.5}
                            direction="column"
                        />

                        {/*right side of navbar*/}
                        <Grid 
                            item 
                            xs={1.5}
                            direction="column"
                        >   
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'left',
                                    mr:2
                                }}
                            >
                                <IconButton 
                                    color="secondary" 
                                    size="large" 
                                    edge="start" 
                                    aria-label="notification" 
                                    component="span"
                                    sx={{
                                        mr:1,
                                        ml:4
                                    }}
                                    className={classes.icons}
                                >
                                    <Badge color="error" variant="dot">
                                        <NotificationsNoneOutlinedIcon />
                                    </Badge>
                                </IconButton>
                                <Avatar 
                                    alt="Default User"
                                    src={user_image} 
                                    sx={{
                                        mt:1,
                                        ml:1.5
                                    }}
                                />
                            </Box>
                        </Grid>

                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}