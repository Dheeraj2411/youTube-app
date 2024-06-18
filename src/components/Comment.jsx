import React from "react";
import User from "../assets/user-circle.svg";
const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex bg-slate-100 m-1">
      <img src={User} alt="user icon" className="  rounded-full w-12 h-12" />
      <div className="leading-4 content-center ml-2">
        <p className="p-0">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
