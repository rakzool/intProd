import React from "react";
import Styles from "./container.module.scss";

import ChatHead from "../chatHead/chatHead.jsx";

import Inner from "../Inner/inner.jsx";

export default function Container() {
  return (
    <div className={Styles.containerMain}>
      <ChatHead />

      <Inner />
    </div>
  );
}
