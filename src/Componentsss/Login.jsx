import Box from "@mui/material/Box"
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { Signup } from "./SignUp";
import { signInWithEmailAndPassword } from "firebase/auth";
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';


export const  RouterLoginn = ( ) => {
    const[email , setEmail] = useState("");
    const[password , setPassword] = useState("");
    const[showPage , setShowPage] = useState(true);
    const navigate = useNavigate();
    async function handleLogin(e) {
        e.preventDefault();
        try {
                await signInWithEmailAndPassword(auth , email , password);
                console.log("Login Successful");
                navigate("/");
        }
        catch(err) {
//             if(err.code === "auth/invalid-credential"){
//                 alert("Invalid credential");
//             }
// ")
            console.log("Login failed ",{  err , mdg: err.message})
        }
        console.log( "Login",email , password , )
    };

  
        

        if(!showPage) return null;

        

    
    return (
       <Box>
        <Container maxWidth="sm" sx={{pb : 37}}>
            <Paper elevation={3} sx= {(theme) => ({
                    [theme.breakpoints.down("sm")] :{
                      p: 4 , mt: 8 
                },  [theme.breakpoints.up("sm")] :{
                      p: 4 , mt: 8 
                }
              
            })}>
                 <Typography variant="h5" gutterBottom>
                    Login
                     {/* <Box sx={{p:3 , position: "relative"}}>
                    
                        <IconButton onClick={() => setShowPage(false)} sx={{position: "absolute" , top: 8 , right : 8 }}>
                        <CloseIcon/>
                    </IconButton>
                   
                    
                </Box> */}
                </Typography>
               
                <Box component="form" type="submit" onSubmit = {handleLogin} display={"flex"} flexDirection={"column"} gap={2}>
                    <TextField label="Email " type="email"  required onChange={(e) => setEmail(e.target.value)} />
                     <TextField label="Password" type="password" required onChange={(e) => setPassword(e.target.value)}/>
                     <Button type="submit" variant="contained" sx={{backgroundColor:"navy"}}>Login</Button>
                    
                </Box>
                <Box display={"flex"} flexDirection={"row"}>
                        <Button onClick={() => navigate("/SignUp")} > SignUp</Button>
                        <Button onClick={() => navigate("/")} sx={{pl: 45}}>Close</Button>
                </Box>
            </Paper>
        </Container>
       
       </Box>
    )
}