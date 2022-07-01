import React from "react";
import s from "./Users.module.css"
import userPhoto from "../../assets/img/profileImg.png";
import { NavLink } from "react-router-dom";



let User = ({ user, followingInProgress, unfollow, follow }) => {

    return (
        <div className={s.item}>

            <div className={s.photoNbutton}>
                <div className={s.image}>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="" className={s.userPhoto} />
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)} id={s.followButton}
                            onClick={() => {
                                unfollow(user.id);
                            }}>Unfollow</button>

                        : <button disabled={followingInProgress.some(id => id === user.id)} id={s.followButton}
                            onClick={() => {
                                follow(user.id);
                            }}>Follow</button>}
                </div>
            </div>
            <div className={s.profileInfo}>

                <ul>
                    <li>{user.name}</li>
                    <li>{user.status}</li>
                    <li>{"user.location.country"}</li>
                    <li>{"user.location.city"}</li>
                </ul>
            </div>
        </div>)
}





export default User;