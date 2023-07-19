import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Technology from "../pages/Technology";
import FlightSchedle from "../pages/FlightSchedule";
import Garaiti from "../pages/Garaiti";
import AboutCompany from "../pages/AboutCompany";
import Contacts from "../pages/Contacts";

export default function RootRouter() {
    const routes = createBrowserRouter([
        {
            path: "*",
            element: <Error />,
        },
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/technology",
            element: <Technology />,
        },
        {
            path: "/flightschedle",
            element: <FlightSchedle />,
        },
        {
            path: "/garaiti",
            element: <Garaiti />,
        },
        {
            path: "/aboutcompany",
            element: <AboutCompany />,
        },
        {
            path: "/contacts",
            element: <Contacts />,
        },
    ])
    return <RouterProvider router={routes} />;
}