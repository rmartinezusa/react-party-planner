import { Component } from "react";
import { createBrowserRouter } from "react-router-dom";
//I am gonna have to import components here!!!!
import Layout from "./components/Layout"
import EventsList from "./components/EventsList"
import EventDetails from "./components/EventDetails"
import PostEvent from "./components/PostEvent"


const router = createBrowserRouter([
    {
        path: "/",
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<EventsList/>,
            },
            {
                path:"/events",
                element:<EventsList/>,
            },
            {
                path:"/events/:id",
                element:<EventDetails/>,
            },
            {
                path:"/events/new",
                element:<PostEvent/>,
            }

        ]
    }
]);
export default router;