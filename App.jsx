import React, { Component } from "react";
//import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
//import { Icon } from "@iconify/react";
//import { Button, Modal, Form } from "react-bootstrap";
//import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './src/Header';
//import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from "./src/Auth";
import Profile from "./src/Profile";
//const BACKEND_URL = import.meta.env.BACKEND_URL || "http://localhost:3001";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Profile />
        <LoginButton />
      </div>
    );
  }
}

export default App;



