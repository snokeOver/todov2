import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DisplayTodos from "./components/DisplayTodos.jsx";
import TodoInput from "./components/TodoInput.jsx";
import { SettingHome, SettingPost } from "./store/TodoStore.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <DisplayTodos />,
        loader: SettingHome,
      },
      {
        path: "/create-post",
        element: <TodoInput />,
        loader: SettingPost,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
