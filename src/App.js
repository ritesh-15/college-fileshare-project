import "./App.css";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Message from "./Components/Message";
import { useSelector } from "react-redux";
import { selectMsg } from "./fetures/messageSlice";

function App() {
  const message = useSelector(selectMsg);

  return (
    <div className="App">
      <Header />
      <Content />
      <Message
        hide={!message ? true : false}
        message={message?.msg}
        error={message?.error}
        bgColor={message?.bgColor}
      />
    </div>
  );
}

export default App;
