import React from "react";

function Deletetask({ Closepopup, DeleteFromtasklist }) {
  return (
    <>
      <div className="rounded-lg bg-white p-8 shadow-2xl absolute left-2/4 top-2/4 transform -translate-x-1/2 -translate-y-1/2 main-modal animated fadeIn faster hidden z-10">
        <h2 className="text-lg font-bold">
          Are you sure you want to delete this?
        </h2>

        <div className="mt-4 flex gap-2">
          <button
            type="button"
            className="rounded bg-green-50 px-4 py-2 text-sm font-medium text-green-600"
            onClick={ () => DeleteFromtasklist() }
          >
            Yes, I'm sure
          </button>

          <button
            type="button"
            className="modal-close rounded bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600"
            onClick={ () => Closepopup() }
          >
            No, go back
          </button>
        </div>
      </div>
    </>
  );
}

export default Deletetask;
