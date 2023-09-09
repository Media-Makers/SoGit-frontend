import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./src/Header";
import LoginButton from "./src/Auth";
import Profile from "./src/Profile";
import NewsSearch from "./src/NewsSearch";
import HorizontalExample from "./src/Mediamakers";
import axios from "axios";
const BACKEND_URL = import.meta.env.BACKEND_URL || "http://localhost:3001";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: [],
    };
  }

  async componentDidMount() {
    try {
      
      const response = await axios.get(`${BACKEND_URL}/signUp`);
      this.setState({ userData: response.data });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <Routes>
                  <Route
                    path="/profile"
                    render={(props) => (
                      <Profile
                        {...props}
                        userData={this.state.userData}
                      />
                    )}
                  />
                  <Route path="/news" component={NewsSearch} />
                  <Route path="/" exact component={Profile} />
                </Routes>
              </div>
              <div className="col-md-4">
                <LoginButton />
              </div>
            </div>
          </div>
          <HorizontalExample />
        </div>
      </Router>
    );
  }
}

export default App;
