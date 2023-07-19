import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenu } from "../store/reducer";

export default function Nav() {
    const menu = useSelector((state) => state.data.menu)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMenu())
    }, [])

    return (
        <ul className="menu">
            {
                menu.map((v,i) => 
                    <li key={i}>
                        <NavLink to={v.link}>{v.name}</NavLink>
                    </li>
                )
            }
        </ul>
    )
}