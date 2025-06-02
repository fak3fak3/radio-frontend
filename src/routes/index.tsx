import React from "react";
import { createBrowserRouter } from "react-router";
import App from "../App";
import MainPage from "../pages/Main";
import AboutPage from "../pages/About";
import ArchivePage from "../pages/Archive";

type NavRoute = {
    to: string;
    label: string;
};

const navRoutes: NavRoute[] = [
    {
        to: "/",
        label: "Main",
    },
    {
        to: "/archive",
        label: "Archive",
    },
    {
        to: "/about",
        label: "About",
    },
];

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            { index: true, Component: MainPage },
            { path: "about", Component: AboutPage },
            { path: "archive", Component: ArchivePage },
        ],
    },
]);

export { navRoutes, router };
export type { NavRoute };
