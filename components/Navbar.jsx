"use client";
import { MenuContext } from "@/context/MenuContext";
import Link from "next/link";
import React, { useContext, useState } from "react";

function Navbar() {
  const { toggle, open } = useContext(MenuContext);

  const [currentPath, setCurrentPath] = useState("/");

  const actionLinks = [
    { id: 1, label: "Dashboard", route: "/" },
    { id: 2, label: "Team", route: "/team" },
    { id: 3, label: "Project", route: "/project" },
    // { id: 4, label: "Calendar", route: "/calendar" },
    // { id: 5, label: "Report", route: "/report" },
  ];

  return (
    <div>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0 text-white">
                {/* <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                /> */}
                Brand Logo
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {actionLinks.map((item) => {
                    return (
                      <Link
                        key={item.id}
                        className={` ${
                          currentPath == item.route
                            ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                            : " text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                        }`}
                        href={item.route}
                        onClick={() => {
                          setCurrentPath(item.route);
                        }}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={toggle}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          className={`md:hidden  ${
            open ? "opacity-100 h-auto" : "opacity-0 h-0"
          }`}
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {actionLinks.map((item) => {
              return (
                <Link
                  key={item.id}
                  className={` ${
                    currentPath == item.route
                      ? "bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                      : " text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                  }`}
                  href={item.route}
                  onClick={() => {
                    setCurrentPath(item.route);
                    toggle();
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
