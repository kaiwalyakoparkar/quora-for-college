import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

export default function Navbar() {
    return (
        <div>
            {/*<h1>This is navbar</h1>*/}
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Grid container spacing={2}>

                        {/*Left side of navbar*/}
                        <Grid item xs={10.5}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    mr:2
                                }}
                            >
                                <Typography 
                                    variant="h6" 
                                    component="h6" 
                                    sx={{ 
                                        mt:1,
                                        mr:5,
                                        ml:3
                                    }}
                                    >
                                    QuFoCo
                                </Typography>

                                <IconButton 
                                    color="secondary" 
                                    size="large" 
                                    edge="start" 
                                    aria-label="home" 
                                    component="span"
                                    sx={{
                                        mr:2
                                    }}
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
                                >
                                    <ChatBubbleOutlineIcon />
                                </IconButton>
                            </Box>
                        </Grid>

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
                                        mr:2
                                    }}
                                >
                                    <Badge color="error" variant="dot">
                                        <NotificationsNoneOutlinedIcon />
                                    </Badge>
                                </IconButton>
                            </Box>
                        </Grid>

                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}