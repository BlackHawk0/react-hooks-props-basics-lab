import React from "react";

function Links(props){
    return(
        <div>
            <h3>Links</h3>
            <a href="Githublink,">{props.git}</a>
            <a href="LinkedInlink,">{props.linkedin}</a>
        </div>
    )
}

export default Links