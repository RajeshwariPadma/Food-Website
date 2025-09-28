// import { useQuery } from "@apollo/client"
// import Box from "@mui/material/Box"

// import Card from "@mui/material/Card";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import CardActions from "@mui/material/CardActions";
// import Button from "@mui/material/Button";
// import CircularProgress from "@mui/material/CircularProgress";
// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// import {  GET_BLOGPOSTS } from "../queries/GET_PRODUCTS";
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
// import Grid from "@mui/material/Grid";
// import { Link, useNavigate } from "react-router-dom";
// import { BlogDetails } from "./Blogpage";
// import { Link as RouterLink} from 'react-router-dom';

// export const RouterProducts  = () => {
//     const navigate = useNavigate();
//     const {data , loading , error} = useQuery(GET_BLOGPOSTS);
//     console.log(data,loading , error);
//     return (
//        <Box sx={{ maxHeight: "800" , display:"flex", p : 10 , gap : 5, justifyContent : "space-around"}}>
//         {!loading ? (
//             data.blogPosts.map((device) => ( 
//             <Card key={device.id} sx={{maxWidth : "1500"}} >
               
//                {/* <CardMedia 
//                 component="img"
//                 height= "140"
//                 width= "80"
//                 image={device.coverImage?.url || "https://via.placeholder.com/300x200?text=No+Image"}
//                 alt={device.title} sx={{display : "flex"}}/> */}
//                 <CardContent>
//                     <Typography gutterBottom sx={{color: "orange" , fontWeight: "bold" , fontSize : 20 }}>{device.title}</Typography>
//                     <Typography  sx={{width: 600 }}>{device.description.text} </Typography>
//                 </CardContent>
//                 <CardActions>
//                     <Link component={RouterLink} to={`/Blogpage/${device.slug}`}>
//                      <Button sx={{fontSize : 20}}>Read More...</Button>
//                      </Link>
                   
                   
//                      <Typography sx={{pl : 15 , pr : 20 , fontSize : 18}}><AccessTimeFilledIcon sx={{fontSize : "medium" ,mr : 1}}/>{device.date} </Typography>
//                       <BookmarkBorderIcon sx={{fontSize : 30}}/>
//                 </CardActions>
               
//             </Card>
//         ))) : (
//             <CircularProgress sx={{display:"flex",  alignItems:"center" }}/>
//         )}
//        </Box>
//     )
// }