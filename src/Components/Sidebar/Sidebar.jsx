import React, { useEffect, useState } from "react";
import "../../Assetes/Css/sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import srk from "../../Assetes/Images/srk.jpg";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChar from "./SidebarChar";
import axios from "../Request/axios";

function Sidebar() {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    axios.get("/rooms/sync").then((res) => {
      setRooms(res.data);
    });
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src={srk} />
        <div className="sidebar_header_right">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__search_container">
          <SearchOutlined />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>
      <div className="sidebar__chats">
        {rooms.map((room) => (
          <SidebarChar key={room.id} id={room._id} name={room.name} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
