import React, { useState } from "react";
import Task from "./Task";
import "./AddTask.css";
function AddTask() {
  const [counter, setCounter] = useState(0);
  const CreateTask = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="Container">
      <div className="Header">
        <h3>Add new task</h3>
        <button
          style={{
            borderRadius: "100%",
            width: "30px",
            height: "30px",
            marginTop: "4px",
            backgroundColor: "white",
            marginLeft:"10px"
          }}
          onClick={CreateTask}
        >
          <i className="fa fa-plus"></i>
        </button>
      </div>
      <div className="Tasks">
        {[...Array(counter)].map((k, v) => (
          <Task key={k} />
        ))}
      </div>
    </div>
  );
}

export default AddTask;
