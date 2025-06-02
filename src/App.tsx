import React from "react";
import "./App.css";
import "./styles/vars.css";
import "./styles/fonts.css";
import { Nav, Chat, KeepAliveOutlet } from "./components";
import { Outlet } from "react-router";
import { useGLTF } from "@react-three/drei";
import { useUnit } from "effector-react";
import { setGeometry, setMaterial } from "./store/3d";

function App() {
    return (
        <div className={"container"}>
            <Outlet />
            <div className="nav-side">
                <Nav />
                <Chat />
            </div>
        </div>
    );
}

export default App;
