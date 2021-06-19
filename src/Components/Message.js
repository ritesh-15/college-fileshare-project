import React from "react";
import styled from "styled-components";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";

function Message(props) {
  console.log(`"${props.bgColor}"`);
  return (
    <Main
      style={
        props.hide
          ? { transform: "translateY(-150%)" }
          : { transform: "translateY(0)" }
      }
    >
      <Container
        style={
          props.bgColor
            ? { backgroundColor: `${props.bgColor}` }
            : { backgroundColor: "orange" }
        }
      >
        {props.error ? <ErrorIcon /> : <Check />}
        <p>{props.message}</p>
      </Container>
    </Main>
  );
}

export default Message;

const Main = styled.div`
  transition: all 250ms ease-in;
  position: fixed;
  top: 10px;
  left: 50%;
  margin-left: -100px;
  width: 100%;
  transform-origin: center;
  z-index: 100;
`;

const Container = styled.div`
  width: 100%;
  max-width: fit-content;
  display: flex;
  align-items: center;
  padding: 10px 10px;
  border-radius: 8px;
  background-color: "orange";
  color: #fff;
  font-weight: 600;

  p {
    margin-left: 10px;
    letter-spacing: 1.1px;
  }
`;

const Check = styled(CheckCircleIcon)``;
