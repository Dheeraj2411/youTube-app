import React from "react";
import User from "../assets/user-circle.svg";

const ChatMessages = ({ name, message }) => {
  return (
    <div className="p-2 flex items-center shadow-sm">
      <img className="h-6" src={User} alt="user Icon" />
      <span className="font-semibold mx-2 text-lg">{name} :</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessages;
