// import React from 'react';

import { Outlet } from "react-router-dom";
import Navbar from "../sharedComponent/Navbar";
import Footer from "../sharedComponent/Footer";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;