import { useState } from "react"
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon  from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { RouterAbout } from "../pagess/Aboutt";
import { RouterHome } from "../pagess/Homee";
//import { RouterProducts } from "../pagess/Productss";
import { routerpath } from "../Routerpath";
import { useNavigate } from "react-router-dom";

export const MenuComponents = () => {
    const [anchorEl , setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleNavigate = (path) => {
        navigate(path);
        handleClose();
    }

    return (
        <Box sx={{marginLeft:20}}>
            <IconButton onClick={handleClick}> 
                <MenuIcon/>
            </IconButton>
               <Menu 
               anchorEl={anchorEl}
               open = {open}
               onClose={handleClose }
               >
                    <MenuItem onClick={() => handleNavigate("/")}>Home</MenuItem>
                     <MenuItem onClick={() => handleNavigate("/Aboutt")}>About</MenuItem>
                      {/* <MenuItem onClick={() => handleNavigate("/Productss")}>Products</MenuItem> */}
               </Menu>
           
        </Box>
    )
}

