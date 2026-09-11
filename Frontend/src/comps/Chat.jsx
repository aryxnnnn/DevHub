import axios from "axios";
import React, { useEffect, useState } from "react";
import { BaseUrl } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { ConnectionActions } from "../store/connection";
import { Link, useParams } from "react-router-dom";

import LoadingSpinner from "./LoadingSpinner";
import ChatCard from "./ChatCard";
import chatWelcome from "../img/chatWelcome.png";

function Chat() {
  const dispatch = useDispatch();

  const { userId } = useParams();

  const userConnections = useSelector((state) => state.connections);

  const [loading, setLoading] = useState(true);

  // FETCH CONNECTIONS
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BaseUrl + "/user/connections", {
        withCredentials: true,
      });

      dispatch(ConnectionActions.addConnections(res.data.connections));
    } catch (error) {
      console.log(error?.response?.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="w-[90%] mx-auto  mt-[2.5%] h-[87vh] flex bg-base-300 rounded-xl overflow-hidden">
      {/* ================= LEFT SIDE ================= */}

      <div className="w-[25%] border-r border-base-content/10 flex flex-col">
        {/* HEADER */}
        <div className="p-5 border-b border-base-content/10">
          <h1 className="text-2xl font-semibold">Chats</h1>
        </div>

        {/* CONNECTION LIST */}
        <div className="overflow-y-auto flex-1">
          {userConnections?.length === 0 && (
            <div className="flex justify-center items-center h-full">
              <p className="opacity-60">No connections yet</p>
            </div>
          )}

          {userConnections?.map((user) => (
            <Link key={user._id} to={`/chat/${user._id}`}>
              <div
                className={`flex items-center gap-4 p-4 cursor-pointer transition hover:bg-base-200 border-b border-base-content/5

                  ${userId === user._id ? "bg-primary/15 border-l-4 border-l-primary" : ""}
                `}
              >
                {/* PROFILE IMAGE */}
                <img
                  src={user.photoUrl}
                  alt={user.firstName}
                  className="w-12 h-12 rounded-full object-cover"
                />

                {/* USER DETAILS */}
                <div className="overflow-hidden">
                  <p className="font-semibold text-lg truncate">
                    {user.firstName}
                  </p>

                  <p className="text-sm opacity-60 truncate">
                    {/* {"Start a conversation" || "last Message"} */}
                    Start a conversation
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ================= RIGHT SIDE ================= */}

      <div className="w-[75%] overflow-hidden">
        {userId ? (
          <ChatCard userId={userId} />
        ) : (
          <img
            src={chatWelcome}
            alt="Start chatting with your connections"
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </div>
  );
}

export default Chat;
