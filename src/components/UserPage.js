import React from "react";

import UserHeader from "./UserHeader";
import UserEdit from "./UserEdit";

const UserPage = ({ loggedInUser, authUser, games, users }) => {

    return (
        <div>
            <UserHeader users={users} games={games}/>
            <UserEdit users={users} authUser={authUser} />
        </div>
    );
};

export default UserPage;
