//Importing external files/modules
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

export default function HomeRightContainer () {
    return (
        <div>
            <Button 
                variant="contained" 
                startIcon={<AddIcon size="large"  style={{ fontSize: 40 }} />}
                sx={{
                    backgroundColor: 'secondary.main',
                    width: "17vw",
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
        </div>
    )
}