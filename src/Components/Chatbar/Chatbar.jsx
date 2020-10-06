import "../../Assetes/Css/chat.css";
import axios from "../Request/axios";
import Timestamp from "react-timestamp";
import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  MoreVert,
  SearchOutlined,
} from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Chatbar({ messages }) {
  const [input, setInput] = useState("");
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");

  useEffect(() => {
    console.log();
    axios
      .get(`/room/${roomId}`)
      .then((res) => {
        setRoomName(res.data.name);
      })
      .catch((err) => {
        console.log("Err", err);
      });
  });

  const sendMessage = async (e) => {
    e.preventDefault();
    await axios.post("/message/new", {
      message: input,
      name: roomName,
      timestamp: new Date().toLocaleTimeString(),
      received: true,
      roomId: roomId,
    });

    setInput("");
  };
  return (
    <div className="chatbar">
      <div className="chat__header">
        <Avatar />
        <div className="chat__header__info">
          <h3>{roomName}</h3>
          <p>last seen{""}18 Aug 2020 21:15:02 GMT</p>
        </div>

        <div className="chat__header__right">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((msg) =>
          msg.roomId == roomId ? (
            <p
              className={`chat__message ${msg.received && "chat__reciever"}   `}
            >
              <span className="chat__name">{msg.name}</span>
              {msg.message}
              <span className="chat__timestamp">{msg.timestamp}</span>
            </p>
          ) : (
            ""
          )
        )}
      </div>
      <div className="chat_footer">
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Send a messagee
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chatbar;
