import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenu } from "../store/reducer";
import { NavLink } from 'react-router-dom';
import '../style/Nav.scss'
  
export default function NavBar() {
    const menu = useSelector((state) => state.data.menu)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMenu())
    }, [])

    return (
        <div>
            <div className="display_container">
                {
                    menu.map((v,i) => 
                        <NavLink key={i} to={v.link}>{v.name}</NavLink>
                    )
                }
            </div>
            <div className="phone_container">
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                        {
                            menu.map((v,i) => 
                                <li key={i}>
                                    <NavLink to={v.link}>{v.name}</NavLink>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>

    )
}