import React from "react";
import Navbar from "./Navbar";
import MenuContextProvider from "@/context/MenuContext";
import Footer from "./Footer";

function Mainlayout({ children }) {
  return (
    <div className="min-h-full">
      <MenuContextProvider>
        <Navbar />
      </MenuContextProvider>

      <div className="bottom_section_wrapper min-h-[800px] pb-[120px]">{children}</div>

      <Footer></Footer>
    </div>
  );
}

export default Mainlayout;
