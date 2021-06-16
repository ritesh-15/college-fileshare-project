import { Close } from "@material-ui/icons";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectOpen, setClose } from "../fetures/emailSlice";
import axios from "../axios";
import { setMsgClose, setMsgOpen } from "../fetures/messageSlice";

function Email({ id }) {
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
          <input
            type="email"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder="From"
          />
          <input
            type="email"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="To"
          />
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
  transition: all 0.35s ease-in;
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

  input {
    margin-bottom: 10px;
    padding: 20px;
    outline: none;
    background-color: rgba(255, 219, 168, 0.2);
    border: none;
    border-bottom: 3px solid transparent;
    position: relative;
    font-size: 1rem;
    border-radius: 2px;
    color: #000;
    transition: all 250ms ease-in;
  }

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
      background-color: #ffb566;
      cursor: not-allowed;
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
    padding-left: 10px;
  }
`;

const CloseIcon = styled(Close)`
  color: grey;
  cursor: pointer !important;
`;
