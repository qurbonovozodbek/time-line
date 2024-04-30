import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import ColorsTimeline from "./Timeline";


function Layout() {
  return (
    <div className="container">
      {/* <div className="time-line">
        <ColorsTimeline/>
      </div> */}
      <section>
        <h1>Habarning ko'rinishi</h1>
        <h4>Shablon</h4>
        <div className="shablon">
          <span>Shablon</span>
          <span><FaAngleDown/> </span>
        </div>
        <div className="info">
          <h4>Habar</h4>
          <button> <CiCirclePlus/>  Shablon holatida saqlash</button>
        </div>
        <div className="links">
          <NavLink to="/">O'zbekcha</NavLink>
          <NavLink to="/Rus">Русский</NavLink>
          <NavLink to="/English">English</NavLink>
        </div>
      </section>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default Layout;
