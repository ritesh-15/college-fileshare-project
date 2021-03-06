import "./App.css";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Message from "./Components/Message";
import { useSelector } from "react-redux";
import { selectMsg } from "./fetures/messageSlice";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Use from "./Components/Use";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { selectOpenMsg } from "./fetures/alertSlice";

function App() {
  const message = useSelector(selectMsg);
  const msgOpen = useSelector(selectOpenMsg);
  console.log("msg open", msgOpen);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/use">
            <Header lineColor="black" />
            <Use />
            <Footer />
          </Route>
          <Route path="/contact">
            <Header />
            <Contact />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Content />
            <Footer />
          </Route>
        </Switch>
      </Router>
      <Message
        hide={msgOpen ? false : true}
        message={message?.msg}
        error={message?.error}
        bgColor={message?.bgColor}
      />
    </div>
  );
}

export default App;
