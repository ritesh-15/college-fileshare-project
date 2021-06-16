import React from "react";
import styled from "styled-components";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";

function Message({ message, bgColor, error, hide }) {
  return (
    <Container
      style={hide ? { transform: "scale(0)" } : { transform: "scale(1)" }}
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
  left: 0;

  p {
    margin-left: 10px;
    letter-spacing: 1.1px;
  }
`;

const Check = styled(CheckCircleIcon)``;