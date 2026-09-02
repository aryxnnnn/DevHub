import React from 'react'

function Toast({text}) {
  return (
    <div className="toast toast-top toast-center z-50">
      {/* <div className="alert alert-info">
        <span>{t</span>
      </div> */}
      <div className="alert alert-success">
        <span>{text}</span>
      </div>
    </div>
  )
}

export default Toast