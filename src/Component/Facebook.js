import React, {useState} from 'react'
import { LoginSocialFacebook } from "reactjs-social-login";
import "../Component/Regitration.css"; // Create a CSS file for styling


const Facebook = () => {

    const [profile, setProfile] = useState(null);

  return (
    <div>
        <div>
            {!profile ? (
              <LoginSocialFacebook
             appId="587839403380527"
                onResolve={(response) => {
                  console.log(response);
                  setProfile(response.data);
                }}
                onReject={(error) => {
                  console.log(error);
                }}
              >
                <img
                  src="https://cutewallpaper.org/24/small-facebook-icon-png/follow-us-on-social-media-facebook-small-icon-png-image-with-transparent-background-toppng.png"
                  alt="#"
                />
              </LoginSocialFacebook>
            ) : (
              ""
            )}

            {profile ? (
              <div>
                <h6 style={{color: "black"}}>{profile.name}</h6>
                <img src={profile.picture.data.url} alt="#" />
              </div>
            ) : (
              ""
            )}
          </div>
    </div>
  )
}

export default Facebook