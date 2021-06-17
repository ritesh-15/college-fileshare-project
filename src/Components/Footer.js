import React from "react";
import styled from "styled-components";
import CopyrightIcon from "@material-ui/icons/Copyright";

function Footer() {
  return (
    <Container>
      <Content>
        <Copy />
        <p>All Rights Reserved fileShare.inc 2020-2021</p>
      </Content>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  width: 100%;
  background-color: transparent;
  position: absolute;
  bottom: 0;
  padding: 5px 20px;
  display: flex;
  justify-content: flex-end;
`;

const Content = styled.div`
  color: grey;
  display: flex;
  align-items: center;

  p {
    margin-left: 5px;
    font-size: 0.8rem;
  }
`;

const Copy = styled(CopyrightIcon)`
  font-size: 1rem !important;
`;
