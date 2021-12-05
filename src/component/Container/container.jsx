import React from "react";
import Styles from "./container.module.scss";

import ChatHead from "../chatHead/chatHead.jsx";
import Chats from "../chats/chats.jsx";

export default function Container() {
  return (
    <div className={Styles.containerMain}>
      <ChatHead />
      <Chats />
    </div>
  );
}
