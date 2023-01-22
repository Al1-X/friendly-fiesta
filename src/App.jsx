import { useState } from "react";

import CustomForm from "./Components/CustomForm";
import EditForm from "./Components/EditForm";
import TaskList from "./Components/TaskList";
import Login from "./Components/Login";
import Register from "./Components/Register";

import "./App.css";
import "./loginRegister.css"

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

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

  const updateTask = (task) => {
    setTasks(prevState => prevState.map(t => (
      t.id === task.id
        ? { ...t, name: task.name }
        : t
    )))
    closeEditMode();
  }

  const closeEditMode = () => {
    setIsEditing(false);
    // previous state focus
  }
  
  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);
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
            {
              isEditing && (
                <EditForm
                  editedTask={editedTask}
                  updateTask={updateTask}
                />
              )
            }
            <CustomForm addTask={addTask}/>
            {tasks && (
              <TaskList
                tasks={tasks}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
                enterEditMode={enterEditMode}
              />
            )}
            </div>
          </Route>

        </Switch>
    </Router>
  );
}

export default App;