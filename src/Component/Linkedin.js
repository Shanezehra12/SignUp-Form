import React from 'react'
import { LoginSocialLinkedin } from "reactjs-social-login";
import "../Component/Regitration.css"; // Create a CSS file for styling
import {LinkedIn}  from 'react-linkedin-login-oauth2';

const Linkedin = () => {

  return (
    <div>
    <LoginSocialLinkedin
    clientId="77m4c0j7cz8m4m"
    onResolve={(response) => {
        console.log(response);
      }}
      onReject={(err) => {
        console.log(err);
      }}
      redirectUri='https://www.linkedin.com/developers/tools/oauth/redirect'
    >
    <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/1200px-LinkedIn_icon_circle.svg.png"
          alt="#"
        />
  </LoginSocialLinkedin>
  </div>
  )
}

export default Linkedin