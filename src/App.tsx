import "./App.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Navigate,
} from "react-router-dom";

import Home from "./Pages/Home";
import Search from "./Pages/Search";
import MyShelf from "./Pages/MyShelf";
import Contribute from "./Pages/Contribute";

import Register from "./Pages/authorisation/Register";
import Login from "./Pages/authorisation/Login";

import AllPagesNav from "./Pages/AllPagesNav";
import styled from "styled-components";
import vectorImage from "./images/Vector 2.png";

/* -------------------- AUTH CHECK -------------------- */
const getToken = () => {
  const token = localStorage.getItem("token");
  if (!token || token === "null" || token === "undefined") return null;
  return token;
};

/* -------------------- PROTECTED ROUTE -------------------- */
const ProtectedRoute = ({ children }) => {
  const token = getToken();

  console.log("token", token);

  if (!token) {
    return <Navigate to="/register" replace />;
  }

  return children;
};

/* -------------------- PUBLIC ROUTE -------------------- */
const PublicRoute = ({ children }) => {
  const token = getToken();

  if (token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

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
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* AUTH PAGES (ONLY FOR NOT LOGGED USERS) */}
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

        {/* MAIN APP */}
        <Route path="/" element={<RootLayout />}>
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route path="/search" element={<Search />} />

          <Route
            path="/my-shelf"
            element={
              <ProtectedRoute>
                <MyShelf />
              </ProtectedRoute>
            }
          />

          <Route
            path="/contribute"
            element={
              <ProtectedRoute>
                <Contribute />
              </ProtectedRoute>
            }
          />
        </Route>

        {/* fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

/* -------------------- STYLES -------------------- */
const StyleDiv = styled.div`
  background-image: url(${vectorImage});
  background-size: cover;
  min-height: 100vh;
  padding: 20px;
`;

export default App;
