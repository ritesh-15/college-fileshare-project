import React, { useState } from "react";
import styled from "styled-components";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import { useDispatch, useSelector } from "react-redux";
import { selectOpen, setOpen } from "../fetures/emailSlice";
import Email from "./Email";
import axios from "../axios";
import FormData from "form-data";
import { setMsgClose, setMsgOpen } from "../fetures/messageSlice";
import { CheckCircle } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";

function Content() {
  const [link, setLink] = useState("");
  const open = useSelector(selectOpen);
  const dispatch = useDispatch();
  const [file, setFile] = useState("");
  const [over, setOver] = useState(false);
  const [loading, setLoading] = useState(0);
  const [copy, setCopy] = useState(false);

  const copyText = () => {
    let timer;
    navigator.clipboard.writeText(link);
    setCopy(true);

    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };

  const handleChange = (e) => {
    let f = e.target.files[0];
    if (f === null || f === undefined) {
      alert("Please select file");
    } else {
      setFile(f);
      uploadFile(f);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setOver(true);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (!e.dataTransfer.files[0]) {
      alert("No file found");
    } else {
      setFile(e.dataTransfer.files[0]);
      uploadFile(e.dataTransfer.files[0]);
    }
  };

  const handleLeave = (e) => {
    e.preventDefault();
    setOver(false);
  };

  const uploadFile = (f) => {
    let formData = new FormData();
    formData.append("file", f);
    if (!formData || formData === null || formData === undefined) {
      alert("No file found !");
    } else {
      axios
        .post("/upload/file", formData, {
          onUploadProgress: (ProgressEvent) => {
            const { loaded, total } = ProgressEvent;
            let percentage = Math.round((loaded / total) * 100);
            setLoading(percentage);
          },
        })
        .then((res) => {
          setLink(res.data.file);
          setLoading(100);
          setFile("");
        })
        .catch((err) => {
          dispatch(
            setMsgOpen({
              msg: "Something went wrong !",
              bgColor: "red",
              error: true,
            })
          );
          setTimeout(() => {
            dispatch(setMsgClose());
          }, 2000);
        });
    }
  };

  const clearFilds = () => {
    setFile("");
    setLink("");
    setLoading(0);
  };

  return (
    <Container>
      <Info>
        <h1>Hey there ,</h1>
        <p>Welcome to the fileShare </p>
      </Info>

      <Main>
        <Email
          id={link && link}
          style={
            open
              ? { transform: "scale(0)", zIndex: "-1" }
              : { transform: "scale(1)", zIndex: "10" }
          }
          clear={clearFilds}
        />
        <Center
          style={
            open
              ? { transform: "scale(0)", zIndex: "-1" }
              : { transform: "scale(1)", zIndex: "10" }
          }
        >
          <Top
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e)}
            onDragLeave={(e) => handleLeave(e)}
            style={
              over
                ? { backgroundColor: "rgba(255, 219, 168 ,0.2)" }
                : { backgroundColor: "white" }
            }
          >
            <h4>Drop or select file</h4>
            <label htmlFor="file">
              <img
                style={
                  over ? { transform: "scale(1.2)" } : { transform: "scale(1)" }
                }
                src="images/add-files.svg"
              />
            </label>
            <input
              name="file"
              onChange={(e) => handleChange(e)}
              style={{ display: "none" }}
              type="file"
              id="file"
              disabled={link ? true : false}
            />
          </Top>
          {file && (
            <Upload>
              <h4>Uploading File...</h4>
              <p>{`${loading} %`}</p>
              <Bar style={{ width: `${loading}%` }} />
            </Upload>
          )}
          {link && (
            <>
              <Link>
                <p>Link will be expire in 24 hours</p>
                <CopyLink>
                  <input type="text" value={link} readOnly />
                  {copy ? <Check /> : <Copy onClick={copyText} />}
                </CopyLink>
              </Link>
              <Or>Or</Or>
              <Send>
                <button
                  onClick={(e) => {
                    dispatch(setOpen());
                  }}
                >
                  Send file via email
                </button>
              </Send>
            </>
          )}
        </Center>
        <UploadImg src="images/upload.svg" />
      </Main>
    </Container>
  );
}

export default Content;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 70px);
  position: relative;
  padding: 0 20px;

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
`;

const Info = styled.div`
  padding-top: 100px;
  padding-left: 40px;
  color: #fff;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 3rem;
    text-transform: capitalize;
    font-weight: 800;
    font-family: sans-serif;

    @media (max-width: 425px) {
      font-size: 2.2rem;
    }
  }

  p {
    font-size: 1.5rem;
    margin-top: 20px;

    @media (max-width: 425px) {
      font-size: 1rem;
    }
  }
`;

const Main = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 40px;
  position: relative;

  @media screen and (max-width: 998px) {
    justify-content: center;
  }
`;

const UploadImg = styled.img`
  object-fit: contain;
  height: 300px;
  position: absolute;
  top: 40%;
  right: 20%;
  margin-left: 40px;

  @media screen and (max-width: 1244px) {
    right: 0;
    top: 40%;
  }

  @media screen and (max-width: 998px) {
    display: none;
  }
`;

const Center = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  margin-left: 40px;
  width: 100%;
  max-width: 500px;
  box-shadow: 2px 8px 18px 1px rgba(145, 145, 145, 0.75);
  transition: all 0.3s ease-in;

  @media screen and (max-width: 998px) {
    margin-left: 0;
  }
`;

const Top = styled.div`
  width: 100%;
  height: 100%;
  border: 2px dotted orange;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 8px;

  h4 {
    font-size: 1.3rem;
    color: grey;
  }

  img {
    width: 100px;
    margin-top: 20px;
    cursor: pointer;
    transform: scale(1);
    transition: all 250ms ease-in;

    &:hover {
      transform: scale(1.2) !important;
    }
  }
`;

const Link = styled.div`
  margin-top: 10px;
  padding: 20px;
  border: 1px solid orange;
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  p {
    font-size: 1rem;
    text-align: center;
  }
`;

const CopyLink = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  input {
    flex: 1;
    padding: 8px 10px;
    outline: none;
    border-radius: 4px;
    border: 1px solid grey;
    color: grey;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Copy = styled(FileCopyIcon)`
  margin-left: 10px;
  color: orange;
  cursor: pointer;
`;

const Send = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;

  button {
    width: 100%;
    padding: 8px 20px;
    background-color: orange;
    border: 1px solid transparent;
    outline: none;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
    transition: all 250ms ease-in;
    text-transform: capitalize;

    &:hover {
      background-color: #fff;
      color: orange;
      border: 1px solid orange;
    }
  }
`;

const Upload = styled.div`
  width: 100%;
  border: 1px solid orange;
  margin-top: 10px;
  padding: 20px;
  border-radius: 8px;

  h4 {
    font-size: 1rem;
    text-align: center;
    color: lightgrey;
  }
`;

const Bar = styled.div`
  width: 0%;
  height: 10px;
  border: 1px solid orange;
  margin-top: 10px;
  border-radius: 999px;
  background-color: orange;
  transition: all 250ms ease-in;
`;

const Or = styled.p`
  margin: 10px 0;
  text-align: center;
  color: grey;
  text-transform: lowercase;
`;

const Check = styled(CheckCircle)`
  margin-left: 10px;
  color: green;
  cursor: pointer;
`;
