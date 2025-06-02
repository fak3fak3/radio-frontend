import React from "react";
import ReactDOM from "react-dom/client";
// App.tsx (или index.tsx)
import { createBrowserRouter, RouterProvider } from "react-router";
import { router } from "./routes";
import "./styles/global.css";

const rootElement = document.getElementById("root");
if (!rootElement) {
    throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
