import { useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Pages/Home";
import AllPagesNav from "./Pages/AllPagesNav";
import styled from "styled-components";
import vectorImage from "./images/Vector 2.png";

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
    </StyleDiv>
  );
}

const StyleDiv = styled.div`
  background-image: url(${vectorImage});
  background-size: cover;
  background-position: center;
  padding: 28px;
`;

export default App;
