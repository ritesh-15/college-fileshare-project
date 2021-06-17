import React from "react";
import styled from "styled-components";

function Use() {
  return (
    <Container>
      <h1>how to use</h1>
    </Container>
  );
}

export default Use;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 70px);
  position: relative;
  padding: 0 20px;

  &::before {
    height: 100%;
    position: absolute;
    background: url("images/wave.svg") no-repeat top/cover;
    background-position: top;
    object-fit: contain;
    left: 0;
    right: 0;
    content: "";
    z-index: -10;
    top: 0;
    opacity: 095;
  }
`;
