"use client";
import Addtask from "./Addtask";
import Deletetask from "./Deletetask";
import ListAlltasks from "./ListAlltasks";

import React, { useEffect, useState } from "react";
import Updatetask from "./Updatetask";

function Todotasks() {
  const [listTasks, setListTasks] = useState([]);
  const [delTask, setDelTask] = useState([]);
  const [updateTask, setUpdateTask] = useState([]);

  const AddInlisttasks = (task) => {
    var currentdate = new Date();
    const newElement = {
      id: Math.floor(Math.random() * 1000) + 1,
      name: task,
      time: currentdate,
      status: 0,
    };
    const tempList = listTasks;
    tempList.push(newElement);
    localStorage.setItem("TaskList", JSON.stringify(tempList));
    setListTasks([...tempList]);
  };

  // ####################
  // Delete Operations
  // ####################
  const deletePopup = (task) => {
    //Open popup
    setDelTask(task);
    const modal = document.querySelector(".main-modal");
    const overlaywrapper = document.querySelector(".overlaywrapper");

    modal.classList.remove("fadeOut");
    modal.classList.add("fadeIn");
    modal.style.display = "block";
    overlaywrapper.style.display = "block";
  };
  const Closepopup = () => {
    const modal = document.querySelector(".main-modal");
    const updatemodal = document.querySelector(".update-modal");
    const overlaywrapper = document.querySelector(".overlaywrapper");
    setDelTask("");
    modal.classList.remove("fadeIn");
    modal.classList.add("fadeOut");
    updatemodal.classList.remove("fadeIn");
    updatemodal.classList.add("fadeOut");

    modal.style.display = "none";
    updatemodal.style.display = "none";
    overlaywrapper.style.display = "none";
  };
  const DeleteFromtasklist = () => {
    const secondRemoved = listTasks.filter((item) => item.id !== delTask.id);
    localStorage.setItem("TaskList", JSON.stringify(secondRemoved));
    setListTasks([...secondRemoved]);
    Closepopup();
  };

  // ####################
  // Update Operation
  // ####################
  const editPopup = (task) => {
    const updatemodal = document.querySelector(".update-modal");
    const overlaywrapper = document.querySelector(".overlaywrapper");

    updatemodal.classList.remove("fadeOut");
    updatemodal.classList.add("fadeIn");
    updatemodal.style.display = "block";
    overlaywrapper.style.display = "block";

    setUpdateTask(task.id);
    document.getElementsByName("updatetasktextbox")[0].value = task.name;
  };

  const Updatetasklist = (updatedtext) => {
    var currentdate = new Date();

    if (updatedtext) {
      const newState = listTasks.map((obj) => {
        if (obj.id === updateTask) {
          return { ...obj, name: updatedtext, time: currentdate };
        }
        return obj;
      });

      localStorage.setItem("TaskList", JSON.stringify(newState));
      setListTasks([...newState]);
    }
    Closepopup();
  };

  useEffect(() => {
    var storedNames = JSON.parse(localStorage.getItem("TaskList"));
    if (storedNames) {
      setListTasks([...storedNames]);
    }
  }, []);

  return (
    <>
      <Addtask listTasks={listTasks} addInlisttasks={AddInlisttasks}></Addtask>
      <br />
      <ListAlltasks
        listTasks={listTasks}
        DeleteFromtasklist={DeleteFromtasklist}
        deletePopup={deletePopup}
        editPopup={editPopup}
      ></ListAlltasks>
      <Deletetask
        DeleteFromtasklist={DeleteFromtasklist}
        Closepopup={Closepopup}
      ></Deletetask>
      <Updatetask
        Closepopup={Closepopup}
        Updatetasklist={Updatetasklist}
        updateTask={updateTask}
      ></Updatetask>
      <div className="overlaywrapper hidden"></div>
    </>
  );
}

export default Todotasks;
