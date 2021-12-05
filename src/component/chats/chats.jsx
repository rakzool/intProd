import React, { useState } from "react";
import Styles from "./chats.module.scss";
import Data from "../../Data.json";

import { FiChevronRight } from "react-icons/fi";

import Inner from "../Inner/inner.jsx";

export default function Chats() {
  const [open, setOpen] = useState(false);
  const [chatData, setchatData] = useState({});

  const handleClick = () => {
    setOpen(!open);
  };

  const dialogOpen = (contactName, contactImage, contactChats) => {
    handleClick();
    setchatData({
      name: contactName,
      image: contactImage,
      chats: contactChats,
    });
  };
  return (
    <div>
      <div>
        {Data.map((ele, index) => {
          return (
            <div
              className={Styles.block}
              key={index}
              onClick={() => {
                dialogOpen(ele.contactName, ele.image, ele.chats);
              }}
            >
              <div className={Styles.blockInner}>
                <img src={ele.image} alt="avatar" className={Styles.avatar} />

                <span className={Styles.contactName}>{ele.contactname}</span>
                <span className={Styles.arrow}>
                  <FiChevronRight
                    style={{ fontSize: "2.1rem", fontWeight: "bolder" }}
                  />
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <Inner
        dialogOpen={open}
        handleClick={handleClick}
        name={chatData.name}
        image={chatData.image}
        chats={chatData.chats}
      />
    </div>
  );
}
