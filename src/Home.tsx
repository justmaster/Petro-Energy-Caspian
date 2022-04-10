import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  Landing,
  About,
  Products,
  Partners,
  Contacts,
  Footer
} from "./components/desktop";
import styled from "styled-components";

const Wrapper = styled.div`
  overflow: hidden;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

export const Home = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    !id && history.push("/en/home");
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <Landing />
      <About />
      <Partners />
      <Products />
      <Contacts />
      <Footer />
    </Wrapper>
  );
};
