import React from 'react'

export function Notification({ title, detail, done }) {
  return (
    <div className="notification">
      <div className="content">
        <h3>{title}</h3>
        <p>{detail}</p>
      </div>
    </div>
  )
}
