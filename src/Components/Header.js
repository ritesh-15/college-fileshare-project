import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <Left>
        <img src="https://cdn.iconscout.com/icon/free/png-512/my-files-1-461722.png" />
        <h4>fileShare</h4>
      </Left>
      <Right>
        <a>Home</a>
        <a>How to use</a>
        <a>Contact Us</a>
      </Right>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  width: 100%;
  padding: 0 10px;
  background-color: transparent;
  z-index: 100;
  position: relative;
  display: flex;
  align-items: center;
  height: 70px;
  justify-content: space-between;
  position: fixed;
  top: 0;
`;

const Left = styled.div`
  display: flex;
  align-items: center;

  h4 {
    margin-left: 15px;
    font-size: 1.3rem;
    font-weight: 600;
    letter-spacing: 1.1px;
    color: #fff;
    transition: all 200ms ease-in;
    cursor: pointer;
  }

  img {
    width: 45px;
    object-fit: contain;
    cursor: pointer;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;

  a {
    margin-right: 10px;
    font-size: 1.05rem;
    padding: 5px 20px;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    text-transform: capitalize;
    position: relative;
    display: flex;
    justify-content: center;

    font-weight: 400;
    transition: all 200ms ease-in;
    word-spacing: 1.5px;

    &::before {
      height: 2px;
      background-color: #fff;
      position: absolute;
      bottom: 0;
      width: 100%;
      content: "";
      transform: scaleX(0);
      transition: all 200ms ease-in;
    }

    &:hover {
      &::before {
        transform: scaleX(1);
      }
    }
  }
`;
