import React from "react";

function RequestCard({ requestId, user, acceptRequest, rejectRequest }) {
  return (
    <>
      <div className="w-[70%] mx-auto my-4 px-[5%] py-5 flex items-center bg-slate-800 rounded-xl">
        <div className="w-20 h-20 shrink-0">
          <img
            src={user.photoUrl}
            alt={`${user.firstName} ${user.lastName}`}
            className="w-full h-full rounded-full object-cover"
          />
        </div>

        <div className="ml-6 flex-1">
          <h2 className="text-2xl font-semibold">
            {user.firstName} {user.lastName}
          </h2>
        </div>

        <div className="flex gap-3">
          <button
            className="btn btn-success text-xl"
            onClick={() => {
              acceptRequest(requestId);
            }}
          >
            Accept ✅
          </button>

          <button
            className="btn btn-error text-xl"
            onClick={() => {
              rejectRequest(requestId);
            }}
          >
            Reject ❌
          </button>
        </div>
      </div>
    </>
  );
}

export default RequestCard;
