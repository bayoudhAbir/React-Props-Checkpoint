import React from 'react';
import propTypes from "prop-types";
function Profile(props){
    props.handleName(props.fullName) 
    Profile.propTypes={
        fullName:propTypes.string,
     };
     Profile.defaultProps= {
        profession:"Developer"
    };
    return(
        <div>
            <h1>{props.children}</h1><br/>
            <h1>{props.fullName}</h1>
            <h2>{props.profession}</h2>
            <p> {props.bio}</p>
       </div>
     )
};
export default Profile;