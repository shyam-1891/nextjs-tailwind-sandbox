import React from "react";

function Footer() {
  return (
    <>
      <footer className=" bg-gray-900 fixed w-full bottom-0">
        <div className="max-w-7xl mx-auto text-white px-4 py-6 sm:px-6 lg:px-8">
          <div className="mt-0 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p className="order-2 md:order-1 mt-8 md:mt-0">
              {" "}
              &copy; Beautiful Footer, 2021.{" "}
            </p>
            <div className="order-1 md:order-2">
              <span className="px-2">About us</span>
              <span className="px-2 border-l">Contact us</span>
              <span className="px-2 border-l">Privacy Policy</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
