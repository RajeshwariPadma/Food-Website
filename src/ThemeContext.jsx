import { ThemeProvider ,  createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"

import { createContext, useEffect, useMemo, useState } from "react"

export const ColorModeContext = createContext({
    toggleColor : () => {},
    mode: "light",
}) ;

export const ThemeContext = ({children}) => {
    const[mode , setMode] = useState("light");

    // useEffect(() => {
    //     const savedMode = localStorage.getItem("theme") || "light";
    //     setMode(savedMode);
    //   }, []);

     const colorMode = useMemo(() => ({
        toggleColor : () => {
            setMode((prev) => {
                const newMode = prev === "light" ? "dark" : "light";
                localStorage.setItem("theme" , newMode);
                return newMode;
            });
        },
        mode,
     }),[mode]);
     
            const theme = createTheme({
            palette : {
                mode,
                  primary: {
                     main: "#1976d2",
                    },
                    background: {
                        default: mode === "light" ? "#f0f0f0" : "#121212", // ✅ add this
                        paper: mode === "light" ? "#fff" : "#1e1e1e"       // ✅ for AppBar, Card etc.
    }
            },

            // breakpoints : {
            //     values : {
            //         sx : 650
            //     },
            // },
            components : {
                MuiButton:{
                    defaultProps : {
                        disableRipple : true,
                    },
                   styleOverrides : {
                    root : {
                        textTransform : "none" ,
                        color : "red" ,
                    },
                   },
                },

                 
               MuiTypography : {
                styleOverrides : {
                    root : {
                        textTransform : "none",
                         color : mode === "light" ? "black" : "white"
                    },
                   },
                },
            
            },

            
        });

        
    return (
        <>
        <ColorModeContext.Provider value={colorMode}>
      
        <ThemeProvider theme = {theme}>
              <CssBaseline />
            {children}
        </ThemeProvider>
        
        </ColorModeContext.Provider>
        </>
    );
};