import React from "react";
import { Global } from "@emotion/react";
import styled, { css } from "@emotion/styled";

import "bootstrap/dist/css/bootstrap.min.css";

import globalStyles from "../styles/globalStyles";
import Banner from "./Banner";
import StyledNavbar from "./StyledNavbar";
import Footer from "./Footer";
const Wrapper = styled("div")`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

export default function Layout({ children }) {
  const todayTime = new Date();

  return (
    <Wrapper>
      <Global styles={globalStyles} />
      <Banner date={todayTime} />
      <StyledNavbar />
      {children}
      <Footer year={todayTime} />
    </Wrapper>
  );
}
