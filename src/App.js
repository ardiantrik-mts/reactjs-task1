import './App.css';
// import Recipe from './components/note/Recipe';
// import Post from "./components/post/Post";
// import Note from "./components/note/Note";
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
        <h2>Home</h2>
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/form">Input Item</Link>
            </li>
            <li>
              <Link to="/fetchItem">List Item</Link>
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
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;