import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./src/Header";
import LoginButton from "./src/Auth";
import Profile from "./src/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import NewsSearch from "./src/NewsSearch";
import { Image } from "react-bootstrap";
import "./src/index.css";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <Router>
      <div className="landing">
        {isAuthenticated && <Header />}
        <div className="container">
          <div>
            <div>
              <Routes>
                <Route
                  path="./models/news"
                  render={(props) => (
                    <Profile {...props} userData={this.state.userData} />
                  )}
                />

                <Route path="/" element={isAuthenticated && <NewsSearch />} />

                <Route path="/profile" exact element={<Profile />} />
              </Routes>
            </div>
            <div className="login-wrap">
              <div className="login">
                {!isAuthenticated && (
                  <>
                    <div className='image-bg'>
                  
                      <Image src="./images/SoGit3.png" fluid  />
                    </div>
                    <LoginButton />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
