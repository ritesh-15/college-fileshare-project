import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-fileshare-01.herokuapp.com",
});

export default instance;
