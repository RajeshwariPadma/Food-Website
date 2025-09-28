import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react"


export const LikePage = () => {
    const[likedPosts , setLikedPosts] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("likedPosts"))|| [];
        setLikedPosts(stored);
    } , []);

    return (
        <Box>
            <Typography>
                Liked Blog Posts
            </Typography>
            {likedPosts.length === 0 ? (
                <Typography>No liked Posts</Typography>
            ) : ( likedPosts.map((post) => (
                <Card key={post.id}>
                    <CardContent>
                        <Typography>{post.title} </Typography>
                        <Typography>{post.description} </Typography>
                    </CardContent>
                </Card>
            ))) }
            
        </Box>
    )
}