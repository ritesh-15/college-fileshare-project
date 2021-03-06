import axios from "../axios";
import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setCloseMsg, setOpenMsg } from "../fetures/alertSlice";
import { setMsgOpen } from "../fetures/messageSlice";
import {
  CircularProgress,
  FormControlLabel,
  RadioGroup,
} from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import "./Contact.css";
import { useHistory } from "react-router-dom";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const [sending, setSending] = useState(false);
  const history = useHistory();

  const clear = () => {
    setName("");
    setEmail("");
    setQuery("");
    setMessage("");
  };

  const alertMessage = (msg, error, color) => {
    dispatch(setOpenMsg());
    dispatch(
      setMsgOpen({
        msg: msg,
        error: error,
        bgColor: color,
      })
    );
    setTimeout(() => {
      dispatch(setCloseMsg());
    }, 2000);
  };

  const send = () => {
    setSending(true);
    if (query) {
      const data = {
        name: name,
        email: email,
        queryType: query,
        message: message,
        time: Date.now(),
      };
      axios
        .post("/new/contact", data)
        .then((res) => {
          setSending(false);
          console.log(res.data);
          clear();
          alertMessage("Thank you for reaching us !", false, "green");
          setTimeout(() => {
            history.push("/");
          }, 2200);
        })
        .catch((err) => {
          alertMessage("Something went wrong !", true, "red");
          setSending(false);
        });
    } else {
      alertMessage("All fields are mandatory !", true, "orange");
      setSending(false);
    }
  };

  return (
    <Container>
      <h2>Any complaint ?</h2>
      <ContainerTwo>
        <Content>
          <h3>Contact Us</h3>
          <Info>
            <FormDiv>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                type="name"
                autoComplete="off"
                required
              />
              <label htmlFor="name">
                <span>Name</span>
              </label>
            </FormDiv>
            <FormDiv>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="email"
                autoComplete="off"
                required
              />
              <label htmlFor="email">
                <span>Email</span>
              </label>
            </FormDiv>
            <p>Select complent type</p>
            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                value="query"
                control={<Radio color="primary" />}
                label="Query"
                onChange={(e) => setQuery(e.target.value)}
              />
              <FormControlLabel
                value="issue"
                control={<Radio color="primary" />}
                label="Issue"
                onChange={(e) => setQuery(e.target.value)}
              />
              <FormControlLabel
                value="other"
                control={<Radio color="primary" />}
                label="Other"
                onChange={(e) => setQuery(e.target.value)}
              />
            </RadioGroup>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
            />
            <button
              disabled={
                !name || !email || !message || !query || sending ? true : false
              }
              onClick={send}
            >
              {sending ? <ProgressCircle size={20} /> : "Send"}
            </button>
          </Info>
        </Content>
        <img src="images/contact.svg" />
      </ContainerTwo>
    </Container>
  );
}

export default Contact;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 70px);
  position: relative;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: space-between;

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

  h2 {
    text-align: center;
    font-size: 2.5rem;
    text-transform: capitalize;
    font-weight: 600;
    font-family: sans-serif;
    letter-spacing: 1.1px;
    color: #fff;

    @media (max-width: 425px) {
      font-size: 2rem;
    }
  }
`;

const ContainerTwo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  img {
    height: 350px;
    position: absolute;
    right: 0;
    z-index: -1;

    @media screen and (max-width: 1024px) {
      height: 280px;
    }
    @media screen and (max-width: 1022px) {
      display: none;
    }
  }

  @media screen and (max-width: 1022px) {
    justify-content: center;
  }
`;

const Content = styled.div`
  width: 100%;
  background-color: #fff;
  height: 100%;
  max-width: 500px;
  padding: 20px;
  border-radius: 8px;
  flex: 1;
  box-shadow: 2px 8px 18px 1px rgba(145, 145, 145, 0.75);

  h3 {
    text-align: center;
    font-size: 1.3rem;
    margin-bottom: 20px;
    color: grey;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: grey;
    margin: 10px 0;
  }

  select {
    width: 100%;
    height: 50px;
    border: none;
    border-bottom: 1px solid black;
    font-size: 1rem;
    color: grey;
    outline: none;

    option {
      padding: 10px;
      font-size: 1rem;
      border: none;
      outline: none;

      &:hover {
        background-color: orange;
      }
    }
  }

  textarea {
    height: 150px;
    margin-top: 20px;
    border: 1px solid transparent;
    outline: none;
    font-size: 1rem;
    resize: none;
    border-radius: 6px;
    color: grey;
  }

  button {
    width: 100%;
    padding: 8px 20px;
    border: 1px solid transparent;
    background-color: orange;
    border-radius: 8px;
    font-size: 1rem;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
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
    color: grey;
    padding-bottom: 5px;

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
    color: grey;

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

const ProgressCircle = styled(CircularProgress)`
  font-size: 1px !important;
  color: #fff !important;
`;
