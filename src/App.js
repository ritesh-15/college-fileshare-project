import "./App.css";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Message from "./Components/Message";
import { useSelector } from "react-redux";
import { selectMsg } from "./fetures/messageSlice";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Use from "./Components/Use";
import Contact from "./Components/Contact";

function App() {
  const message = useSelector(selectMsg);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/use">
            <Header />
            <Use />
          </Route>
          <Route path="/contact">
            <Header />
            <Contact />
          </Route>
          <Route path="/">
            <Header />
            <Content />
          </Route>
        </Switch>
      </Router>
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
