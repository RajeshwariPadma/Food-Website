import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import { useContext } from 'react';
import { ColorModeContext } from '../ThemeContext';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from "@mui/icons-material/Menu";
import Menu from '@mui/material/Menu';
import { RouterHome } from '../pagess/Homee';
import { RouterAbout } from '../pagess/Aboutt';
//import { RouterProducts } from '../pagess/Productss';
import { MenuComponents } from './MenuComponents';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
// import { auth } from '../../Firebase';
// import { singOut } from 'Firebase/auth';
import { auth } from "../../firebase";
import { signOut } from "firebase/auth"
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { GET_BLOGPOSTS } from '../queries/GET_PRODUCTS';
import { useLazyQuery, useQuery } from '@apollo/client';
import SearchIcon from '@mui/icons-material/Search';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import Navbar_logo from "../assets/Navbar_logo.jpg"
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import { useCallback } from 'react';
import { useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';



function debounce(func, wait = 300) {
    let timeout;

    return function (...args) {
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            func(...args);
        }, wait);
    };
}

const suggestionData = {
    querycontext: {
        originalQuery: "Food"
    },
    suggestionGroups: [
        {
            catalogName: "salads",
            view: "default",
            querySuggestions: [
                { query: "crispy potato salad Food", displayText: "Crispy Potato Salad Food" },
                { query: "Chicken club salad Food", displayText: "Chicken club salad Food" }
            ]
        },
        {
            catalogName: "Indian Dishes",
            view: "default",
            querySuggestions: [
                { query: "Paneer chilli dosa Food", displayText: "Paneer chilli dosa Food" },
                { query: "Potato pulao Food", displayText: "Potato pulao Food" },
                { query: "Crispy Chicken Tikka Bowls with Mint Sauce Food", displayText: "Crispy Chicken Tikka Bowls with Mint Sauce Food" },
                { query: "Healing Chicken and Rice Soup Food", displayText: "Healing Chicken and Rice Soup Food" }
            ]
        },
        {
            catalogName: "Bowls & Stir-Fries",
            view: "default",
            querySuggestions: [
                { query: "Amazing Mushroom Bowls with Kale Pesto Food", displayText: "Amazing Mushroom Bowls with Kale Pesto Food" },
                { query: "Spicy Peanut Tofu Bowls Food", displayText: "Spicy Peanut Tofu Bowls Food" },
                { query: "Cauliflower Fried Rice with Crispy Tofu Food", displayText: "Cauliflower Fried Rice with Crispy Tofu Food" }
            ]
        },
        {
            catalogName: "Chicken Dishes",
            view: "default",
            querySuggestions: [
                { query: "Yummy Air Fryer Chicken Tenders Food", displayText: "Yummy Air Fryer Chicken Tenders Food" }
            ]
        }
    ]
};


