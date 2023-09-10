import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./src/Header";
import LoginButton from "./src/Auth";
import Profile from "./src/Profile";
// import NewsSearch from "./src/NewsSearch";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import NewsSearch from "./src/NewsSearch";
const url = import.meta.env.VITE_BACKENDURL || "http://localhost:3001";

function App () {
 const {isAuthenticated} = useAuth0();
  // async componentDidMount() {
  //   try {

  //     const response = await axios.get(`${url}/signUp`);
  //     this.setState({ userData: response.data });
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // }
  // set state for news data

 
    return (
      <Router>
        <div className="App">
          {isAuthenticated && <Header />}
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <Routes>
                  <Route
                    path="/profile"
                    render={(props) => (
                      <Profile {...props} userData={this.state.userData} />
                    )}
                  />

                  <Route path="/" element={isAuthenticated && <NewsSearch/>}/>
                </Routes>
              </div>
              <div className="col-md-4">
                {!isAuthenticated && <LoginButton />}
                {/* add logout button - isAuthenticated */}

              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }


export default App;
