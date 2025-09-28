// import Box from "@mui/material/Box";
// import CardContent from "@mui/material/CardContent";
// import { createContext, useContext, useState } from "react";

import Box from "@mui/material/Box";
import { useEffect, useState } from "react"
import { RouterHome } from "./Homee";
import Typography from "@mui/material/Typography";
import { useQuery } from "@apollo/client";
import { GET_BLOGPOSTS } from "../queries/GET_PRODUCTS";

// const CartContent = createContext();
// export const useCart = () => useContext(CartContent);

// export const Cartprovider = ({children}) => {
//     const[cartItems , setCartItems] = useState([]);

//     const addToCart = (pre) => {
//         const exists = cartItems.find(item => item.id === pre.id);
//         if(!exists) {
//             setCartItems([...cartItems , pre]);
//         }
//     };

//     const removeFromCart = (id) => {
//         setCartItems(prev => prev.filter(item => item.id !== id));
//     };

//     const clearCart = () => setCartItems([]);

 

//         const handleBookmarkClick = () => {
//             addToCart(foodItem);
//         }
    

//     return (
        
//         <CartContent.Provider value={{cartItems , handleBookmarkClick , removeFromCart , clearCart }}>
//            <Box >{children }</Box> 
//         </CartContent.Provider>
        
//     );
// };

export const BookmarksPage = () => {
    const [bookmarkedPosts , setBookmarkedPosts] = useState([]);
    const {data , error , loading} = useQuery(GET_BLOGPOSTS);
    
    useEffect(() => {
        if(data?.blogPosts) {
            const filtered = data.blogPosts.filter((post) => localStorage.getItem(`${post.id}_bookmarked`) === "true");
            setBookmarkedPosts(filtered);
        }
    },[data]);
       
       useEffect(() => {
        const handleBookmarkChange = () => {
            if(data?.blogPosts) {
                    const filtered = data.blogPosts.filter((post) => 
                    localStorage.getItem(`${post.id}_bookmarked`) === "true");
                    setBookmarkedPosts(filtered);
            }
        };

        window.addEventListener("bookmark-changed" , handleBookmarkChange);
        return () => window.removeEventListener("bookmark-changed" , handleBookmarkChange)
     },[data]);
    

    return (
        <Box>
            {bookmarkedPosts.length > 0 ? (
                bookmarkedPosts.map((post) => (
                    <RouterHome key={post.id} post={post} />
                ))
            ) : (
                <Typography>No bookmarked recipes yet</Typography>
            )}
        </Box>
    )
}