import React from "react";
import styled from "styled-components";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";

function Message({ message, bgColor, error, hide }) {
  return (
    <Container
      style={
        hide
          ? { transform: "translateY(300%)" }
          : { transform: "translateY(0%)" }
      }
    >
      {error ? <ErrorIcon /> : <Check />}
      <p>{message}</p>
    </Container>
  );
}

export default Message;

const Container = styled.div`
  width: 100%;
  max-width: fit-content;
  z-index: 100;
  margin-left: 20px;
  display: flex;
  align-items: center;
  padding: 10px 10px;
  border-radius: 8px;
  background-color: orange;
  color: #fff;
  font-weight: 600;
  transition: all 250ms ease-in;
  position: fixed;
  left: 50%;

  p {
    margin-left: 10px;
    letter-spacing: 1.1px;
  }
`;

const Check = styled(CheckCircleIcon)``;
