import Box from "@mui/material/Box"
import { useQuery } from "@apollo/client"
//import Box from "@mui/material/Box"

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import {  GET_BLOGPOSTS } from "../queries/GET_PRODUCTS";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import Grid from "@mui/material/Grid";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BlogDetails } from "./Blogpage";
import { Link as RouterLink} from 'react-router-dom';
import Home_page_image from "../assets/Home_page_image.jpg";
import { useEffect, useState } from "react";

import { Children } from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import BookmarkIcon from '@mui/icons-material/Bookmark';


export const RouterHome  = ({ filteredData, setFilteredData, title, setTitle}) => {
    const [save , setSave] = useState("");
     const [anchorEl , setAnchorEl] = useState(null);
    const {data , error} = useQuery(GET_BLOGPOSTS);
    // const [filteredData , setFilteredData] = useState();
    const [loading , setLoading] = useState(false);
    // const [title , setTitle]= useState("");
    const allPosts = data?.blogPosts || [];
    console.log(data,loading , error);

    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error loading posts </p>

    const open = Boolean(anchorEl);
    const navigate = useNavigate();

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    }

    
    const[liked , setLiked] = useState(() => {
        return JSON.parse(localStorage.getItem("liked")) || {} ;
    });
    const[Commented , setCommented] = useState(() => {
        return JSON.parse(localStorage.getItem("commented")) || {} ;
    });
    const[bookmarked , setBookmarked] = useState(() => {
        const stored = JSON.parse(localStorage.getItem("bookmarked")) || {};
    return stored;
    });

    useEffect(() => {
        localStorage.setItem("liked" , JSON.stringify(liked));
    } ,[liked]);
     useEffect(() => {
        localStorage.setItem("Commented" , JSON.stringify(Commented));
    } ,[Commented]);
     useEffect(() => {
        localStorage.setItem("bookmarked" , JSON.stringify(bookmarked));
    } ,[bookmarked]);

    const toggleLike = (postId , post) => {
        // const newState = !liked ;
        // setLiked(newState);
        setLiked((prev) => ({
            ...prev , [postId] : !prev[postId],
        }));

     
    };

    const toggleComment = (postId) => {
        // const newState = !Commented;
        // setCommented(newState);
         setCommented((prev) => ({
            ...prev , [postId] : !prev[postId],
        }));
    }

    const toggleBookmark = (postId) => {
        //  const newState = !bookmarked;
        
        // setBookmarked(newState);
         setBookmarked((prev) => ({
            ...prev , [postId] : !prev[postId],
        }));
    }



    
 const results = title ? (filteredData && filteredData.length > 0 ? filteredData : [] ) : (data?.blogPosts || [])  ;
    //const details = data?.blogPosts.results;
    return (
        <Box>
            <Box sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                    pt : 5,
                    display : "flex" , 
                    justifyContent : "center" 
                },  [theme.breakpoints.up("sm")] :{
                      pt : 5, 
                    display : "flex" , 
                    justifyContent : "center" 
                }
              
            })}>
                <Typography gutterBottom
                sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                    backgroundImage : `url(${Home_page_image})` ,
                    backgroundPosition : "center" ,
                    backgroundSize : "cover" ,
                    display : "flex" , 
                    justifyContent : "center",
                    height : 350,
                    borderRadius : 10,
                    width : 550 ,
                    fontSize : 35,
                    pr : 3,
                    pl : 5 , color : "white",display : "flex" , flexDirection : "column" 
                },  [theme.breakpoints.up("sm")] :{
                      backgroundImage : `url(${Home_page_image})` ,
                    backgroundPosition : "center" ,
                    backgroundSize : "cover" ,
                    display : "flex" , 
                    justifyContent : "center",
                    height : 650,
                    borderRadius : 30,
                    width : 1350 ,
                    fontSize : 60 ,
                   
                    pl : 5 , color : "white",display : "flex" , flexDirection : "column" 
                }
              
            })}>
                     Welcome to Panda food recipes 
                    Choose your favourite food here 
                   <Typography sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                       fontSize : 14, pt : 6 , pr : 5 ,pb:4
                },  [theme.breakpoints.up("sm")] :{
                     fontSize : 20, pt : 10
                }
              
            })} >
                         Your one-stop website for delicious and easy-to-make dishes! Whether you're cooking for your family or trying something new, our recipes are made with simple steps and tasty ingredients.
                    </Typography>
                </Typography>
                 
            </Box>
        <Box sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                      display:"grid", width : 550 ,
                      pl : 4, pr : 4 , pt : 4 , gap : 5
                },  [theme.breakpoints.up("sm")] :{
                    display:"grid", 
                    p : 10 , pr : 10, 
                    rowGap : 5 , 
                    columnGap : 5, 
                    gridTemplateColumns : "repeat(2,1fr)", 
                    gridTemplateRows : "auto"
                }
              
            })}>
        {loading ? (<Box><Typography>Loading <br/>
                    <CircularProgress />
                    </Typography></Box>) : (results.length > 0) ? (
                results.map((device) => ( 
            <Card key={device.id} elevation={3}>
                <Box sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                      display : "flex" ,
                },  [theme.breakpoints.up("sm")] :{
                   display : "flex"
                }
              
            })}>
               <Box>
                <CardMedia 
                component="img"
                height= "240"
                width= "500"
                image={device.img?.url}
                alt={device.title} 
                />
               </Box>
               <Box> 
                <CardContent>
                    <Typography gutterBottom sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                    color: "orange" ,
                    fontWeight: "bold" , 
                    fontSize : 15, pt : 0.8
                },  [theme.breakpoints.up("sm")] :{
                    color: "orange" , 
                    fontWeight: "bold" , 
                    fontSize : 23 , pt : 2 
                }
              
            })}>{device.title}</Typography>
                    <Typography sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                    width: 300 , fontSize : 15
                },  [theme.breakpoints.up("sm")] :{
                    width: 400
                }
              
            })} >{device.description.text} </Typography>
                </CardContent>
                <CardActions>
                    <Link component={RouterLink} to={`/Blogpage/${device.slug}`}>
                     <Button sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                        fontSize : 14
                },  [theme.breakpoints.up("sm")] :{
                        fontSize : 18
                }
              
            })}>Read More...</Button>
                     </Link>
                   
                  
                     <Typography sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                       pl : 1 , pr : 3, fontSize : 16
                },  [theme.breakpoints.up("sm")] :{
                       pl : 7 , pr : 5 , fontSize : 19
                }
              
            })}><AccessTimeFilledIcon sx={{fontSize : "medium" ,mr : 0.5}}/>{device.date} </Typography>
                    
                    <Box  onClick={() => toggleLike(device.id , device)} >
                   {liked[device.id] ? ( <FavoriteOutlinedIcon sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                      display : "none"
                },  [theme.breakpoints.up("sm")] :{
                      fontSize : 25 
                }
              
            })}/>) : ( <FavoriteBorderIcon sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                      display : "none"
                },  [theme.breakpoints.up("sm")] :{
                      fontSize : 25 
                }
              
            })}/>)}
                    </Box>

                    <Box onClick={() => toggleComment(device.id)}>
                    {Commented[device.id] ? (<ModeCommentIcon sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                      display : "none"
                },  [theme.breakpoints.up("sm")] :{
                      fontSize : 25 
                }
              
            })} />) : (<CommentIcon sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                      display : "none"
                },  [theme.breakpoints.up("sm")] :{
                      fontSize : 25 
                }
              
            })}/>)}
                    </Box>

                    <Box onClick={ () => toggleBookmark(device.id)} >
                  
                    {bookmarked[device.id] ? ( <BookmarkIcon sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                      display : "none"
                },  [theme.breakpoints.up("sm")] :{
                      fontSize : 25 
                }
              
            })}/>) : (<BookmarkBorderIcon sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                      display : "none"
                },  [theme.breakpoints.up("sm")] :{
                      fontSize : 25 
                }
              
            })}/>)}
                    </Box>
                  
                      
                    
                        <IconButton onClick={handleOpen} sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                      fontSize : 25
                },  [theme.breakpoints.up("sm")] :{
                       display : "none"
                }
              
            })} > 
                            <MoreVertIcon />
                        </IconButton>
                       

                        <Menu
                            anchorEl={anchorEl}
                            open = {open}
                            onClose={handleClose }>
                            <MenuItem onClick={() => toggleLike(device.id)} > {liked[device.id] ? ( < FavoriteOutlinedIcon sx={{fontSize : 25 }}/>) : ( < FavoriteBorderIcon/>)}Like</MenuItem>
                            <MenuItem onClick={() => toggleComment(device.id)}> {Commented[device.id] ? (<ModeCommentIcon sx={{fontSize : 25}} />) : (<CommentIcon />)} Comment</MenuItem>
                            <MenuItem onClick={() => toggleBookmark(device.id)} > {bookmarked[device.id] ? ( <BookmarkIcon sx={{fontSize : 25}}/>) : (<BookmarkBorderIcon/>)} Bookmark</MenuItem>
                        </Menu>
                           
                           
                           
                       
                    
                     
                </CardActions>
                </Box>
               </Box>
               
            </Card>
        ))) : (
           // <CircularProgress sx={{display:"flex",  alignItems:"center" }}/>
           <Typography>No recipes match </Typography>
        )}
       </Box>
        </Box>

      
    )
}
    