export const Navbar = ({ title, setTitle, setFilteredData }) => {
    const { toggleColor, mode } = useContext(ColorModeContext);


    const [anchorEl, setAnchorEl] = useState(null);
    //const [title , setTitle]= useState("");
    const [loading, setLoading] = useState("");
    const [search, setSearch] = useState("");
    //const [filteredData , setFilteredData] =  useState([]);
    //const {data , error, loading} = useQuery(GET_BLOGPOSTS);
    const [GetBlogPost, { data, error }] = useLazyQuery(GET_BLOGPOSTS);
    const navigate = useNavigate();
    const blogPosts = data?.blogPosts || [];

    // const filterPosts  = blogPosts.filter((search) => {
    //     search.title.toLowerCase().includes(searchQuery.toLowerCase())
    // });


    // if(loading) {
    //     return (
    //         <Box>
    //             <CircularProgress></CircularProgress>
    //         </Box>
    //     );
    // }
    const open = Boolean(anchorEl);


    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    }
    console.log({ mode });

    const handleLogout = async () => {
        try {
            await signOut(auth);
            console.log("user has been logged out");
            navigate("/Loginn");
        }
        catch (error) {
            console.error("Error loggin out: ", error);
        }
    };

 const handleChange = (value) => {
        console.log({ value });
        setSearch(value);
        GetBlogPost({
            variables: {
                search: value,
            },
        });
    }

    const dbounceData = useCallback(
        debounce((value) => {
            GetBlogPost({
                variables: { search: value },
                fetchPolicy: "network-only",
            });
        }),
        []);
    useEffect(() => {
        // if (search) {
            // console.log(search);
            dbounceData(search);
        // }


    }, [search]);

    
    const handleSearchClick = () => {

        setLoading(true);

        // setTimeout(() => {
            const results = data?.blogPosts?.filter((item) => item.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()));

            setFilteredData(results);
            setLoading(false);
            setTitle(search);


        // }, 1000);


    };

    const searchs = () => {
        if(!data?.blogPosts) return ;

        const results = data?.blogPosts?.filter((item) => item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
        setFilteredData(results || []);
        setTitle(search)
    };

    const handleInputChange = (e) => {
        setSearch(e.target.value);
        GetBlogPost({ variables: { search: e.target.value } });
    }

    //search bar 
    const allSuggestions = suggestionData.suggestionGroups.flatMap(group => group.querySuggestions.map(item => ({ ...item, catalogName: group.catalogName })));


    return (
        <AppBar position="sticky" sx={{ backgroundColor: "background.paper", display: "flex", flexDirection: "row" }}>


            <Toolbar sx={(theme) => ({
                [theme.breakpoints.down("sm")]: {
                    height: 30, pt: 5, pb: 5
                }, [theme.breakpoints.up("sm")]: {
                    height: 80, pt: 6, pb: 6
                }

            })}>

                <Box sx={(theme) => ({
                    [theme.breakpoints.down("sm")]: {
                        backgroundImage: `url(${Navbar_logo})`,
                        component: "img",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        display: "flex",
                        justifyContent: "center",
                        height: 70,
                        borderRadius: 0,
                        width: 85,
                    }, [theme.breakpoints.up("sm")]: {
                        backgroundImage: `url(${Navbar_logo})`,
                        component: "img",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        display: "flex",
                        justifyContent: "center",
                        height: 95,
                        borderRadius: 0,
                        width: 120,
                    }

                })}>

                </Box>

                <Typography sx={(theme) => ({
                    [theme.breakpoints.down("sm")]: {
                        color: "purple", fontWeight: "bold", fontSize: 13, fontStyle: "italic", pr: 1, pl: 1
                    }, [theme.breakpoints.up("sm")]: {
                        color: "purple", fontWeight: "bold", fontSize: 30, fontStyle: "italic", pr: 10, pl: 3
                    }

                })}  >
                    Panda Food Recipes
                    <Typography sx={(theme) => ({
                        [theme.breakpoints.down("sm")]: {
                            fontSize: 8, fontStyle: "normal", pl: 1.7
                        }, [theme.breakpoints.up("sm")]: {
                            pl: 5, fontSize: 15, fontStyle: "normal"
                        }

                    })} >Eat healthy & Stay healthy
                    </Typography>
                </Typography>
    

                <Autocomplete 
                freeSolo
                // options={allSuggestions.map(item => item.displayText)}
                options={allSuggestions .filter(item => item.displayText.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map(item => item.displayText)}
                inputValue={search}
                onInputChange={(e , newValue) => {
                    setSearch(newValue);
                }}
                
                onChange={(e , value) => {
                    if(value) {
                        const result = allSuggestions.find(item => item.displayText === value);
                        if(result) {
                            console.log("Selected:" , result);
                            setFilteredData([result]);
                        }
                    }
                }} 
                
                renderOption={(props , option) => {
                    const matchedItem = allSuggestions.find(item => item.displayText === option);
                    return ( 
                        <li {...props} style={{display : "flex", flexDirection : "column" , padding : "6px 12px"}} >
                            <Typography>{matchedItem?.displayText} </Typography>
                            <Typography>{matchedItem?.catalogName} </Typography>
                        </li>
                    );
                }} 
                
                renderInput={ (params) => (
                    <TextField 
                    {...params}
                    label= "Search here"
                    variant='outlined'
                    sx={(theme) => ({
                        [theme.breakpoints.down("sm")]: {
                            width : 130,
                        backgroundColor : "white",
                        borderRadius : 3
                        }, [theme.breakpoints.up("sm")]: {
                            width : 280,
                        backgroundColor : "white",
                        borderRadius : 3
                        }

                    })}
                    
                    InputProps={{
                        ...params.InputProps,
                        endAdornment : (
                            <>
                            {/* <SearchIcon sx={{ color : "gray"}} /> */}
                            {params.InputProps.endAdornment}
                            </>
                        ),
                    }}/>
                )
                }/>


                
                <SearchIcon
                    // onClick={handleSearchClick} 
                    onClick={handleSearchClick }
                    sx={{ fontWeight: "bold", fontSize: 55, color: "black", cursor: "pointer", backgroundColor: "aliceblue", borderTopRightRadius: 50, borderBottomRightRadius: 50, border: 0.8, p: 2 }}></SearchIcon>

                <Box sx={(theme) => ({
                    [theme.breakpoints.down("sm")]: {
                        display: "none"
                    },

                })}>





                    <Button variant='text'>
                        <Box sx={{ fontSize: 20, pl: 5, pr: 2 }}>
                            <Link component={RouterLink} to="/" >Home</Link>
                        </Box>
                    </Button>

                    {/* <Button variant='text'>
        <Box>
            <Link component={RouterLink} to="/">Home</Link>
        </Box>
        </Button> */}


                    <Button variant='text'>
                        <Box sx={{ fontSize: 20, pr: 2 }}>
                            <Link component={RouterLink} to="/Aboutt">About</Link>
                        </Box>
                    </Button>



                    {/* <Button>
            <Box>
                <Link component={RouterLink} to={"/Addtocart"}>
                <IconButton > <TurnedInIcon sx={{fontSize : 30 }}/></IconButton></Link>
            </Box>
        </Button> */}



                    {/* <Button variant='text'>
        <Box>
            <Link component={RouterLink} to="/Blogpage">Blogpage</Link>
        </Box>
        </Button> */}
                </Box>
                <Box >
                    <IconButton edge="start" onClick={handleOpen} sx={(theme) => ({
                        [theme.breakpoints.up("sm")]: {
                            display: "none"
                        }, [theme.breakpoints.down("sm")]: {
                            pl: 4,
                            pr: 1

                        },

                    })}>
                        <MenuIcon sx={{ fontSize: 22 }} />

                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => navigate("/")}>Home</MenuItem>
                        <MenuItem onClick={() => navigate("/Aboutt")}>About</MenuItem>
                        {/* <MenuItem onClick={() =>navigate("/Productss")}>Products</MenuItem>
                     <MenuItem onClick={() => navigate("/Blogpage")}>Blogpage</MenuItem> */}
                        <MenuItem onClick={() => navigate("/Addtocaty")}>Bookmark</MenuItem>

                    </Menu>

                </Box>



                <IconButton sx={(theme) => ({
                    [theme.breakpoints.down("sm")]: {
                        marginLeft: "auto", width: 10, height: 10, pl: 4, pr: 1
                    }, [theme.breakpoints.up("sm")]: {
                        marginLeft: "auto"
                    }

                })} >
                    <Switch checked={mode === "dark"} onChange={toggleColor} />
                </IconButton>
                <IconButton sx={(theme) => ({
                    [theme.breakpoints.down("sm")]: {
                        marginLeft: "auto", width: 10, height: 10, pl: 5
                    }, [theme.breakpoints.up("sm")]: {
                        marginLeft: "auto"
                    }

                })} onClick={handleLogout}>
                    <LogoutIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )

}