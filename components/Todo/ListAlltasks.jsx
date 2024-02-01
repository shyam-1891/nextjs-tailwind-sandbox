"use client";
import React, { useState } from "react";
import Deletetask from "./Deletetask";

function ListAlltasks({ listTasks, deletePopup, editPopup }) {
  // For todays date;
  Date.prototype.today = function () {
    return (
      (this.getDate() < 10 ? "0" : "") +
      this.getDate() +
      "/" +
      (this.getMonth() + 1 < 10 ? "0" : "") +
      (this.getMonth() + 1) +
      "/" +
      this.getFullYear()
    );
  };

  // For the time now
  Date.prototype.timeNow = function () {
    return (
      (this.getHours() < 10 ? "0" : "") +
      this.getHours() +
      ":" +
      (this.getMinutes() < 10 ? "0" : "") +
      this.getMinutes() +
      ":" +
      (this.getSeconds() < 10 ? "0" : "") +
      this.getSeconds()
    );
  };

  const getCurrentTime = (time) => {
    var newDate = new Date(time);
    var datetime = newDate.today() + " @ " + newDate.timeNow();
    return datetime;
  };

  return (
    <>
      <span className="flex items-center">
        <span className="h-px flex-1 bg-black"></span>
        <span className="shrink-0 px-6">All tasks</span>
        <span className="h-px flex-1 bg-black"></span>
      </span>
      <br />

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="text-left whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Task
              </th>
              <th className="text-left whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Date/Time
              </th>
              <th className="text-left whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {listTasks &&
              listTasks.map((item) => {
                return (
                  <tr className="odd:bg-gray-50" key={item.id}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {item.name}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {getCurrentTime(item.time)}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <span className="inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm">
                        <button
                          className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative"
                          onClick={() => editPopup(item)}
                        >
                          Edit
                        </button>

                        <button
                          className="inline-block px-4 py-2 text-sm font-medium bg-red-400 text-white hover:bg-red-600 focus:relative"
                          onClick={() => deletePopup(item)}
                        >
                          Delete
                        </button>
                      </span>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ListAlltasks;
