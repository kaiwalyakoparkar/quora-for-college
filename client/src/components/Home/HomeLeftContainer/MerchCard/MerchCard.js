//Importing external packages
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

//Importing internal packages
import shop_image from '../../../../data/images/merch.svg'

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
    },
    image: {
        width: 270,
        height: 100
    },
    button: {
        backgroundColor:'success.main',
        mt: 1.7,
        borderRadius: 2,
        "&:hover": {
            backgroundColor: "success.main"
        }
    }
})

export default function MerchCard () {

    const classes = customStyle();

    return (
        <Box
            sx={{
                mt: 3,
                borderRadius: 5,
                boxShadow: 5
            }}
            className={classes.root}
        >
            <Box
                sx={{
                    pt:5
                }}
            >
                <Paper elevation={0}>
                    <img src={shop_image} className={classes.image}/>
                </Paper>

                <Typography
                    variant="h5" 
                    component="h5"
                    sx={{
                        pt:3,
                        pr:5,
                        pl: 5
                    }}
                    style={{ fontWeight: 600 }}
                >
                    New Merch Available
                </Typography>

                <Box
                    color="primary.main"
                > 
                    <Button 
                        variant="contain"
                        startIcon={<ShoppingCartOutlinedIcon style={{color:"#ffffff"}}/>}
                        sx={{
                            backgroundColor:'success.main',
                            mt:1.7,
                            borderRadius:2,
                            "&:hover": {
                                backgroundColor: "#60c59f"
                            },
                        }}
                        style={{color:"#ffffff"}}
                    >
                        Go to store
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}