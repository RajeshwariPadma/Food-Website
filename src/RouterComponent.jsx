import Box from "@mui/material/Box"
import Link from "@mui/material/Link"
import { routerpath } from "./Routerpath"
import { Component } from "react"
import {Routes , Route} from "react-router-dom"
import {RouteValidator} from "./RouteValidat"



export const RouterComponent = () => {
   
    return (
       
         <Routes>
        {routerpath.map(({ path , component : Component , type , permission})  =>   {
            if(type=="Private"){
                console.log("Private");

                 return   (
                <Route 
                 key={path} 
                path={path}
                element={
                <RouteValidator routeProps = {permission}>
                    <Component/> 
                </RouteValidator>
                }
                />
            )
        }

            console.log("Public");
            return <Route 
                 key={path} 
                path={path}
                element={<Component/>}
                />
           }
         
             )}

            
         </Routes>
        
    )
   
}