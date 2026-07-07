import "./App.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./Pages/Home";
import Search from "./Pages/Search";
import MyShelf from "./Pages/MyShelf";
import Contribute from "./Pages/Contribute";

import Register from "./Pages/authorisation/Register";
import Login from "./Pages/authorisation/Login";

import AllPagesNav from "./Pages/AllPages";
import styled from "styled-components";
import vectorImage from "./images/Vector 2.png";
import { useState } from "react";
import { ConfigProvider, theme } from "antd";
import AllPagesAdmin from "./admin/Pages/AllPagesAdmin";
import DashboardAdmin from "./admin/Pages/Dashboard";
import { ProtectedRoute, PublicRoute } from "./routes/Protection";

/* -------------------- LAYOUT -------------------- */
function RootLayout() {
  return (
    <StyleDiv>
      <AllPagesNav />
    </StyleDiv>
  );
}

/* -------------------- ROUTER -------------------- */

function App() {
  const [themeMode, _setThemeMode] = useState("light");
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* auth */}
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        {/* main */}
        <Route path="/" element={<RootLayout />}>
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="search" element={<Search />} />
          <Route
            path="my-shelf"
            element={
              <ProtectedRoute>
                <MyShelf />
              </ProtectedRoute>
            }
          />
          <Route
            path="contribute"
            element={
              <ProtectedRoute>
                <Contribute />
              </ProtectedRoute>
            }
          />
        </Route>

        {/* admin */}
        <Route path="/admin" element={<AllPagesAdmin />}>
          <Route index element={<DashboardAdmin />} />
        </Route>
      </>
    )
  );

  return (
    <ConfigProvider
      theme={{
        algorithm:
          themeMode === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

/* -------------------- STYLES -------------------- */
const StyleDiv = styled.div`
  background-image: url(${vectorImage});
  background-size: cover;
  min-height: 100vh;
  padding: 20px;
`;

export default App;
