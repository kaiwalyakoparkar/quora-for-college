import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
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
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    QuFoCo
                </Typography>

                <IconButton color="secondary" size="large" edge="start" aria-label="home" component="span">
                    <HomeOutlinedIcon />
                </IconButton>
                <IconButton color="secondary" size="large" edge="start" aria-label="home" component="span">
                    <ExploreOutlinedIcon />
                </IconButton>
                <IconButton color="secondary" size="large" edge="start" aria-label="home" component="span">
                    <FormatListBulletedOutlinedIcon />
                </IconButton>
                <IconButton color="secondary" size="large" edge="start" aria-label="home" component="span">
                    <ChatBubbleOutlineIcon />
                </IconButton>
                <IconButton color="secondary" size="large" edge="start" aria-label="home" component="span">
                    <NotificationsNoneOutlinedIcon />
                </IconButton>

                </Toolbar>
            </AppBar>
        </div>
    )
}