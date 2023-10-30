import React, { useState, useEffect } from 'react';
import { Link, Route, Switch, BrowserRouter as Router, Routes } from 'react-router-dom';

import { signIn } from './auth';
import AuthRoute from './AuthRoute';

import Home from './Home';
import Profile from './Profile';
import NotFound from './NotFound';
import LoginForm from './LoginForm';
import LogoutButton from './LogoutButton';

function Logintest() {
  const [user, setUser] = useState(null);
  const authenticated = user != null;

  const login = ({ email, password }) => setUser(signIn({ email, password }));
  const logout = () => setUser(null);

  return (
    <div className="App">
      <div className="mainpage" >
        
        <div className="mainbox">
          
            <Router>
          <header>
            <Link to="/">
              <button>Home</button>
            </Link>
            <Link to="/profile">
              <button>Profile</button>
            </Link>
            {authenticated ? (
              <LogoutButton logout={logout} />
            ) : (
              <Link to="/login">
                <button >Login</button>
              </Link>
            )}
          </header>
          <hr />
          <main>
            <Routes>
              <Route exact path="/" component={Home} />

              <Route
                path="/login"
                render={props => (
                  <LoginForm authenticated={authenticated} login={login} {...props} />
                )}
              />
              <AuthRoute
                authenticated={authenticated}
                path="/profile"
                render={props => <Profile user={user} {...props} />}
              />
              <Route component={NotFound} />
            </Routes>
          </main>
        </Router>
          <img src="img/logobuife.png" alt="logoimage" />
          
          </div>
        </div>
    
    </div>
  );

}

export default Logintest;
