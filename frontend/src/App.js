import React from "react";
import { Routes, Route } from "react-router";
import { store } from "./store";
import { Provider } from "react-redux";
import Home from "./pages/Home"
import Technology from "./pages/Technology";
import FlightSchedle from "./pages/FlightSchedule";
import Garaiti from "./pages/Garaiti";
import AboutCompany from "./pages/AboutCompany";
import Contacts from "./pages/Contacts";
import "./style/app.scss"
import Header from "./components/Header";
import RootRouter from "./router/routes";

export default function App() {
    return (
        <Provider store={store}>
            <div className="app">
                <Header />
                <hr/>
                <Routes>            
                    <Route path="*" element={<Error />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/technology" element={<Technology />} />
                    <Route path="/flightschedle" element={<FlightSchedle />} />
                    <Route path="/garaiti" element={<Garaiti />} />
                    <Route path="/aboutcompany" element={<AboutCompany />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
            </div>
        </Provider>
    )
}
