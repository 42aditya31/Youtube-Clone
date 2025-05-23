import React, { useEffect } from "react";
import ChatMsg from "./ChatMsg";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../store/chatSlice";
import { generateRandomeName, randomMessages } from "../store/helper";

const LiveChat = () => {
  const dispatch = useDispatch();


  const chatMessage = useSelector((store)=> store.chat.messages)

  useEffect(() => {
    const i = setInterval(() => {
      // dispatch(addMessage({
      //   name:generateRandomeName(),
      //   message: randomMessages(20)

      // }))
    }, 500);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="p-2 ml-2 border-1 w-full bg-slate-50 flex flex-col-reverse overflow-y-scroll rounded-lg h-[520px]">
      {chatMessage.map((chat,index)=><ChatMsg key={index} name={chat.name} message={chat.message} />)}
    </div>
  );
};

export default LiveChat;
