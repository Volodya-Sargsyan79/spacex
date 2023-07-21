import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTraveing } from "../store/reducer";
import Items from "../UI/Items";
import '../style/Home.scss'
import Button from "../UI/Button";

export default function Home() {
    const traveling = useSelector((state) => state.data.traveling)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTraveing())
    }, [])

    return (
        <div className="home_container">
            <div className="home_container_namePart">
                <div className="home_container_namePart--name">
                    <h1>ПУТЕШЕСТВИЕ</h1>
                    <p>на красныю планету</p>
                </div>
                <div className="home_container_namePart--button">
                    <Button />
                </div>
            </div>
            <div className="home_container_items">
                <div className="home_container_items--first">
                    <Items classes="top_left" data={traveling[0]?.we} name="мы" text="на рынке" />
                    <Items classes="top_right" data={traveling[0]?.guarantee} name="гарантируем" text="безопасность"/>
                </div>
                <div className="home_container_items--second">
                    <Items classes="bottom_left" data={traveling[0]?.date.substring(0,4)} name="календарик за" text="в подарок"/>
                    <Items classes="bottom_right" data={traveling[0]?.days} name="пытешествие" text="дней"/>
                </div>
            </div>
        </div>
    )
}