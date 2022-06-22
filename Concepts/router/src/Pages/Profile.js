import React from "react";
import {useNavigate,useParams} from "react-router-dom";

function Profile() {
    let navigate = useNavigate();
    let {username} = useParams();
    return(
    <div>
        <h1>Profile Page..username :{username}</h1>
        <button onClick={() => {navigate("/about")}}>Go to About</button>
    </div>)
}

export default Profile;