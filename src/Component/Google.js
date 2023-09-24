import { useState } from "react";
import { LoginSocialGoogle } from "reactjs-social-login";
import "../Component/Regitration.css"; // Create a CSS file for styling

function Google() {
  return (
    <div>
      <LoginSocialGoogle
        client_id={
          "815540926637-o6kf291o8c8oa2bj4fvnur1p33q1d6lc.apps.googleusercontent.com"
        }
        onResolve={(response) => {
          console.log(response);
        }}
        onReject={(err) => {
          console.log(err);
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/145/145804.png"
          alt="#"
        />
      </LoginSocialGoogle>
    </div>
  );
}

export default Google;
