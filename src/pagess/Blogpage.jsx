 import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_BLOG_BY_SLUG } from "../queries/GET_PRODUCTS";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

export const BlogDetails = () => {
    const {slug} = useParams();

    const {data , loading , error} = useQuery(GET_BLOG_BY_SLUG , {
        variables : {slug} ,
    });
    console.log(data , loading , error);
if (!data || !data.blogPost) return <p>Blog not found</p>; // 🔐 very important

     const post = data.blogPost;

     return (
        <Box > 
            {/* { !loading ? ( */}
            {/* // data.blogPost.map((post) => (  */}
            <Box sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                    p : 9
                },  [theme.breakpoints.up("sm")] :{
                    p : 10
                }
              
            })}>
                <Typography sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                   fontSize : 15, fontWeight : "bold"
                },  [theme.breakpoints.up("sm")] :{
                   fontSize : 30, fontWeight : "bold"
                }
              
            })}>{new Date(post.date).toDateString()} </Typography>
                 <Typography sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                   fontSize : 40, fontWeight : "bold"
                },  [theme.breakpoints.up("sm")] :{
                   fontSize : 60, fontWeight : "bold"
                }
              
            })}>{post.title} </Typography>
           
            <Typography dangerouslySetInnerHTML = {{__html : post.content.html}} />
             
            </Box>
        </Box>
     )
}

