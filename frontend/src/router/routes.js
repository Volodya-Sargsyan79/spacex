import React from "react";
import {createBrowserRouter, createRoutesFromElements, Route, Routes, RouterProvider} from "react-router-dom";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Technology from "../pages/Technology";
import FlightSchedle from "../pages/FlightSchedule";
import Garaiti from "../pages/Garaiti";
import AboutCompany from "../pages/AboutCompany";
import Contacts from "../pages/Contacts";

export default function RootRouter() {
    const routes = createBrowserRouter(
        createRoutesFromElements(
            <Routes>            
                <Route path="*" element={<Error />} />
                <Route path="/" element={<Home />} />
                <Route path="/technology" element={<Technology />} />
                <Route path="/flightschedle" element={<FlightSchedle />} />
                <Route path="/garaiti" element={<Garaiti />} />
                <Route path="/aboutcompany" element={<AboutCompany />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        )
    )
    return <RouterProvider router={routes} />;
}