import React from "react";
import "./Sidebar.css";
import {
  Bookmark,
  Home,
  ListAlt,
  MailOutline,
  MoreHoriz,
  NotificationsNone,
  PermIdentity,
  Search,
  Twitter,
} from "@mui/icons-material";
import SidebarOption from "./SidebarOption";
import { Button } from "@mui/material";

function Sidebar() {
  return (
    <div className="sidebar">
      <Twitter className="sidebar__twitterIcon" />
      <SidebarOption active Icon={Home} title={"Home"} />
      <SidebarOption Icon={Search} title={"Explore"} />
      <SidebarOption Icon={NotificationsNone} title={"Notifications"} />
      <SidebarOption Icon={MailOutline} title={"Messages"} />
      <SidebarOption Icon={Bookmark} title={"Bookmarks"} />
      <SidebarOption Icon={ListAlt} title={"Lists"} />
      <SidebarOption Icon={PermIdentity} title={"Profile"} />
      <SidebarOption Icon={MoreHoriz} title={"More"} />

      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
