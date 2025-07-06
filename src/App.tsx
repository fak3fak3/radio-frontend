import React from "react";
import "./styles/fonts.css";
import { Nav } from "./components";
import { Outlet } from "react-router";

function App() {
    return (
        <div className="bg-blue-bg h-full">
            <Nav />
            <div className="pt-15  overflow-x-hidden">
                <Outlet />
            </div>
        </div>
    );
}

export default App;
