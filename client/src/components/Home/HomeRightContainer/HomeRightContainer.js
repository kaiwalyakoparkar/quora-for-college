//Importing external files/modules
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

export default function HomeRightContainer () {
    return (
        <div>
            <Button 
                variant="contained" 
                startIcon={<AddIcon />}
                sx={{
                    backgroundColor: 'secondary.main',
                    width: 305,
                    height: 50,
                    borderRadius: 3,
                    // justifyContent: 'left',
                    fontWeight: 600
                }}
                style={{color:"#ffffff"}}
            >
                Ask New Topic
            </Button>
        </div>
    )
}