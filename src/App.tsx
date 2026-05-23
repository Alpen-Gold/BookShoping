import { useState } from "react";
import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
} from "react-router-dom";
import styled from "styled-components";
import Home from "./Pages/Home";
import AllPagesNav from "./Pages/AllPagesNav";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />}></Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

function RootLayout() {
  return (
    <StyleDiv>
      <AllPagesNav />
      <Outlet />
    </StyleDiv>
  );
}

export default App;

const StyleDiv = styled.div`
  background: papayawhip;
  min-height: 100vh;
`;
