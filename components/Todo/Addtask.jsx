"use client";
import React, { useState } from "react";

function Addtask({ listTasks, addInlisttasks }) {
  const [Task, AddTask] = useState("");
  const onChangeHandler = (e) => {
    AddTask(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (Task) {
      addInlisttasks(Task);
    } else {
      alert("Please enter task...");
    }

    AddTask("");
  };

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Add task!!</h2>
        </div>

        <form
          onSubmit={onSubmitHandler}
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        >
          <div>
            <label htmlFor="teak" className="sr-only">
              Add task
            </label>

            <div className="relative">
              <input
                type="text"
                name="task"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter text..."
                onChange={onChangeHandler}
                value={Task}
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="inline-block rounded-lg bg-gray-800 px-5 py-3 text-sm font-medium text-white"
            >
              Add task
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Addtask;
