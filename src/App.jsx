import CustomForm from "./Components/CustomForm";
import Login from "./Components/Login";
import Register from "./Components/Register";
import "./style.scss";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const addTask = (task) => {
    console.log(task)
  }

  return (
   <div className="container">
    <header>
      <h1>Task List</h1>
    </header>
    <CustomForm addTask={addTask}/>
   </div>
  );
}

export default App;
