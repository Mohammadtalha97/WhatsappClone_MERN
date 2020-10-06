import React, { useEffect, useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Chatbar from "./Components/Chatbar/Chatbar";
import "./App.css";
import Pusher from "pusher-js";
import axios from "./Components/Request/axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [messages, setMessage] = useState([]);

  useEffect(() => {
    axios.get("/messages/sync").then((res) => {
      setMessage(res.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher("830052142e9160f7b757", {
      cluster: "eu",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage) => {
      setMessage([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);
  return (
    <div className="app">
      <div className="app__body">
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/rooms/:roomId">
              <Chatbar messages={messages} />
            </Route>
            <Route path="/">
              <Chatbar />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
