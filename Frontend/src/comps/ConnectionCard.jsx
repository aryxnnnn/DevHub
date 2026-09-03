import React from 'react'

function ConnectionCard({user , removeUser}) {

  

  return (
    <div className=" relative w-[60%] min-h-60 mx-auto my-4 flex bg-base-300 items-center p-2 overflow-auto">

      <button className="absolute top-4 right-4 btn btn-sm btn-error"
       onClick={() => removeUser(user._id)}> X </button>

      <div className="w-[7.14%] bg-base-300" />

      <div className="w-[28.57%] min-h-42.5">
        <img src={user.photoUrl} alt="user photo" className="w-full h-full object-contain"/>
      </div>

      <div className="w-[9.29%] bg-base-300 " />

      <div className="w-[42.86%] h-50 p-3">
        <div className='flex justify-between mb-3'>
          <span className='text-2xl text-yellow-500 '>{user.firstName}  {user.lastName}</span>
          <span className='text-xl text-yellow-500 ml-4'>{user.gender}, {user.age}</span>
        </div>
        <p className='mb-3' >{user.bio}</p>

        {user.skills.length === 0 &&
          <p className='my-4 text-xl'>Currently at a learning phase...</p>
        }
        
        {user.skills?.slice(0, 3).map((skill) => (
          <div key={skill} className="badge badge-soft badge-info h-7 mr-5 text-2xl p-2">
            {skill}
          </div>
        ))}
      </div>

      <div className="w-[7.14%] bg-base-300" />

    </div>
  )
}

export default ConnectionCard