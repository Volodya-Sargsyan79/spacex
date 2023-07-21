import React from "react";
import '../style/Items.scss'

export default function Items({classes, data, name, text}) {
    return (
        <div className={`items_container ${classes}`}>
            <p>{name}</p>
            <h1>{data}</h1>
            <p>{text}</p>
        </div>
    )
}