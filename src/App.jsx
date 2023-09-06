import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
//import { Icon } from "@iconify/react";
import { Button, Modal, Form, Image } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Header';
import { useAuth0, Profile } from '@auth0/auth0-react';
import LoginButton from "./Auth";
const BACKEND_URL = import.meta.env.BACKEND_URL || "http://localhost:3001";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;



