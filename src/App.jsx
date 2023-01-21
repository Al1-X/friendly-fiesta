import CustomForm from "./Components/CustomForm";
import Login from "./Components/Login";
import Register from "./Components/Register";
import "./App.css";
import { useState } from "react";

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  const addTask = (task) => {
    console.log(task)
  }

  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>

          <Route path="/tasklist">
            <div className="container">
            <header>
              <h1>Task List</h1>
            </header>
            <CustomForm addTask={addTask}/>
            </div>
          </Route>

        </Switch>
    </Router>
  );
}

export default App;
