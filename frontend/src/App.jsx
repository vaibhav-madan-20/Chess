import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React, { Suspense } from "react";

import Play from "./components/Play";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./utils/store";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import PlayLocal from "./components/PlayLocal";
// import ChessBoardTest from "./components/ChessBoardTest";
const Stockfish = React.lazy(() => import("./components/Stockfish"));

export default function App() {
  const AppLayout = () => {
    return (
      <div>
        <Header />
        <Outlet />
      </div>
    );
  };
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/play",
          element: <Play />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/stockfish",
          element: (
            <Suspense fallback={<div>Loading....</div>}>
              <Stockfish />
            </Suspense>
          ),
        },
        {
          path: "/local",
          element: <PlayLocal />,
        },
        // {
        //   path: "/localtest",
        //   element: <ChessBoardTest />,
        // },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}
