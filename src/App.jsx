import { useState } from "react";

import CustomForm from "./Components/CustomForm";
import TaskList from "./Components/TaskList";
import Login from "./Components/Login";
import Register from "./Components/Register";

import "./App.css";
import "./loginRegister.css"

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
  }

  const deleteTask = (id) => {
    setTasks(prevState => prevState.filter(t => t.id !== id));
  }

  const toggleTask = (id) => {
    setTasks(prevState => prevState.map(t => (
      t.id === id
        ? { ...t, checked: !t.checked }
        : t
    )))
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
              <h1>My Task List</h1>
            </header>
            <CustomForm addTask={addTask}/>
            {tasks && (
              <TaskList
                tasks={tasks}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
              />
            )}
            </div>
          </Route>

        </Switch>
    </Router>
  );
}

export default App;