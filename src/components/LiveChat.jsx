import React, { useEffect } from "react";
import ChatMessages from "./ChatMessages";

const LiveChat = () => {
  useEffect(() => {
    const i = setInterval(() => {
      console.log("Live Comment");
    }, 2000);
    return () => clearInterval(i);
  }, []);
  return (
    <div>
      <ChatMessages name="Dheeraj" message="YouTUBE Clone" />
      <ChatMessages name="Dheeraj" message="YouTUBE Clone" />
      <ChatMessages name="Dheeraj" message="YouTUBE Clone" />
      <ChatMessages name="Dheeraj" message="YouTUBE Clone" />
      <ChatMessages name="Dheeraj" message="YouTUBE Clone" />
      <ChatMessages name="Dheeraj" message="YouTUBE Clone" />
    </div>
  );
};

export default LiveChat;
