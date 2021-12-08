import React, { useState } from "react";
import Styles from "./inner.module.scss";
import Data from "../../Data.json";

import { FiChevronRight } from "react-icons/fi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
import { IoIosAdd } from "react-icons/io";

import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";

function SimpleDialog(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <div className={Styles.Dialog}>
        <div className={Styles.title}>
          <span onClick={handleClose} className={Styles.closeBtn}>
            <IoMdArrowRoundBack
              style={{ fontSize: "1.5rem", color: "white" }}
            />
          </span>
          <span className={Styles.HeadtextInner}>
            {props.person.contactname}
          </span>
          <span>
            <img
              src={props.person.image}
              alt="sudo"
              className={Styles.contactImage}
            />
          </span>
        </div>

        <div className={Styles.chatsMain}>
          {props.chats.map((ele) => {
            if (ele.type === "text") {
              if (ele.sender === "me") {
                return <div className={Styles.chatMe}>{ele.thread}</div>;
              } else if (ele.sender === "person") {
                return (
                  <div className={Styles.fullMain}>
                    <div>
                      <img
                        src={props.person.image}
                        alt="person"
                        className={Styles.chatmage}
                      />
                    </div>
                    <span className={Styles.chatYou}>{ele.thread}</span>
                  </div>
                );
              }
            } else if (ele.type === "audio") {
              return (
                <div>
                  <div style={{ display: "flex" }}>
                    <div className={Styles.fullMain}>
                      <img
                        src={props.person.image}
                        alt="person"
                        className={Styles.chatmage}
                      />
                    </div>
                    <audio controls>
                      <source src={ele.thread} type="audio/mpeg" />
                    </audio>
                  </div>
                </div>
              );
            } else if (ele.type === "image") {
              if (ele.sender === "person") {
                return (
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "'flex-start",
                        justifyContent: "flex-start",
                      }}
                    >
                      <div className={Styles.fullMainImage}>
                        <img
                          src={props.person.image}
                          alt="person"
                          className={Styles.chatmage}
                        />
                      </div>
                      <div className={Styles.imageYou}>
                        <div className={Styles.imageReply}>{ele.alt}</div>
                        <div>
                          <img
                            src={ele.thread}
                            alt={ele.alt}
                            className={Styles.chatImage}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            }
            return <div></div>;
          })}
          <div className={Styles.spacerBtm}></div>
        </div>
        <div className={Styles.bottom}>
          <div className={Styles.holder}>
            <input type="text" placeholder="Aa" />
          </div>
          <div className={Styles.greenAdd}>
            <IoIosAdd />
          </div>
          <div className={Styles.send}>
            <BsArrowRight />
          </div>
        </div>
      </div>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function Inner() {
  const [open, setOpen] = useState(false);
  const [person, setPerson] = useState({});
  const [chats, setChats] = useState([]);

  const handleClickOpen = (person) => {
    setOpen(true);
    setPerson(person);
    setChats(person.chats);
    console.log(person);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {Data.map((ele, index) => {
        return (
          <div
            className={Styles.block}
            key={index}
            onClick={() => handleClickOpen(ele)}
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
      <SimpleDialog
        open={open}
        onClose={handleClose}
        person={person}
        chats={chats}
      />
    </div>
  );
}
