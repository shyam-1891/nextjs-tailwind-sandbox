import React, { useEffect, useState } from "react";

function Updatetask({ Closepopup, Updatetasklist, updateTask }) {
  const [task, setTask] = useState("");

  const onChangeHandler = (e) => {
    setTask(e.target.value);
  };
  return (
    <>
      <div className="rounded-lg bg-white p-8 shadow-2xl absolute left-2/4 top-2/4 transform -translate-x-1/2 -translate-y-1/2 update-modal animated fadeIn faster hidden z-10">
        <h2 className="text-lg font-bold">Please update the task details...</h2>

        <div className="relative mt-2 text-sm text-gray-500">
          <input
            type="text"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter text..."
            onChange={onChangeHandler}
            id="updatetasktextbox"
            name="updatetasktextbox"
          />
        </div>

        <div className="mt-4 flex gap-2">
          <button
            type="button"
            className="rounded bg-green-50 px-4 py-2 text-sm font-medium text-green-600"
            onClick={() => Updatetasklist(task)}
          >
            Update
          </button>

          <button
            type="button"
            className="modal-close rounded bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600"
            onClick={() => Closepopup()}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}

export default Updatetask;
