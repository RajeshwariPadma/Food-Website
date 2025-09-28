import { Component } from "react";
import  { RouterHome } from "./pagess/Homee";
import { RouterAbout } from "./pagess/Aboutt";
//import  { RouterProducts } from "./pagess/Productss";
import { RouterLoginn } from "./Componentsss/Login";
import { Signup } from "./Componentsss/SignUp";
import { BlogDetails } from "./pagess/Blogpage";
import { BookmarksPage } from "./pagess/Addtocart";
import { LikePage } from "./pagess/Likedposts";

 
 export const routerpath = [
    {
        path : "/",
        component: RouterHome,
       
        type : "Private",
        permission:[]
    },
     {
        path : "/Likedposts",
        component:LikePage ,
        type : "Private",
        permission:[]
    },
      {
        path : "/Aboutt",
        component: RouterAbout,
         type : "Public",
          permission:[]
    },
      {
        path : "/Loginn",
        component: RouterLoginn,
         type : "Public",
          permission:[]
    },
    {
        path : "/SignUp",
        component: Signup ,
         type : "Public",
          permission:[]
    },
    //   {
    //     path : "/Productss",
    //     component: RouterProducts,
    //      type : "Private",
    //       permission:["admin"]
    // },
       {
        path : "/Blogpage/:slug",
        component: BlogDetails,
         type : "Private",
          permission:["admin"]
    },
       {
        path : "/Addtocaty",
        component:BookmarksPage,
         type : "Private",
          permission:["admin"]
    },
    
 ];