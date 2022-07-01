import React from "react";
import User from "./User";


let Users = ({ users, ...props }) => {
    return (
        <div>

            <div>
                {
                    users.map(u => <User user={u} key={u.id} followingInProgress={props.followingInProgress} unfollow={props.unfollow} follow={props.follow} />
                    )
                }
            </div>

        </div>
    )

}




export default Users;