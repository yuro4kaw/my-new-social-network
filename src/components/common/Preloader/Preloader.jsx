import React from "react";
import loading from "../../../assets/img/Loading.svg";
import s from "./Preloader.module.css"

let Preloader = (props) => {
    return (
        <div className={s.container}>
            <img src={loading} alt="loading..." className={s.loading} />
        </div>
    )

}

export default Preloader;