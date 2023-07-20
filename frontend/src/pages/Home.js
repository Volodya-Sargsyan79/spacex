import React from "react";
import Items from "../components/items";
import '../style/Home.scss'

export default function Home() {
    return (
        <div className="home_container">
            <div></div>
            <div className="home_container_items">
                <div className="home_container_items--first">
                    <Items classes="top_left" />
                    <Items classes="top_right"/>
                </div>
                <div className="home_container_items--second">
                    <Items classes=""/>
                    <Items classes=""/>
                </div>
            </div>
        </div>
    )
}