import React from "react";
import { Avatar } from "./Avatar";

export default {
  title: "Components | Avatar",
  parameters: {
    component: Avatar,
    componentSubtitle: "Displays an Avatar"
  }
};

export const defaultAvatar = () => (
  <div>
    <Avatar type="square" size={64} icon="user" />
  </div>
);

defaultAvatar.story = {
  name: "Basic Avatar"
};
