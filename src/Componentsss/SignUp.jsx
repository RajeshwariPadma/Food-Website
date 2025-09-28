import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


export const Signup = () => {
    const[email , setEmail] = useState("");
    const[password,setPassword] = useState("");
     const[showPage , setShowPage] = useState(true);
    const navigate = useNavigate();
    const[isAdmin , setIsAdmin] = useState(false);

    // const[createUser , {data , loading , error}] = useMutation(SET_USER)
    const handleSignup = async(e) => {
        e.preventDefault();
        try {
                await createUserWithEmailAndPassword(auth , email , password);
                navigate("/");
        }
        catch(err){
                alert(err.message);
        }
    }
      if(!showPage) return null;
    return (
        <Container maxWidth="sm" sx={{pb : 37}}>
            <Paper elevation={3} sx={{p : 4 , mt : 8}}>
                <Typography variant="h5" gutterBottom>
                    SignUp
                </Typography>
                <Box component="form" onSubmit={handleSignup} display="flex" flexDirection={"column"} gap={2}>
                    <TextField label="Email" type="email" onChange={(e) => setEmail(e.target.value)} />
                    <TextField label="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                    <Button type="submit" variant="contained">
                         Sign Up
                    </Button>
                </Box>
                <Box>
                    Already havean account?{""}
                    <Button onClick={() => navigate("/Loginn")}>Login</Button>
                     <Button onClick={() => navigate("/")} sx={{pl: 23}}>Close</Button>
                </Box>
            </Paper>
        </Container>
    )
}