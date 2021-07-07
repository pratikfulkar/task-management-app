import React, { useContext, useEffect, useState } from "react";
import "./Card.css";
import { GlobalContext } from "../context/GlobalState";
import { useForm } from "react-hook-form";
import { Card } from "react-bootstrap";
function Task() {
  const { register, handleSubmit } = useForm();
  const [time, SetTime] = useState([]);
  const [showEdit, setShowEdit] = useState(true);
  const [data, setData] = useState({});
  const { addTask, tasks } = useContext(GlobalContext);

  // console.log(tasks)
  useEffect(() => {
    var x = 5; //minutes interval
    var times = []; // time array
    var tt = 0; // start time
    var ap = ["AM", "PM"]; // AM-PM

    //loop to increment the time and push results in array
    for (var i = 0; tt < 24 * 60; i++) {
      var hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
      var mm = tt % 60; // getting minutes of the hour in 0-55 format
      times[i] =
        ("0" + (hh % 12)).slice(-2) +
        ":" +
        ("0" + mm).slice(-2) +
        ap[Math.floor(hh / 12)]; // pushing data in array in [00:00 - 12:00 AM/PM format]
      tt = tt + x;
    }
    SetTime(times);
  }, []);

  const SaveTask = (data) => {
    addTask(data);
    setData(data);
    setShowEdit(false);
  };
  const handleEdit = () => {
    setShowEdit(true);
  };


  return (
    <React.Fragment>
      {showEdit ? (
        <div className="Card">
            <Card>
              <Card.Header>Task</Card.Header>
              <Card.Body>
                <form onSubmit={handleSubmit(SaveTask)}>
                  <div className="description">
                    <Card.Text>Task Description</Card.Text>
                    <input type="text" {...register("name")}></input>
                  </div>
                  <div className="date">
                    <label>
                      Date
                      <div className="calender">
                        <div><input type="Date" {...register("date")}></input></div>
                      </div>
                    </label>
                    <label>
                      Time
                      <div className="time">
                        <select {...register("time")}>
                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                          {/* <option></option> */}
                          {time.map((k, v) => (
                            <option key={v}>{k}</option>
                          ))}
            
                        </select>
                      </div>
                    </label>
                  </div>
                  <button type="submit" className="d-flex justify-content-end" style={{backgroundColor:"#4AA96C",color:"white",borderRadius:"5px",paddingInline:"10px",paddingBlock:"5px"}}>Save</button>
                </form>
              </Card.Body>
            </Card>
        </div>
      ) : (
        <Card>
          <Card.Header>Task</Card.Header>
          <Card.Body>
            <div className="Label">
              <span onClick={handleEdit} style={{cursor:"pointer"}}><i className="fa fa-edit"></i></span>
              <label>{data.name}</label>
              <label>{data.date}</label>
              <label>{data.time}</label>
            </div>
          </Card.Body>
        </Card>
      )}
    </React.Fragment>
  );
}

export default Task;
