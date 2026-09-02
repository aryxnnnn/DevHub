import React from 'react'

function FeedCard({user}) {
  return (
    <div>
      <div className="card bg-base-300 w-96 shadow-sm p-2">
        <figure className="px-10 pt-10">
          <img
            src={user.photoUrl}
            alt="profle pic"
            className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{user.firstName}</h2>
          <p>{user.bio}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Ignore</button>
            <button className="btn btn-secondary">Interested</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedCard