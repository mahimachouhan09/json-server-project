import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import User from './components/User'
import Todo from './components/Todo'
import Album from './components/Album'
import Post from './components/Post'
import Comment from './components/Comment' 

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/todos">Todos</Link>
            </li>
            <li>
              <Link to="/albums">Albums</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/comments">Comments</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/"></Route>
          <Route path="/users" component = {User}></Route>
          <Route path="/todos" component = {Todo}></Route>
          <Route path="/albums" component = {Album}></Route>
          <Route path="/posts" component = {Post}></Route>
          <Route path="/comments" component = {Comment}></Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
