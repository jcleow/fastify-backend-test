import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import Summary from "./routes/Summary";
import ClientManagement from "./routes/ClientManagement";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Navigate to="/summary" replace />,
            },
            {
                path: "summary",
                element: <Summary />,
            },
            {
                path: "client_management",
                element: <ClientManagement />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
