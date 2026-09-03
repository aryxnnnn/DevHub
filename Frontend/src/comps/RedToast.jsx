import React from 'react'

function RedToast({text}) {
  return (
    <div className="toast toast-top toast-center z-50">
      <div className="alert alert-error">
        <span>{text}</span>
      </div>
    </div>
  )
}

export default RedToast