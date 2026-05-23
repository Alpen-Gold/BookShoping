import { Outlet } from "react-router-dom";
import styled from "styled-components";

function AllPagesNav() {
  return (
    <Style>
      <h1>NavMenu</h1>
    </Style>
  );
}

export default AllPagesNav;

const Style = styled.div`
  h1 {
    padding: 0;
    margin: 0;
  }
`;
