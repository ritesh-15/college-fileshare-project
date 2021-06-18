import React from "react";
import styled from "styled-components";

function Use() {
  return (
    <CenterMain>
      <Container>
        <h1>How to use fileShare ?</h1>
      </Container>
      <Info>
        <Content>
          <h2>What is fileShare ?</h2>
          <p>
            File share is simple tool which is used for sharing files with
            anynoe within a second and easly.
          </p>
          <h2>Why to use fileShare ?</h2>
          <p>
            With fileShare file transfer is become so easy and convinient. You
            can literlly drag and drop the file to upload . Within a second your
            file get uploaded and then you can share file link with anyone and
            anywhere
          </p>
          <h2>How to upload the file to the fileShare ?</h2>
          <p>
            <strong>Step I - </strong>First of all go to the fileShare website{" "}
          </p>
          <img src="images/home.png" />
          <p>
            <strong>Step II - </strong>Click on file icon or drag the file and
            drop in the box
          </p>
          <img src="images/file.png" />
          <p>
            <strong>Step III - </strong>Select the file your want to upload{" "}
          </p>
          <img src="images/progress.png" />
          <p>
            <strong>Step IV - </strong>You will see the progress of file upload{" "}
          </p>
          <img src="images/link.png" />
          <p>
            <strong>Step V - </strong>Once file is uploaded you will get the
            download link which you can share with anyone or you can send file
            using email also.
          </p>
        </Content>
      </Info>
    </CenterMain>
  );
}

export default Use;

const CenterMain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  min-height: 70vh;
  height: 100%;
  position: relative;
  padding-top: 150px;
  display: flex;
  flex-direction: column;

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

  h1 {
    font-size: 2.5rem;
    text-align: left;
    color: #fff;
    width: fit-content;
    position: absolute;
    padding-left: 8%;

    @media (max-width: 1024px) {
      padding-left: 2%;
    }
  }

  @media (max-width: 426px) {
    min-height: 90vh;

    h1 {
      font-size: 2.05rem !important;
      padding-left: 20px;
    }
  }
`;

const Info = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  margin-bottom: 50px;
  margin-top: -150px;

  @media (max-width: 426px) {
    margin-top: -210px;
  }
`;

const Content = styled.div`
  background-color: #fff;

  padding: 20px;
  margin: 20px 0;
  overflow-y: scroll;
  max-width: 1300px;
  width: 100%;
  border-radius: 6px;

  &::-webkit-scrollbar {
    display: none;
  }

  h2 {
    font-size: 1.5rem;
    margin: 10px 0;
    line-height: 2.5rem;
    opacity: 1;
    font-weight: 600;
    color: #212529;
    letter-spacing: 1.01px;
  }

  p {
    margin-top: 10px;
    letter-spacing: 1.02px;
    font-size: 1.3rem;
    line-height: 1.8rem;
  }

  img {
    width: 100%;
    object-fit: contain;
    margin: 10px 0;
    border-radius: 6px;
    height: 100%;
  }
`;
