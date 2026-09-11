import React, { useEffect, useState } from "react";
import { CreateSocketConnection } from "../utils/Socket";
import { useSelector } from "react-redux";
import axios from "axios";
import { BaseUrl } from "../utils/constants";

function ChatCard({ userId }) {
  const targetId = userId;
  const user = useSelector((state) => state.user);
  const name = user?.userData?.firstName;
  const myId = user?.userData?._id;
  // console.log(user.userData.firstName) ;

  useEffect(() => {
    if (!myId) return;

    const socket = CreateSocketConnection();

    socket.on("connect", () => {
      socket.emit("joinchat", { name, myId, targetId });
    });

    // socket.on("messageRecieved", ({ senderId, name, message }) => {
    socket.on("messageRecieved", (data) => {
      // console.log("FULL RECEIVED DATA:", data);
      const { senderId, name, message , time } = data;
      setMessages((prevMessages) => [
        ...prevMessages,
        { senderId, name, message, time },
      ]);
    });

    socket.on("connect_error", (error) => {
      console.log("SOCKET CONNECTION ERROR:", error);
    });

    return () => {
      socket.disconnect();
    };
  }, [myId, targetId]);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const time = new Date().toISOString();

    const socket = CreateSocketConnection();
    socket.emit("sendMessage", { myId, targetId, name, message, time });

    setMessage("");
  };

  const fetchChats = async() =>{
    try {
      const res = await axios.post(BaseUrl + "/chat" , {targetId} , {withCredentials : true})
      // console.log(res.data.chat.messages) ;  

      const chatDetails = res?.data?.chat?.messages?.map((msg)=>{
        return {
          senderId : msg.senderId._id , 
          name : msg.senderId.firstName , 
          message : msg.message , 
          time : msg.createdAt
        }
      })

      setMessages(chatDetails || []) ; 

    } catch (error) {
      console.log(error.message) ; 
    }
  }

  useEffect(() => {
    if (!targetId) return;
    fetchChats();
  }, [targetId]);

  return (
    <div className="flex h-full flex-col">
      {/* Messages */}

      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, index) => {
          const isMyMessage = msg.senderId === myId;

          return (
            <div
              key={index}
              className={`chat ${isMyMessage ? "chat-end" : "chat-start"}`}
            >
              <div className="chat-header">
                {isMyMessage ? "You" : msg.name}

                <time className="ml-2 text-xs opacity-50">
                  {new Date(msg.time).toLocaleTimeString([], {hour: "2-digit",
                                             minute: "2-digit",})}
                </time>
              </div>

              <div className="chat-bubble">{msg.message}</div>

              <div className="chat-footer opacity-50">Delivered</div>
            </div>
          );
        })}
      </div>
      {/* Input Area */}

      <div className="flex gap-2 border-t p-4">
        <input
          type="text"
          placeholder="Type a message..."
          className="input input-bordered flex-1"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
        />

        <button className="btn btn-primary" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatCard;
