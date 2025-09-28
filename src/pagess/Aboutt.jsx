import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

export const RouterAbout = () => {
    return (
        <Box sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                        pt : 3 , pl : 3, pr : 1
                },  [theme.breakpoints.up("sm")] :{
                        pt : 3 , pl : 15 , pr : 15
                }
              
            })}>
            <Box >
                <Typography gutterBottom sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                        fontSize : 25 ,
                        color: "orange" ,
                        display: "flex", 
                        fontWeight : "bold", 
                        justifyContent : "space-around"
                },  [theme.breakpoints.up("sm")] :{
                        fontSize : 40 ,
                        color: "orange" ,
                        display: "flex", 
                        fontWeight : "bold", 
                        justifyContent : "space-around"
                }
              
            })}>
                    Welcome to 🐼 Panda Food Recipes
                </Typography>
            </Box>
            
              <Box>
                <Typography sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                        fontWeight : "bold" ,
                        display : "flex" , 
                        justifyContent : "space-around", 
                        fontSize : 14 , pb : 3
                },  [theme.breakpoints.up("sm")] :{
                        fontWeight : "bold" ,
                        display : "flex" , 
                        justifyContent : "space-around", 
                        fontSize : 25 , pb : 3
                }
              
            })} >
                    Start your cooking journey today with Panda Food Recipes - where cooking is fun and delicious! 🍴💛
                </Typography>
            </Box>
            <Box>
                <Typography gutterBottom sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                        fontSize : 13 , pb  : 1
                },  [theme.breakpoints.up("sm")] :{
                        fontSize : 18 , pb  : 2
                }
              
            })}>
                        Your one-stop website for delicious and easy-to-make dishes! Whether you're cooking for your family or trying something new, our recipes are made with simple steps and tasty ingredients.

                We share both vegetarian and non-vegetarian recipes that are healthy, flavorful, and perfect for any meal. Check out some of our popular items:
                </Typography>
            </Box>
            
            <Box >
                <Typography sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                        fontSize : 16, pb : 2, fontWeight : "bold"
                },  [theme.breakpoints.up("sm")] :{
                        fontSize : 22, pb : 2, fontWeight : "bold"
                }
              
            })} >
                   🥗 Popular Recipes on Panda Food Recipes:
                </Typography> 
                
                <Typography sx={{display : "flex" }}>
                    <Box sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                        fontSize : 13, fontWeight : "bold"
                }
              
            })}>1.Spicy Peanut Tofu Bowls
                    </Box> 
                    <Box sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                        fontSize : 13
                }
              
            })}> - A tasty mix of tofu, rice, and spicy peanut sauce.</Box>
                </Typography>
                <Typography sx={{display : "flex"  }}>
                    <Box sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                        fontSize : 13, fontWeight : "bold"
                }
              
            })}>2.Healing Chicken and Rice Soup  - 
                </Box>
                <Box sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                        fontSize : 13
                }
              
            })}> Warm, comforting soup for a cozy day.</Box>
                </Typography>
                <Typography sx={{display : "flex"}}>
                    <Box sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                        fontSize : 13, fontWeight : "bold"
                }
              
            })}>3.Crispy Chicken Tikka Bowls - </Box><Box sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                        fontSize : 13
                }
              
            })}> Juicy chicken tikka with crispy edges, served in a bowl</Box>
                </Typography>
                <Typography sx={{display : "flex"}}>
                    <Box sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                        fontSize : 13, fontWeight : "bold"
                }
              
            })}>4.Cauliflower Fried Rice with Crispy Tofu - </Box><Box sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                        fontSize : 13
                }
              
            })}>A low-carb fried rice with crunchy tofu.</Box>
                </Typography>
                <Typography sx={{display : "flex"}}>
                    <Box sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                        fontSize : 13, fontWeight : "bold"
                }
              
            })}>5.Amazing Mushroom Bowls - </Box><Box sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                        fontSize : 13
                }
              
            })}>Mushrooms and greens with yummy pesto flavor.</Box>
                </Typography>
                <Typography sx={{display : "flex"}}>
                    <Box sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                        fontSize : 13, fontWeight : "bold"
                }
              
            })}>6.Crispy Potato Salad - </Box><Box sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                        fontSize : 13
                }
              
            })}>Golden potatoes mixed with creamy and tangy dressing.</Box>
                </Typography>
                <Typography sx={{display : "flex"}}>
                    <Box sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                        fontSize : 13, fontWeight : "bold"
                }
              
            })}>7.Paneer Chilli Dosa  - </Box><Box sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                        fontSize : 13
                }
              
            })}>Crispy dosa filled with spicy paneer chilli stuffing.</Box>
                </Typography>
                <Typography sx={{display : "flex"}}>
                    <Box sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                        fontSize : 13, fontWeight : "bold"
                }
              
            })}>8.Chicken Club Salad - </Box><Box sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                        fontSize : 13
                }
              
            })}>Fresh salad with chicken, lettuce, and a light dressing.</Box>
                </Typography>
                <Typography sx={{display : "flex"}}>
                    <Box sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                        fontSize : 13, fontWeight : "bold"
                }
              
            })}>9.Potato Pulao - </Box><Box sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                        fontSize : 13
                }
              
            })}>Flavored rice with soft potatoes and mild spices.</Box>
                </Typography>
                <Typography sx={{display : "flex" , pb : 2}} gutterBottom>
                    <Box sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                        fontSize : 13, fontWeight : "bold"
                }
              
            })}>10.Yummy Air Fryer Chicken Tenders - </Box><Box sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                        fontSize : 13
                }
              
            })}>Crispy and healthy chicken made in an air fryer.</Box>
                </Typography>
                
            </Box>
            <Box>
                <Typography sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                        fontSize : 16, pb : 2, fontWeight : "bold"
                },  [theme.breakpoints.up("sm")] :{
                        fontSize : 22, pb : 2, fontWeight : "bold"
                }
              
            })}>
                   🍽️ Why Choose Panda Food Recipes?
                </Typography>
                <Typography sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                        fontSize : 13 
                },  [theme.breakpoints.up("sm")] :{
                        fontSize : 18 
                }
              
            })}>
                   🧑‍🍳 Easy recipes anyone can try
                </Typography>
                <Typography sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                        fontSize : 13 
                },  [theme.breakpoints.up("sm")] :{
                        fontSize : 18 
                }
              
            })}>
                  📷  Step-by-step instructions with pictures
                </Typography>
                <Typography sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                        fontSize : 13 
                },  [theme.breakpoints.up("sm")] :{
                        fontSize : 18 
                }
              
            })}>
                   🥦 Healthy and tasty options
                </Typography>
                <Typography sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                        fontSize : 13 
                },  [theme.breakpoints.up("sm")] :{
                        fontSize : 18 
                }
              
            })}>
                   🍗  Both veg and non-veg dishes
                </Typography>
                <Typography  sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                        fontSize : 13 , pb:4
                },  [theme.breakpoints.up("sm")] :{
                        fontSize : 18 , pb : 4
                }
              
            })}>
                   📱 Mobile-friendly and simple layout
                </Typography>
            </Box>
          
                
        </Box>
    )
}

