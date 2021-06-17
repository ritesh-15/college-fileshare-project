import { Close } from "@material-ui/icons";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectOpen, setClose } from "../fetures/emailSlice";
import axios from "../axios";
import { setMsgClose, setMsgOpen } from "../fetures/messageSlice";

function Email({ id, clear }) {
  const dispatch = useDispatch();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const open = useSelector(selectOpen);
  const [sending, setSending] = useState(false);

  const sendMail = (e) => {
    setSending(true);
    e.preventDefault();
    const data = {
      from: from,
      to: to,
      uid: id.split("/").splice(-1, 1)[0],
    };
    axios
      .post("/send/mail", data)
      .then((res) => {
        dispatch(
          setMsgOpen({
            msg: "Email sent !",
            bgColor: "green",
            error: false,
          })
        );

        setFrom("");
        setTo("");

        clear();

        setTimeout(() => {
          dispatch(setMsgClose());
        }, 2000);

        setTimeout(() => {
          dispatch(setClose());
        }, 2000);
        setSending(false);
      })
      .catch((err) => {
        dispatch(
          setMsgOpen({
            msg: "Some error occured !",
            bgColor: "red",
            error: true,
          })
        );

        setTimeout(() => {
          dispatch(setMsgClose());
        }, 2000);

        setSending(false);
      });
  };

  return (
    <Container
      style={
        open
          ? { transform: "scale(1)", zIndex: "10" }
          : { transform: "scale(0)", zIndex: "-1" }
      }
    >
      <Main>
        <Top>
          <h4>Send file via mail</h4>
          <CloseIcon onClick={(e) => dispatch(setClose())} />
        </Top>
        <Info onSubmit={(e) => sendMail(e)}>
          <FormDiv>
            <input
              value={from}
              onChange={(e) => {
                setFrom(e.target.value);
              }}
              id="from"
              type="email"
              autoComplete="off"
              required
            />
            <label htmlFor="from">
              <span>From</span>
            </label>
          </FormDiv>
          <FormDiv>
            <input
              value={to}
              onChange={(e) => setTo(e.target.value)}
              id="to"
              type="email"
              autoComplete="off"
              required
            />
            <label htmlFor="to">
              <span>To</span>
            </label>
          </FormDiv>
          <button
            type="submit"
            onClick={(e) => sendMail(e)}
            disabled={!from || !to || sending ? true : false}
          >
            {sending ? "Sending Mail..." : "Send Mail"}
          </button>
        </Info>
      </Main>
    </Container>
  );
}

export default Email;

const Container = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  margin-top: 40px;
  position: absolute;
  z-index: -1;
  transition: all 0.3s ease-in;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 100%;
  max-width: 500px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 2px 8px 18px 1px rgba(145, 145, 145, 0.75);
`;

const Info = styled.form`
  display: flex;
  flex-direction: column;

  button {
    padding: 8px 20px;
    margin-top: 10px;
    border: none;
    outline: none;
    background-color: orange;
    color: #fff;
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
    border: 1px solid transparent;
    transition: all 250ms ease-in;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;

      &:hover {
        background-color: orange;
        color: #fff;
      }
    }

    &:hover {
      background-color: #fff;
      color: orange;
      border-color: orange;
    }
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  h4 {
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 20px;
    color: grey;
    margin: 0;
  }
`;

const CloseIcon = styled(Close)`
  color: grey;
  cursor: pointer !important;
`;

const FormDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 20px 0;

  input {
    width: 100%;
    height: 100%;
    border: none;
    padding-top: 20px;
    outline: none;
    font-size: 1rem;

    &:focus + label span,
    &:valid + label span {
      transform: translateY(-150%);
      font-size: 1rem;
      color: orange;
    }

    &:focus + label::after,
    &:valid + label::after {
      transform: scaleX(1);
    }
  }

  label {
    position: absolute;
    bottom: 0;
    left: 0;
    pointer-events: none;
    height: 100%;
    border-bottom: 1px solid black;
    width: 100%;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border-bottom: 3px solid orange;
      left: 0;
      transform: scaleX(0);
      transform-origin: center;
      transition: all 0.5s ease;
      bottom: -1px;
    }

    span {
      position: absolute;
      bottom: 0;
      left: 0;
      transition: all 0.3s ease;
    }
  }
`;
