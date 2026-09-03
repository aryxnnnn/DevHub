import React from 'react'

function ProfileCard({user}) {
  return <>
      <div className="card bg-base-300 w-110 shadow-sm p-12 text-2xl mt-15 ">
          <figure className='max-h-100'>
            <img
              src={user.photoUrl}
              alt="Profile Photo" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">
              {user.firstName}
              <div className="badge badge-secondary text-xl mx-3">{user.gender}</div>
              <div className="badge badge-secondary text-xl">{user.age}</div>
            </h2>
            <p className='text-lg'>{user.bio}</p>
            <div className="card-actions ">
              {user.skills?.map((skill) => (
                <div className="badge badge-outline bg-amber-200 text-black text-lg" key={skill}> {skill}</div>
              ))}
            </div>
          </div>
      </div>
  </>
}

export default ProfileCard