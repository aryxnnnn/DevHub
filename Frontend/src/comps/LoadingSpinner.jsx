import React from 'react'

function LoadingSpinner() {
  return <div className='min-h-screen min-w-screen flex justify-center items-center'>
    <span className="loading loading-bars loading-xs"></span>
    <span className="loading loading-bars loading-sm"></span>
    <span className="loading loading-bars loading-md"></span>
    <span className="loading loading-bars loading-lg"></span>
    <span className="loading loading-bars loading-xl"></span>
  </div>
}

export default LoadingSpinner