import { Children } from "react";
import Box from "@mui/material/Box";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export const RouteValidator = ({children , routeProps}) => {

    // 1. what i commented it use to loading the login page and did not navigate to other pages without login

    // const navigate = useNavigate();
    //   const [loading, setLoading] = useState(true);
    //   const loggedInUser = useContext(AuthContext);
    //   console.log({ loggedInUser, tt: !loggedInUser.user });
    //   useEffect(() => {
    //     if (!loggedInUser?.user) {
    //       navigate("/login"); // Redirect to login page if user is not logged in
    //     }
    //     setLoading(false);
    //   }, [loggedInUser, navigate]);
    //   if (!loggedInUser.user) navigate("/login");

    const user = ["admin" , "user"];

    const hasPermission = routeProps.some((role) => user.includes(role));

    //  if (loading) return <div>Loading</div>;
    if(!hasPermission) return <Box>{children}</Box>
    // console.log({ loading });
    return children;
}