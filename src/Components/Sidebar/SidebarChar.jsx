import { Avatar } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "../../Assetes/Css/sidebarchat.css";
function SidebarChar({ id, name }) {
  return (
    <Link to={`/rooms/${id}`} className="sidebarChat__LINK">
      <div className="sidebarChat">
        <Avatar />
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>this is the last message</p>
        </div>
      </div>
    </Link>
  );
}

export default SidebarChar;
