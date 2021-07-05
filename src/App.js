import './App.css';
// import Recipe from './components/note/Recipe';
// import Post from "./components/post/Post";
// import Note from "./components/note/Note";
import LoginForm from "./components/login/Login";
import InputForm from "./components/form/Form";
import FetchItem from "./components/data-item/FetchItem";
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import axios from 'axios';

const App = () => {

  function Home() {
    return (
      <div>
        <h2><LoginForm /></h2>
      </div>
    );
  }

  function Away() {
    return (
      <div>
        <h2>Your local Storage gone, reduce to atom</h2>
      </div>
    );
  }

  return (
    <div className="App">
      {/* <Button color="danger">cek</Button> */}
      {/* <InputForm /> */}
      {/* <table>
        <tr>
          <td><Post /></td>
          <td><Recipe /></td>
        </tr>
      </table> */}
      
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/form">Input Item</Link>
            </li>
            <li>
              <Link to="/fetchItem">List Item</Link>
            </li>
            <li>
              <Link to="/logout" onClick={() => localStorage.clear()}>Log Out</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/form">
              <InputForm />
            </Route>
            <Route path="/fetchItem">
              <FetchItem />
            </Route>
            <Route path="/logout">
              <Away />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;