import React from "react";
import { Link } from 'react-router-dom';

function ConnectionCard({ user, removeUser }) {
  return (
    <div className="w-[70%] min-h-60 mx-auto my-4 flex bg-base-300 rounded-xl p-8 gap-8 items-stretch">
      {/* LEFT SECTION — PROFILE IMAGE */}
      <div className="w-[25%] flex items-center justify-center border-r border-base-content/20 pr-8">
        <img
          src={user.photoUrl}
          alt={`${user.firstName}'s profile`}
          className="w-full aspect-square object-cover rounded-lg"
        />
      </div>

      {/* MIDDLE SECTION — USER DETAILS */}
      <div className="w-[55%] flex flex-col justify-center">
        {/* Name + Gender/Age */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-3xl text-yellow-500">
            {user.firstName} {user.lastName}
          </span>

          <span className="text-2xl text-yellow-500">
            {user.gender}, {user.age}
          </span>
        </div>

        {/* Bio */}
        <p className="text-lg mb-6">{user.bio}</p>

        {/* Skills / Learning Phase */}
        {user.skills?.length === 0 ? (
          <p className="text-xl">Currently at a learning phase...</p>
        ) : (
          <div className="flex gap-4 flex-wrap">
            {user.skills?.slice(0, 3).map((skill) => (
              <div
                key={skill}
                className="badge badge-soft badge-info h-10 text-lg px-4"
              >
                {skill}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* RIGHT SECTION — ACTION BUTTONS */}
      <div className="w-[20%] flex flex-col justify-between border-l border-base-content/20 pl-8">
        {/* MESSAGE BUTTON */}
        <Link to= {`/chat/${user._id}`}>
          <button className="btn btn-primary w-full"
            onClick={() => { }}>
             💬 Message
          </button>
        </Link>

        {/* DISCONNECT BUTTON */}
        <button
          className="btn btn-error w-full h-11"
          onClick={() => removeUser(user._id)}
        >
          👤➖ Disconnect
        </button>
      </div>
    </div>
  );
}

export default ConnectionCard;
