import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Close, Menu } from "@material-ui/icons";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Left>
        {/* <img src="https://cdn.iconscout.com/icon/free/png-512/my-files-1-461722.png" /> */}
        <h4>fileShare</h4>
      </Left>
      <Right>
        <Link to="/" style={{ textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/use" style={{ textDecoration: "none" }}>
          How to use
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          Contact Us
        </Link>
      </Right>
      <MenuIcon onClick={(e) => setOpen(true)} />
      <MobileNav
        style={open ? { transform: "scaleX(1)" } : { transform: "scale(0)" }}
      >
        <TopMobileNav>
          <Cross onClick={(e) => setOpen(false)} />
        </TopMobileNav>
        <NavContent>
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
          <Link to="/use" style={{ textDecoration: "none" }}>
            How to use
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            Contact Us
          </Link>
        </NavContent>
      </MobileNav>
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
    font-size: 1.5rem;
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

  @media (max-width: 584px) {
    display: none;
  }
`;

const MobileNav = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #fff;
  width: 300px;
  padding: 20px;
  z-index: 100;
  transform: scaleX(0);
  transform-origin: right top;
  transition: all 0.3s ease;

  @media (max-width: 425px) {
    width: 100%;
  }
`;

const NavContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;

  a {
    margin: 20px;
    color: #000;
    position: relative;
    width: fit-content;
    text-align: left;

    &::before {
      height: 2px;
      background-color: orange;
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

const Cross = styled(Close)`
  cursor: pointer;
  margin-left: auto;
  position: absolute;
  right: 0;
`;

const TopMobileNav = styled.div`
  width: 100%;
  margin-left: auto;
  position: relative;
`;

const MenuIcon = styled(Menu)`
  font-size: 2rem !important;
  color: #fff !important;
  display: none !important;

  @media (max-width: 584px) {
    display: block !important;
  }
`;
