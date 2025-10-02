import { Header } from "@/components";
import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";

export const Applayout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

const Main = styled.main`
  width: 100vw;
  margin-top: 70px;
`;
