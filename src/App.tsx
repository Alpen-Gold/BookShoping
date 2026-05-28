import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Pages/Home";
import AllPagesNav from "./Pages/AllPagesNav";
import styled from "styled-components";
import vectorImage from "./images/Vector 2.jpg";
import Search from "./Pages/Search";
import MyShelf from "./Pages/MyShelf";
import Contribute from "./Pages/Contribute";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/my-shelf" element={<MyShelf />}></Route>
          <Route path="/contribute" element={<Contribute />}></Route>
        </Route>
      </>
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
  padding: 28px;
`;

export default App;
