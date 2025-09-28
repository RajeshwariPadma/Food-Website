import Typography from "@mui/material/Typography"
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import Button from "@mui/material/Button";
import CopyrightIcon from '@mui/icons-material/Copyright';
import HomeIcon from '@mui/icons-material/Home';
import { RouterHome } from "../pagess/Homee";
import { Link as RouterLink} from 'react-router-dom';


export const Footer = () => {
    return (
       <Box sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                         pt: 1, pb : 6  ,
                         width : "100%" , 
                          fontSize : 20 , 
                         //backgroundColor : "lightgrey" , 
                         backgroundColor : "background.paper",
                         height : 30 , 
                         display : "flex" , justifyContent : "center"
                },  [theme.breakpoints.up("sm")] :{
                         pt: 1, pb : 6  ,
                         width : "100%" , 
                         fontSize : 30 , 
                         //backgroundColor : "lightgrey" , 
                         backgroundColor : "background.paper",
                         height : 40 , 
                         display : "flex" , justifyContent : "center"
                }
              
            })}  > 
                
                
                <HomeIcon  sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                    fontSize : 40
                },  [theme.breakpoints.up("sm")] :{
                  fontSize : 50 
                }
              
            })}/>
                <InstagramIcon 
                sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                    fontSize : 40
                },  [theme.breakpoints.up("sm")] :{
                  fontSize : 50 
                }
              
            })}/>
                <YouTubeIcon 
                sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                    fontSize : 40
                },  [theme.breakpoints.up("sm")] :{
                  fontSize : 50 
                }
              
            })}/>
                <CopyrightIcon  sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                    fontSize : 40
                },  [theme.breakpoints.up("sm")] :{
                  fontSize : 50 
                }
              
            })}/>
                <TwitterIcon  sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                    fontSize : 40
                },  [theme.breakpoints.up("sm")] :{
                  fontSize : 50 
                }
              
            })}/>

       </Box>
    )
}