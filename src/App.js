import React from 'react';
import { Counter } from './features/counter/Counter';
import { UserList } from './features/home/UserList';
import { About } from './features/about/About';
import { ContactUs } from './features/contactUs/ContactUs';
import { fetchUsers } from "./features/home/usersSlice";

import {UsersList} from "./features/usersList/UsersList"

import store from "./store";


import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
store.dispatch(fetchUsers());

  return (
    <div className="App">
        {/* <Home /> */}
        <Router>
      <div>
        <ul className="custom-ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Counter">Counter</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/ContactUs">Contact us</Link>
          </li>
          <li>
            <Link to="/UsersList">Users List</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <UserList />
          </Route>
          <Route path="/Counter">
            <Counter />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/ContactUs">
            <ContactUs />
          </Route>
          <Route path="/UsersList">
            <UsersList />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
