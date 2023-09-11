import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./src/Header";
import LoginButton from "./src/Auth";
import Profile from "./src/Profile";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import NewsSearch from "./src/NewsSearch";
import { Image } from "react-bootstrap";
import "./src/index.css"
const url = import.meta.env.VITE_BACKENDURL || "http://localhost:3001";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <Router>
      <div className="landing">
        {isAuthenticated && <Header />}
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <Routes>
                <Route
                  path="./models/news"
                  render={(props) => (
                    <Profile {...props} userData={this.state.userData} />
                  )}
                />
                <Route path="/" element={isAuthenticated && <NewsSearch />} />
                <Route path="/technology-news" element={<NewsSearch />} />
                <Route path="/profile" exact element={<Profile />} />
              </Routes>
            </div>
          
          <div className="image-container">
            <Image src="/images/SoGit3.png" fluid />
          </div>
    
            <div className="col-md-4">
              {!isAuthenticated && <LoginButton />}
              
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
