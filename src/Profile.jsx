import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import "./Profile.css"; 
import LoginButton from "./Auth";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <div className="search-box">
          <input type="text" placeholder="Search" />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </div>
        {/* <div>
          <LoginButton />
        </div> */}
      </div>
    )
  );
};

export default Profile;