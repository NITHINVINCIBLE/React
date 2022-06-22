import React from "react";
import {useNavigate} from "react-router-dom";

function About() {
    let navigate = useNavigate();
    return(
        <div>
            <h1>This is About Page</h1>
            <button onClick={() => {navigate("/profile")}}>Go to Profile</button>
        </div>)
}

export default About;