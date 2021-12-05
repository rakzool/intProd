import React from "react";
import Styles from "./chatHead.module.scss";

import { BsFillPlusCircleFill } from "react-icons/bs";

export default function ChatHead() {
  return (
    <div className={Styles.chatHead}>
      <div>
        <span className={Styles.headTitle}>chats</span>
        <span>
          <button className={Styles.add}>
            <BsFillPlusCircleFill
              style={{ color: "#00A183", fontSize: "2.3rem" }}
            />
          </button>
        </span>
      </div>
    </div>
  );
}
